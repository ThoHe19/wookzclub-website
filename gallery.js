document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSearch = document.getElementById('videoSearch');
    const searchButton = document.getElementById('searchButton');

    // Define available videos
    const availableVideos = ['202', '332', '136'];

    function playVideo(videoNumber) {
        if (availableVideos.includes(videoNumber)) {
            videoPlayer.src = `videos/${videoNumber}.mp4`; // Adjust the path as needed
            videoPlayer.play();
        } else {
            alert('Video not found. Please try another number.');
        }
    }

    function handleSearch() {
        const videoNumber = videoSearch.value.trim();
        if (videoNumber) {
            playVideo(videoNumber);
        }
    }

    searchButton.addEventListener('click', handleSearch);

    videoSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Play a default video on page load
    playVideo('202');
});