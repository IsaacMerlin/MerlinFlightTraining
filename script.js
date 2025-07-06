document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribe');
    const sendMessageBtn = document.getElementById('send-message');

    subscribeBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        if (email) {
            alert('Thank you for subscribing!');
            document.getElementById('email').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    sendMessageBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Message sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});