import {Footer, Navbar, ProductCard, Title} from "../../components";
import {Box, Container, Divider, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {addToCard, fetchProducts, removeFromCart} from "../../api/API";
import {CartItem} from "../../components/CartItem/CartItem";


export const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        fetchProducts("cart")
            .then((res) => setCartProducts(res))
            .catch((error) => setError(error.message));
    } , []);

    useEffect(() => {
        const total = cartProducts.reduce((red, el) => {
            return (red + el.price);
        }, 0);
        setTotal(total);
    }, [cartProducts]);


    function removeProduct(id) {
        removeFromCart(id);
        setCartProducts(cartProducts.filter(product => product.id !== id));
    }

    return (
        <div>
            <Navbar />
            <Container sx={{ minHeight: "78vh", mb: "32px" }}>
                <Title title="Cart" />
                <Stack direction="row" justifyContent="space-between">
                    <Box>
                        {error
                            ? (<Typography variant="h5" color="error">{error}</Typography>)
                            : (<Stack direction="row" justifyContent="center" flexWrap="wrap" gap={6}>
                                {cartProducts.length > 0 ? cartProducts.map(product => (
                                    <CartItem key={product.id} product={product} removeProduct={removeProduct}/>
                                )) : <Typography variant="h5">Cart is empty</Typography>}
                            </Stack> )
                        }
                    </Box>

                    <Stack direction="column" sx={{
                        backgroundColor: "#FAFAFA",
                        padding: "28px",
                        height: "fit-content",
                        mt: 4,
                        minWidth: 320
                    }}>
                        <Typography sx={{
                            alignSelf: "center",
                            fontWeight: 700,
                            mb: 4
                        }} variant="h5">Total</Typography>
                        {cartProducts.map(product => <Typography mb={3} key={product.id}>{product.name}</Typography>)}
                        <Divider />
                        <Typography mt={2} fontWeight="500" fontSize="14px">Price</Typography>
                        <Typography fontWeight="700">{total} €</Typography>
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </div>
    )
}