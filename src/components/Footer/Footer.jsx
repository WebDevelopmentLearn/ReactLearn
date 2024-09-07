import { AppBar, Container, Stack, Typography, styled } from "@mui/material";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";

const StyledInput = styled("input")({
    backgroundColor: "#232425",
    border: "none",
    borderBottom: "1px solid #FFFFFF80",
    "&::placeholder": {
        color: "#FFFFFF80",
        fontFamily: '"Montserrat", system-ui',
        fontSize: "16px"
    }
})

export const Footer = () => {
    return <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: "#232425", color: "white", padding: "48px 0" }}>
        <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>Contacts</Typography>
                <Stack direction="row" gap={3}>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={insta} alt="insta" />
                </Stack>
            </Stack>
            <Typography color="#FFFFFF80">8 800 000 00 00</Typography>
            <Typography color="#FFFFFF80">emailexample@email.com</Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={6}>
                <Typography color="#FFFFFF80">2024 Sneakers shop. All rights preserved. Made by @anautomnee</Typography>
                <StyledInput placeholder="Type in your email"></StyledInput>
            </Stack>
        </Container>
    </AppBar>
}