import {Box, Button, Checkbox, Chip, FormControlLabel, FormGroup, Popover, TextField} from "@mui/material";
import Styles from './ToCamelCase.module.scss';
import * as React from "react";
import CopyableText from "./CopyableText";
import toDifferentCases from "./functions";
import TextCase from "./functions/interface/TextCase";
import {availableCaseTypes} from "./constdata/availableCaseTypes";
import {availableEndings} from "./constdata/availableExtraData";
import ControlLabelWithPopover from "./ControlLabelWithPopover";

const ToDifferentCases = () => {
    const [text, setText] = React.useState<string>();
    const [dataToDisplay, setDataToDisplay] = React.useState<TextCase[]>();
    const [extraData, setExtraData] = React.useState<string[]>([]);
    const [selectedCaseTypes, setSelectedCaseTypes] = React.useState<string[]>([]);
    const caseTypes = Object.keys(availableCaseTypes);
    const extraTypes = Object.values(availableEndings);

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const onApply = (e) => {
        e && e.preventDefault();
        text && setDataToDisplay(toDifferentCases(text, selectedCaseTypes, extraData));
    }

    const handleExtraChange = (e) => {
        if(e.target.checked) {
            setExtraData((prevState => {
                prevState.push(e.target.value)
                return prevState;
            }));
        } else {
            setExtraData((prevState => {
                return prevState.filter((element => element !== e.target.value));
            }));
        }
    }

    const handleTypeSelect = (e) => {
        if(e.target.checked) {
            setSelectedCaseTypes((prevState => {
                prevState.push(e.target.value)
                return prevState;
            }));
        } else {
            setSelectedCaseTypes((prevState => {
                return prevState.filter((element => element !== e.target.value));
            }));
        }
    }

    return (
        <Box component="form" onSubmit={onApply}>
            <TextField
                multiline={true}
                maxRows={3}
                id="outlined-basic"
                label="Input text to convert"
                variant="outlined"
                fullWidth={true}
                onChange={onTextChange}
                autoFocus={true}
                value={text}/>
            <div>
                {caseTypes.map((caseType: string, index: number) => (
                    <ControlLabelWithPopover value={caseType}
                                             label={availableCaseTypes[caseType].label}
                                             handleTypeSelect={handleTypeSelect}
                                             popover={availableCaseTypes[caseType].example}
                                             key={index}/>
                ))}
            </div>
            <div>
                {extraTypes.map((extraType: string, index: number) => (
                    <FormControlLabel value={extraType}
                                      onChange={handleExtraChange}
                                      control={<Checkbox />}
                                      label={extraType}
                                      key={index}/>
                ))}
            </div>
            <Button variant="contained"
                    className={Styles.ccButtonWrapper}
                    onClick={onApply}>Apply</Button>
            {dataToDisplay && dataToDisplay.length > 0 && <CopyableText text={dataToDisplay}/>}
        </Box>
    );
};

export default ToDifferentCases;
