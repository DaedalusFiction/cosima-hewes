import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { homeGalleryContent } from "../../siteInfo";
import lightTheme from "../../styles/themes/lightTheme";
import NativeImage from "../general/NativeImage";
import SizedImage from "../general/SizedImage";

const HomeGallery = ({ images }) => {
    return (
        <Container maxWidth="xl">
            <Grid container rowSpacing={20} spacing={10}>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[0]} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={800} image={images[1]} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                        }}
                    >
                        <NativeImage maxSize={400} image={images[2]} />
                        <NativeImage maxSize={400} image={images[3]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={1200} image={images[4]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "6rem" }}
                    >
                        <NativeImage maxSize={1000} image={images[5]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[6]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                        }}
                    >
                        <NativeImage maxSize={800} image={images[7]} />
                        <NativeImage maxSize={600} image={images[8]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={2000} image={images[9]} />
                    </Box>
                </Grid>
                {/*<Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[10]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                        }}
                    >
                        <NativeImage maxSize={1200} image={images[11]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={600} image={images[12]} />
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <Box
                        sx={{
                            background: lightTheme.palette.background.default,
                            position: "relative",
                            zIndex: "40",
                            padding: "12rem 0",
                        }}
                    >
                        <Container maxWidth="md">
                            <Box className="flex-center">
                                <Box>
                                    <Typography>
                                        {homeGalleryContent.text}
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeGallery;
