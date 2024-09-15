document.addEventListener('DOMContentLoaded', function() {
    const characterLink = document.getElementById('character-link');
    
    characterLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Character clicked!');
        // Add your desired click behavior here
    });
    
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });
});