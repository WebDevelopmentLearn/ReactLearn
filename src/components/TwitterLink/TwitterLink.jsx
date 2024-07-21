import styles from "./TwitterLink.module.css";

function TwitterLink() {
    return (
        <div className={styles.TwitterLinkContainer}>
            <a id="twitter_link" href="https://www.x.com/" target="_blank">
                <svg className={styles.linkIcon} width="107" height="99" viewBox="0 0 107 99"
                     xmlns="http://www.w3.org/2000/svg">
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M30.5398 0C13.9712 0 0.539795 13.4315 0.539795 30V68.1158C0.539795 84.6843 13.9713 98.1158 30.5398 98.1158H76.4603C93.0288 98.1158 106.46 84.6843 106.46 68.1158V30C106.46 13.4315 93.0288 0 76.4602 0H30.5398ZM86.3795 16H75.1127L56.5819 37.3475L40.423 16H17L44.8704 52.4687L18.4825 82.7111H29.7492L50.2073 59.4363L67.9969 82.7111H90.8269L61.7705 44.3151L86.3795 16ZM77.3364 75.8917H71.1101L30.194 22.3746H37.0133L77.3364 75.8917Z"
                          fill="currentColor"/>
                </svg>
            </a>
        </div>
    )
}

export default TwitterLink;