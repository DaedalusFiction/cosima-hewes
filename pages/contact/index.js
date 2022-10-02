import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ContactForm from "../../components/contact/ContactForm";
import NativeImage from "../../components/general/NativeImage";
import PageLayout from "../../components/layout/PageLayout";
import { contactContent } from "../../siteInfo";

const formData = [
    { name: "Name", type: "text", value: "" },
    { name: "Email", type: "text", value: "" },
    {
        name: "Interest",
        type: "dropdown",
        options: ["Service One", "Service Two", "Service Three"],
        value: "",
    },
];

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography variant="h3">
                                    Get in Touch!
                                </Typography>
                                <br />
                                <Typography>
                                    Email: ecosima@yahoo.com
                                </Typography>
                                <br />
                                <Typography>Telephone: 413-625-6092</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeImage
                            image={contactContent.image}
                            maxSize={2000}
                        />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
