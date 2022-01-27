import {Checkbox, FormControlLabel, Popover, Typography} from "@mui/material";
import * as React from "react";
import { ControlLabelWithPopoverProps } from "./interface/ControlLabelWithPopover";

const ControlLabelWithPopover: React.FunctionComponent<ControlLabelWithPopoverProps> = ({handleTypeSelect, value, label, popover}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
            <>
                <FormControlLabel value={value}
                                  onChange={handleTypeSelect}
                                  control={<Checkbox />}
                                  label={label}
                                  aria-haspopup={true}
                                  onMouseEnter={handlePopoverOpen}
                                  onMouseLeave={handlePopoverClose}/>
                <Popover
                    sx={{
                        pointerEvents: 'none',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                >
                    <Typography sx={{ p: 1 }}>{popover}</Typography>
                </Popover>
            </>
    );
};

export default ControlLabelWithPopover;
