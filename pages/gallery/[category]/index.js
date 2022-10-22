import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Gallery from "../../../components/gallery/Gallery";
import GalleryCategoryPreview from "../../../components/gallery/GalleryCategoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { galleryCategories } from "../../../siteInfo";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const Projects = ({ images }) => {
    const router = useRouter();
    const { category } = router.query;
    const title = category.toUpperCase();

    return (
        <PageLayout name={title}>
            {galleryCategories.map((galleryCategory) => {
                return (
                    galleryCategory.name === category &&
                    galleryCategory.subCategories.length > 0 && (
                        <Grid className="section" container spacing={4}>
                            {galleryCategory.subCategories.map(
                                (subCategory, index) => {
                                    return (
                                        <Grid
                                            key={index}
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                        >
                                            <GalleryCategoryPreview
                                                category={subCategory}
                                            />
                                        </Grid>
                                    );
                                }
                            )}
                        </Grid>
                    )
                );
            })}
            <Gallery images={images} category="gallery" />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const category = context.params.category;
    const imagesRef = collection(db, "gallery");
    const q1 = query(
        imagesRef,

        where("categories", "array-contains", category)
    );

    const queriedDocuments = await getDocs(q1);
    let images = [];
    queriedDocuments.docs.forEach((doc, index) => {
        if (doc.data().categories.includes(category)) {
            images = [...images, doc.data()];
        }
    });

    return {
        props: {
            images,
        },
    };
};

export default Projects;
