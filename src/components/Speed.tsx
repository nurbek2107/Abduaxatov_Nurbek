"use client";

import React, { useState } from "react"; // Import React
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

// Actions list
const actions = [
    { icon: <PhoneIcon />, name: "Phone", url: "tel:+998940192117" }, 
    { icon: <EmailIcon />, name: "Email", url: "mailto:abduaxatov007@gmail.com" },
    { icon: <TelegramIcon />, name: "Telegram", url: "https://t.me/JS_deveIoper" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (url: string) => {
        if (url) {
            window.open(url, "_blank");
        }
        handleClose();
    };

    return (
        <div className="mt-[-240px]">
            <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        right: 16,
                    }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => handleClick(action.url)} 
                            sx={{
                                color: "white",
                            }}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
}
