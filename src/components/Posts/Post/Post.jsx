import {Navbar} from "../../Navbar/Navbar";
import {useLocation} from "react-router-dom";

export function Post() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar />
            <h1>Post</h1>
            <div>
                <h2>{location?.state?.postTitle}</h2>
                <p>{location?.state?.postBody}</p>
                <p>{location?.state?.postId}</p>
                <p>{location?.state?.postCreatedAt}</p>

            </div>
        </div>
    )
}