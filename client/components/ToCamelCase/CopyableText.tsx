import {
    Card,
    CardContent,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel, Snackbar,
} from "@mui/material";
import * as React from "react";
import CopyableTextProps from "./interface/CopyableText";
import {ContentCopy} from '@mui/icons-material';
import Styles from './ToCamelCase.module.scss';
import TextCase from "./functions/interface/TextCase";

const CopyableText: React.FunctionComponent<CopyableTextProps> = ({text}) => {
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const onCopyClick = async (e) => {
        await navigator.clipboard.writeText(e);
        setOpenSuccess(true);
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };
    return (
        <div className={Styles.ccLayout}>
                {text.map(({text, label}: TextCase, index) => (
                    <Card sx={{ display: 'flex' }} key={index}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <FormControl variant="standard" fullWidth={true}>
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    {label}
                                </InputLabel>
                                <Input
                                    value={text}
                                    readOnly={true}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => onCopyClick(text)}
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                <ContentCopy/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </CardContent>
                    </Card>
                ))}
            <Snackbar
                open={openSuccess}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Data copied to clipboard"
            />
        </div>
    );
};

export default CopyableText;
