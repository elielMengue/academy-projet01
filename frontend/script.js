document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = document.querySelector('#nom').value;
        const prenom = document.querySelector('#prenom').value;
        const adresse = document.querySelector('#adresse').value;
        const object = document.querySelector('#object').value;
        const message = document.querySelector('#message').value;

        if (!nom || !prenom || !adresse || !object || !message) {
            alert('please fill in the form.');
            return;
        }

        const formData = {
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            object: object,
            message: message
        };

        fetch('http://localhost:2000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Error sending message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
