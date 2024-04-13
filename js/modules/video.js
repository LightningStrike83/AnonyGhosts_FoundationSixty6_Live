export function video() {
    const video = document.querySelector("video")
    const videoControls = document.querySelector(".video-controls")
    const videoContainer = document.querySelector(".video-con")
    const playButton = document.querySelector("#play-button")
    const pauseButton = document.querySelector("#pause-button")
    const stopButton = document.querySelector("#stop-button")
    const volumeControls = document.querySelector("#change-volume")
    const fullScreen = document.querySelector("#full-screen")

    video.controls = false
    videoControls.classList.remove("hidden")

    function playVideo() {
        video.play()

        videoControls.addEventListener("mouseenter", showControls)
        videoControls.addEventListener("mouseleave", hideControls)
        video.addEventListener("mouseenter", showControls)
        video.addEventListener("mouseleave", hideControls)
    }

    function pauseVideo() {
        video.pause()

        removeEventListener()
    }

    function stopVideo() {
        video.pause()
        video.currentTime = 0

        removeEventListener()
    }

    function changeVolume() {
        video.volume = volumeControls.value
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreenElement
        // } else if (document.videoContainer.webkitRequestFullscreen) {
        //     videoContainer.webkitRequestFullscreen()
        } else {
            videoContainer.requestFullscreen()
        }
    }

    function hideControls() {
        videoControls.classList.add("hide")
    }

    function showControls() {
        videoControls.classList.remove("hide")
    }

    function removeEventListener() {
        videoControls.removeEventListener("mouseenter", showControls)
        videoControls.removeEventListener("mouseleave", hideControls)
        video.removeEventListener("mouseenter", showControls)
        video.removeEventListener("mouseleave", hideControls)
    }


    playButton.addEventListener("click", playVideo)
    pauseButton.addEventListener("click", pauseVideo)
    stopButton.addEventListener("click", stopVideo)
    volumeControls.addEventListener("change", changeVolume)
    fullScreen.addEventListener("click", toggleFullscreen)
}