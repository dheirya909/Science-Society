document.addEventListener('DOMContentLoaded', function () {
    fetch('/common/footer.html') // Fetch the navbar.html file
        .then(response => {
            if (!response.ok) throw new Error('Failed to load navbar');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});