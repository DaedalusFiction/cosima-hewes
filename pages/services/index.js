import { Box, Button, Grid, Typography } from "@mui/material";
import {
    commissionsContent,
    leadProfile,
    secondaryProfiles,
} from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import Services from "../../components/home/Services";
import SizedImage from "../../components/general/SizedImage";
import { Container } from "@mui/system";
import Link from "next/link";

const index = () => {
    return (
        <PageLayout name="COMMISSIONS">
            <Container maxWidth="lg">
                <Box className="section">
                    <Container maxWidth="sm">
                        <Typography
                            sx={{ textAlign: "center", fontStyle: "italic" }}
                        >
                            Commissioned works are a wonderful gift of love.
                            Contact me for more information about the process
                            and pricing.
                        </Typography>
                        <br />
                        <Link href="contact">
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button variant="outlined">Contact</Button>
                            </Box>
                        </Link>
                    </Container>
                    <Grid className="section" container spacing={2}>
                        {commissionsContent.images.map((image, index) => {
                            return (
                                <Grid key={index} item xs={12} md={4}>
                                    <SizedImage
                                        height="25rem"
                                        width="100%"
                                        image={image}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    {/* <Services /> */}
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
