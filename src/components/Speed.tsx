"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';
import Tel from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import { DATA } from "@/data/resume";

const actions = [
    { icon: <DownloadIcon />, name: 'Resume', url: "/Nurbek_Abduaxatov.pdf" }, // Updated path
    { icon: <Telegram />, name: 'Telegram', url: "https://t.me/JS_deveIoper" },
    { icon: <Email />, name: 'Email', url: "mailto:abduaxatov007@gmail.com" },
    { icon: <Tel />, name: 'Phone', url: "tel:+998940192117" }
];

export default function BasicSpeedDial() {
    const handleDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || ''; // Extract filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-[-232px]">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => {
                                if (action.name === 'Resume') { // Corrected comparison
                                    handleDownload(action.url);
                                } else {
                                    window.open(action.url, '_blank');
                                }
                            }}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
}
