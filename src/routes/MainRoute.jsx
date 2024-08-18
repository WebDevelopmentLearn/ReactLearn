import {Routes, Route} from "react-router-dom";
import {
    Home,
    About,
    Profile,
    Posts,
    Post,
    ValueDisplay,
    UsersList,
    Notes,
    Timer,
    TodoList,
    UserProfile
} from "../components";
import Counter from "../components/Counter/Counter";

export const MainRoute = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile/:module/:userId" element={<Profile />} />
    <Route path="/posts/:pageId" element={<Posts />} />
    <Route path="/posts/post/:postId" element={<Post />} />
    <Route path="/valuedisplay" element={<ValueDisplay />} />
    <Route path="/userslist" element={<UsersList />} />
    <Route path="/todolist" element={<TodoList />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/counter" element={<Counter />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/userprofile" element={<UserProfile />} />
</Routes>
