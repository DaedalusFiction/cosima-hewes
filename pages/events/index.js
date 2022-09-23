import React from "react";
import EventsItems from "../../components/Events/EventsItems";
import PageLayout from "../../components/layout/PageLayout";

// const events = [
//     {
//         timeUploaded: new Date(),
//         image: { url: "/images/placeholder.webp", alt: "event poster" },
//         fields: [
//             { name: "Title", type: "text", value: "Title" },
//             { name: "Start Date", type: "date", value: formatDate(new Date()) },
//             { name: "End Date", type: "date", value: "" },
//             { name: "Venue", type: "text", value: "venue" },
//             { name: "Time", type: "text", value: "8 pm" },
//             {
//                 name: "Description",
//                 type: "text",
//                 value: "Description",
//                 multiline: true,
//                 rows: 4,
//             },
//             {
//                 name: "Venue Website",
//                 type: "text",
//                 value: "https://fictionalweb.com",
//             },
//         ],
//     },
// ];

const index = () => {
    return (
        <PageLayout name="EVENTS">
            <EventsItems />
        </PageLayout>
    );
};

export default index;
