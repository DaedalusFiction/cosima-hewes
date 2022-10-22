import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import lightTheme from "../../styles/themes/lightTheme";
import { ArrowRightAlt } from "@mui/icons-material";
import EventImage from "./EventImage";

const EventItem = ({ fields, image }) => {
    return (
        <Box>
            {fields && (
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <Box>{image && <EventImage image={image} />}</Box>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <Box>
                                <Typography variant="h2">
                                    {fields[0].value}
                                </Typography>
                                <Typography variant="h4">{`${fields[1].value} ${
                                    fields[2].value && "through"
                                } ${fields[2].value}`}</Typography>
                                {
                                    <Typography variant="h5">{`${
                                        fields[3].value
                                    }${fields[4].value && ","} ${
                                        fields[4].value
                                    }`}</Typography>
                                }
                                <br />
                                <Typography
                                    sx={{
                                        color: lightTheme.palette.custom
                                            .lightMuted,
                                    }}
                                >
                                    {fields[5].value}
                                </Typography>
                                <br />
                            </Box>
                            <Box>
                                {/* <Button
                                    variant="contained"
                                    href={fields[6].value}
                                    size="large"
                                    endIcon={<ArrowRightAlt />}
                                >
                                    more details
                                </Button> */}
                            </Box>
                        </Box>
                    </Grid>
                    <Divider sx={{ margin: "3rem 0" }} />
                </Grid>
            )}
        </Box>
    );
};

export default EventItem;
