
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    }).then(response => {
        if (response.ok) {
            document.getElementById('confirmation').style.display = 'block';
            this.reset();
        }
    });
});
