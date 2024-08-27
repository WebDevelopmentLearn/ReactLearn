import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box, Paper
} from "@mui/material";
import {useContext, useState} from "react";
import langContext from "../../context/LangContext";


export const MaterialUI = () => {
    const {lang} = useContext(langContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6">MaterialUI App</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h1">{lang === "ru" ? "Добро пожаловать в наше приложенеие" : "Welcome to our Application"}</Typography>
                <Button onClick={handleOpen} variant="contained">{lang === "ru" ? "Открыть диалоговое окно" : "Open Dialog window"}</Button>
            </Container>
            <Dialog open={open}   onClose={handleClose} >
                <DialogTitle>{lang === "ru" ? "Использовать Material UI ?" : "Use Material UI ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {lang === "ru" ? "Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению" : "This is a simple React application using Material UI. You can customize it as you wish"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{lang === "ru" ? "Отмена" : "Cancel"}</Button>
                    <Button onClick={handleClose}>{lang === "ru" ? "Согласен" : "Agree"}</Button>
                </DialogActions>
            </Dialog >
        </div>
    )
}