import {AppBar, Container, Stack, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <AppBar sx={{backgroundColor: "#3B3C3DFF", marginBottom: "28px"}} position="static">
            <Container sx={{
                ml: "250px",
                mr: "250px",
                width: "100%"
            }} >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" >Sneaker Shop</Typography>
                    <Toolbar>
                        <Stack direction="row" gap={8}>
                            <NavLink  to={"/"} className={({isActive}) => isActive ? styles.active : styles.navLink} >Главная</NavLink>
                            <NavLink  to={"/cart"} className={({isActive}) => isActive ? styles.active : styles.navLink} >Корзина</NavLink>
                            <NavLink  to={"/contacts"} className={({isActive}) => isActive ? styles.active : styles.navLink} >Контакты</NavLink>
                        </Stack>
                    </Toolbar>
                </Stack>
            </Container>

        </AppBar>
    )
}