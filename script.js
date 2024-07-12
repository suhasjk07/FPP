document.getElementById('predict-button').addEventListener('click', () => {
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;

    if (departure && arrival) {
        const price = Math.floor(Math.random() * 20000) + 2000;
        document.getElementById('price-display').textContent = `Estimated Price: ₹${price}`;
        document.getElementById('booking-popup').style.display = 'block';
    } else {
        alert('Please select both departure and arrival cities.');
    }
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('booking-popup').style.display = 'none';
});

document.getElementById('book-button').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const arrival = document.getElementById('arrival').value;

    if (name) {
        document.getElementById('booking-popup').style.display = 'none';
        const message = new SpeechSynthesisUtterance(`Happy journey, ${name}! Enjoy your trip to ${arrival}.`);
        window.speechSynthesis.speak(message);
    } else {
        alert('Please enter your name.');
    }
});
