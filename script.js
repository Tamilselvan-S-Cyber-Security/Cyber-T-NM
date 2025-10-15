// Update time in status bar
function updateTime() {
    const timeElement = document.querySelector('.time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    // Update time every minute
    setInterval(updateTime, 60000);
});

