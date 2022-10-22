import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../../components/layout/PageLayout";
import ProcessStep from "../../../components/process/ProcessStep";
import { processSteps } from "../../../siteInfo";

const index = () => {
    return (
        <PageLayout name="THE PROCESS">
            <Container>
                <Grid className="section" container spacing={4}>
                    {processSteps.map((step, index) => {
                        return (
                            <Grid key={index} item xs={12} md={4}>
                                <ProcessStep step={step} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
