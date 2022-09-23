import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventItem from "./EventItem";

const EventsItems = () => {
    const [events] = useGetEvents("events");
    return (
        <Container className="section" maxWidth="lg">
            <Typography variant="h2" sx={{ marginBottom: ".5em" }}>
                Upcoming:
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                {events &&
                    events.map((event, index) => {
                        return (
                            <EventItem
                                key={index}
                                fields={event.fields}
                                image={event.URLs[0]}
                            />
                        );
                    })}
            </Box>
        </Container>
    );
};

export default EventsItems;
