import AppleLink from "../AppleLink/AppleLink";

import styles from "./LinksContainer.module.css";
import TwitterLink from "../TwitterLink/TwitterLink";
import GoogleLink from "../GoogleLink/GoogleLink";

function LinksContainer() {
    return (
        <div className={styles.LinksContainer}>
            <AppleLink />
            <GoogleLink />
            <TwitterLink />
        </div>
    )
}

export default LinksContainer;