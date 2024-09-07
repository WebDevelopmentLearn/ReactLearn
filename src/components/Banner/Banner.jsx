import {Box, Container} from "@mui/material";

import banner from "../../assets/banner.jpg";

export const Banner = () => {
    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "1420px", marginBottom: "72px"}}>
            <Box sx={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "530px",
                backgroundSize: "contain",
            }}/>
        </Container>
    )
}