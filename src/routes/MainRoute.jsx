import {Routes, Route} from "react-router-dom";
import {
    Home,
    About,
    Profile,
    Posts,
    Post,
    ValueDisplay,
    UsersList,
    Timer, Questionnaire, Quote,
} from "../components";

export const MainRoute = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile/:module/:userId" element={<Profile />} />
    <Route path="/posts/:pageId" element={<Posts />} />
    <Route path="/posts/post/:postId" element={<Post />} />
    <Route path="/valuedisplay" element={<ValueDisplay />} />
    <Route path="/userslist" element={<UsersList />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/questions" element={<Questionnaire />} />
    <Route path="/quote" element={<Quote />} />
</Routes>
