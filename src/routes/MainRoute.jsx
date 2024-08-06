import {Routes, Route} from "react-router-dom";
import {Home, About, Profile} from "../components";
import {Posts} from "../components/Posts/Posts";
import {Post} from "../components/Posts/Post/Post";

export const MainRoute = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile/:module/:userId" element={<Profile />} />
    <Route path="/posts/:pageId" element={<Posts />} />
    <Route path="/posts/:postId" element={<Post />} />
</Routes>
//    <Route path="/profile/:module/:userId" element={<Profile />} />
//http://localhost:3001/profile/applications/1