import {Footer, Navbar, ContactsForm} from "../../components";
import {Container, Divider, Stack, Typography} from "@mui/material";
import snap from "../../assets/snap.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.jpg";



export const Contacts = () => {
    return (
        <div>
            <Navbar />
            <Container sx={{ minHeight: "78vh" }}>
                <Typography mb={4} variant="h5">Contacts</Typography>
                <Divider />
                <ul style={{ color: "#00000080", marginTop: "92px", marginBottom: "64px" }}>
                    <li>8 800 000 00 00</li>
                    <li>emailexample@email.com</li>
                </ul>
                <Stack direction="row" gap={28}>
                    <ContactsForm />
                    <Stack sx={{
                        backgroundColor: "#FAFAFA",
                        padding: "36px",
                        paddingTop: "14px",
                        height: "fit-content"
                    }}>
                        <Typography sx={{
                            alignSelf: "center",
                            mb: 2,
                            fontWeight: 600,
                            color: "#00000070"
                        }}>Find us</Typography>
                        <Stack direction="row" gap={4}>
                            <img style={{ width: 58, height: 58 }} src={snap} alt="snap" />
                            <img style={{ width: 58, height: 58 }} src={fb} alt="facebook" />
                            <img style={{ width: 58, height: 58 }} src={x} alt="x" />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </div>
    )
}