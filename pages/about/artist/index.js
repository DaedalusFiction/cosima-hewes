import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NativeImage from "../../../components/general/NativeImage";
import { leadProfile, secondaryProfiles } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="THE ARTIST">
            <AboutNavbar />
            <Box sx={{ marginTop: "2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <NativeImage maxSize={1000} image={leadProfile.image} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">{leadProfile.name}</Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {leadProfile.content}
                        </Typography>
                    </Grid>
                    {/* {secondaryProfiles.map((profile, index) => {
            return (
              <Grid item key={index} xs={12} md={4}>
                <Box sx={{ marginTop: "4rem" }}>
                  <NativeImage
                    image={profile.image}
                    height="25rem"
                    width="100%"
                  />
                  <br />
                  <Typography variant="h4">{profile.name}</Typography>
                  <br />
                  <Typography sx={{ whiteSpace: "pre-wrap" }}>
                    {profile.content}
                  </Typography>
                </Box>
              </Grid>
            );
          })} */}
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
