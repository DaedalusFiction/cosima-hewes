import { Box, Grid, Typography } from "@mui/material";
import NativeImage from "../../components/general/NativeImage";

const ProcessStep = ({ step }) => {
    return <NativeImage maxSize={800} image={step.image} />;
};

export default ProcessStep;
