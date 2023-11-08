const readline = require('readline');

const chatbotResponses = {
    'hello': 'Hello! How can I assist you today?',
    'how are you': 'I am just a computer program, but thanks for asking!',
    'what is your name': 'I am a chatbot. You can call me 3b3al.',
    'tell me something interesting': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function chat() {
    reader.question('you: ', (userInput) => {
        const lowerCaseInput = userInput.toLowerCase().trim();

        if (lowerCaseInput === 'exit' || lowerCaseInput === 'quit') {
            console.log('Chatbot: Goodbye! Have a great day!');
            reader.close();
            return;
        }

        const response = chatbotResponses[lowerCaseInput] || 'Chatbot: Sorry, I don\'t understand. Can you please ask something else?';
        console.log(`Chatbot: ${response}`);
        chat(); // Continue the conversation
    });
}

// Start the chat
console.log('Chatbot: Hello! How can I assist you today? (Type "exit" or "quit" to end the conversation)');
chat();

