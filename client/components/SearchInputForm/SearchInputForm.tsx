import {Autocomplete, CircularProgress, TextField} from "@mui/material";
import * as React from "react";

type Props = {
    searchMethod: (value: string) => Promise<any>;
    label: string;
    onSelect: (value: string) => void;
    defaultValue?: string;
}

export const SearchInputForm: React.FunctionComponent<Props> = ({searchMethod, label, onSelect, defaultValue}) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    const onClose = () => {
        setOpen(false);
    };

    const onOpen = () => {
        setOpen(true);
    };

    const onInputChange = async (event, value) => {
        if(value) {
            setLoading(true);
            const data = await searchMethod(value);
            setOptions((data).data.data);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        setOptions([]);
    }, [defaultValue]);

    const onChange = (event, value) => {
        onSelect(value ? value.DescriptionRu : value);
    };

    return (
        <Autocomplete
            key={defaultValue}
            style={{marginTop: 20}}
            id="asynchronous-demo"
            sx={{ width: '20em' }}
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            getOptionLabel={(option) => option.DescriptionRu}
            options={options}
            loading={loading}
            onInputChange={onInputChange}
            onChange={onChange}
            isOptionEqualToValue={(x) => x}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}
