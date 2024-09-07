import {Divider, Typography} from "@mui/material";

export const Title = ({title}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <Typography variant="h4" sx={{textAlign: "left", mb: 4, fontSize: "36px", fontWeight: "700"}}>{title}</Typography>
            <Divider sx={{mb: 8}}/>
        </div>
    )
}