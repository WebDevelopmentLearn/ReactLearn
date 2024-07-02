// import "../ImageComponent.css"

function VideoComponent() {
    return (
        <iframe width="400" height="300" src="https://www.youtube.com/embed/QHRuTYtSbJQ?si=H_FcfD70xe2uBIiW"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    );
}

export default VideoComponent;