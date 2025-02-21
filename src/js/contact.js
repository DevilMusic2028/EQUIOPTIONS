document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        await emailjs.send(
            'service_9pf1wss',
            'template_ir7eyer',
            {
                to_email: 'your-email@example.com',
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message')
            }
        );
        alert('Message sent successfully!');
        e.target.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
    }
});
