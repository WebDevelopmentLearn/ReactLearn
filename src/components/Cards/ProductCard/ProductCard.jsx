import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import {StyledButton} from "../../StyledButton/StyledButton";

export const ProductCard = ({product, addToCard}) => {
    return (
        <Card sx={{width: "386px", borderRadius: "42px", padding: 4, border: "1px solid rgba(0, 0, 0, 0.15)"}}>
            <CardContent>
                <img src={product.image} alt={product.title} style={{width: "100%", marginBottom: "32px"}}/>
                <Typography variant="h5">{product.name}</Typography>
            </CardContent>
            <CardActions>
                <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Box sx={{textAlign: "left"}}>
                        <Typography style={{fontSize: "14px", fontWeight: "500"}}>PRICE:</Typography>
                        <Typography style={{fontSize: "24px", fontWeight: "700"}}>{product.price} €</Typography>
                    </Box>
                    <Box>
                        <StyledButton onClick={() => addToCard(product)}>+</StyledButton>
                    </Box>
                </Stack>
            </CardActions>
        </Card>

    )
}