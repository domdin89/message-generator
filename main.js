const randomMessages = [
    "Hello, how are you?",
    "Have a good day!",
    "What's the weather like today?",
    "Thank you very much!",
    "I miss you.",
    "Happy birthday!",
    "Bon appétit!",
    "Safe travels!",
    "How's school going?",
    "Good job at work!",
    "Heartfelt wishes!",
    "I love you.",
    "Good luck!",
    "Have a great weekend!",
    "Good night!",
    "See you soon!",
    "Good luck!",
    "Are you hungry?",
    "What do you think?",
    "Have fun!"
];


const button = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
messages = document.getElementById("message")

function random() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    button.style.display = 'none';
    resetButton.style.display = 'inline-block';
    messages.style.display = 'block';
    messages.innerHTML = randomMessages[randomIndex];
}

function resetMessage() {
    button.style.display = 'inline-block';
    resetButton.style.display = 'none';
    messages.style.display = 'none';
}

button.addEventListener("click", random);
resetButton.addEventListener("click", resetMessage);