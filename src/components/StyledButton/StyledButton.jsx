import {styled} from "@mui/material";

export const StyledButton = styled("button")({
    width: 37,
    height: 37,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#E9E9E980",
    border: "1px solid #6866667F",
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
    "&:hover": {
        backgroundColor: "#03060f",
        color: "#fff",
        border: "3px solid #E9E9E980",
    },
});
