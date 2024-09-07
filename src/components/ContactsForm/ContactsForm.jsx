import { Button, Stack, TextField } from "@mui/material"

export const ContactsForm = () => {
    return <form style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "64px" }}>
    <Stack direction="row" gap={4}>
        <TextField sx={{ backgroundColor: "#FAFAFA" }} label="Your emal" />
        <TextField sx={{ backgroundColor: "#FAFAFA" }} label="Your name" />
    </Stack>
    <TextField sx={{ backgroundColor: "#FAFAFA", width: "100%" }} label="Type in your message" />
    <Button variant="contained" sx={{
        width: 131,
        height: 53,
        borderRadius: "10px",
        backgroundColor: "#090D1A",
        color: "white",
        alignSelf: "flex-end"
    }}>Send</Button>
</form>
}