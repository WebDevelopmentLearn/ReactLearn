import {useEffect, useState} from "react";
import {addToCard, fetchProducts} from "../../api/API";
import {Container, Divider, Stack, Typography} from "@mui/material";
import {ProductCard} from "./ProductCard/ProductCard";
import {Title} from "../Title/Title";

export const Cards = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts("products")
            .then(res => setProducts(res))
            .catch(error => setError(error.message));
    }, []);

    return (
        <Container style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "1420px", marginBottom: "32px"}}>
            <Title title="Products" />
            {error
                ? (<Typography variant="h5" color="error">{error}</Typography>)
                : (<Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="64px">
                    {products?.map(product => (
                        <ProductCard key={product.id} product={product} addToCard={addToCard}/>
                    ))}
                </Stack> )
            }
        </Container>
    )
}