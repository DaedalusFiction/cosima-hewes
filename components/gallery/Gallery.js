import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = ({ images }) => {
    const [columns, setColumns] = useState([[], [], []]);
    const router = useRouter();
    const { category, subCategory } = router.query;

    useEffect(() => {
        function sortImages() {
            let newColumns = [[], [], []];
            images.forEach((image, index) => {
                newColumns[index % 3].push(image);
            });
            setColumns(newColumns);
        }
        sortImages();
    }, [images]);

    return (
        <Box sx={{ padding: "3rem 0" }}>
            <Grid container spacing={2}>
                {columns &&
                    columns.length > 0 &&
                    columns.map((column, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                {column.map((image, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{ margin: "1rem 0" }}
                                        >
                                            <GalleryImage
                                                image={image}
                                                category={category}
                                                subCategory={
                                                    subCategory || "all"
                                                }
                                            />
                                        </Box>
                                    );
                                })}
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
};

export default Gallery;
