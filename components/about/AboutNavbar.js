import { Box, Button, Link } from "@mui/material";
import React from "react";
import { pages } from "../../siteInfo";

const AboutNavbar = () => {
    return (
        <Box
            sx={{
                margin: "2em 0 0 0",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
        >
            {/* pages[2] returns About subpages from /siteinfo */}
            {pages[1].subPages.map((subPage, index) => {
                return (
                    <Button key={index}>
                        <Link
                            style={{
                                textDecoration: "none",
                            }}
                            href={subPage.href}
                        >
                            {subPage.name}
                        </Link>
                    </Button>
                );
            })}
        </Box>
    );
};

export default AboutNavbar;
