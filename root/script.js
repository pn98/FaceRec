// Get the video element from the DOM
const video = document.getElementById('video');

// Function to start webcam video stream
function startVideo() {
    // Access the user's webcam using the MediaDevices API
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;  // Display the webcam stream in the video element
            video.play();               // Ensure video is playing
        })
        .catch(err => {
            console.error("Error accessing the webcam: ", err);
            alert("Unable to access the webcam. Please ensure it's enabled.");
        });
}

// Function to stop the webcam video stream
function stopVideo() {
    // Get the video stream
    const stream = video.srcObject;
    if (stream) {
        // Stop all the tracks (video feed) to turn off the camera
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;  // Clear the video element
    }
}

// Contact form handling
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
    const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to the server or display it
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Display success message
    alert("Thank you for contacting us!");
    contactForm.reset();  // Clear the form after submission
});
