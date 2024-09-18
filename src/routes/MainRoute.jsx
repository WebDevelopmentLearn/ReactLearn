import {Routes, Route} from "react-router-dom";
import {
    About,
    Home, Login, NotFound, Profile, Register,
} from "../pages";
import {ProtectedRoute} from "../components";

export const MainRoute = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    }
    />
    <Route path="*" element={<NotFound />} />

</Routes>
