// Get the video element from the DOM
const video = document.getElementById('video');

// Function to start webcam video stream
function startVideo() {
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
    const stream = video.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;  // Clear the video element
    }
}

// Function to generate a random question
function generateQuestion() {
    fetch('InterviewQuestions.txt') // Replace with the path to your questions file
        .then(response => response.text())
        .then(data => {
            const questions = data.split('\n'); // Split questions by new line
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            document.getElementById('questionDisplay').innerText = randomQuestion; // Display the random question
        })
        .catch(err => console.error("Error fetching questions: ", err));
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
