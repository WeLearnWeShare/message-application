// Dummy data for chat contacts with conversations
const contacts = [
    {
        name: "Rahul",
        phoneNumber: "9876543210",
        messages: [
            { sender: "Rahul", text: "Hi, how's it going?" },
            { sender: "You", text: "Hey Rahul, all good here!" },
            { sender: "Rahul", text: "What's the plan for the weekend?" },
            // Add more messages here
        ]
    },
    {
        name: "Priya",
        phoneNumber: "8765432109",
        messages: [
            { sender: "You", text: "Hi Priya, how are you?" },
            { sender: "Priya", text: "I'm good, thanks! How about you?" },
            { sender: "You", text: "Not too bad, just busy with work." },
            // Add more messages here
        ]
    },
    {
        name: "Rahul",
        phoneNumber: "9876543210",
        messages: [
            { sender: "Rahul", text: "Hi, how's it going?" },
            { sender: "You", text: "Hey Rahul, all good here!" },
            { sender: "Rahul", text: "What's the plan for the weekend?" },
            // Add more messages here
        ]
    },
    {
        name: "Priya",
        phoneNumber: "8765432109",
        messages: [
            { sender: "You", text: "Hi Priya, how are you?" },
            { sender: "Priya", text: "I'm good, thanks! How about you?" },
            { sender: "You", text: "Not too bad, just busy with work." },
            // Add more messages here
        ]
    },
    {
        name: "Amit",
        phoneNumber: "7654321098",
        messages: [
            { sender: "You", text: "Hello Amit, what's up?" },
            { sender: "Amit", text: "Just chilling, you?" },
            { sender: "You", text: "Same here, want to catch up later?" },
            // Add more messages here
        ]
    },
    {
        name: "Sneha",
        phoneNumber: "6543210987",
        messages: [
            { sender: "Sneha", text: "Hey, how's your day going?" },
            { sender: "You", text: "Pretty good, thanks! How about you?" },
            { sender: "Sneha", text: "Not too shabby, any plans for the evening?" },
            // Add more messages here
        ]
    },
    {
        name: "Vikram",
        phoneNumber: "5432109876",
        messages: [
            { sender: "Vikram", text: "Hi there, what's happening?" },
            { sender: "You", text: "Nothing much, just working." },
            { sender: "Vikram", text: "Got any exciting weekend plans?" },
            // Add more messages here
        ]
    },
    // Add more contacts here
];

const chatList = document.getElementById("chatList");
const chatHistory = document.getElementById("chatHistory");
const addContactBtn = document.getElementById("addContactBtn");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const contactName = document.getElementById("contactName");
let selectedContact = null;

// Function to display chat history for a selected contact
function displayChatHistory(contact) {
    selectedContact = contact;
    // Set the contact name in the chat header
    contactName.textContent = contact.name;
    // Clear existing chat history
    chatHistory.innerHTML = "";
    
    // Load and display chat history for the selected contact
    contact.messages.forEach((message) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = message.sender === "You" ? "sent-message" : "received-message";
        messageDiv.textContent = message.text;
        chatHistory.appendChild(messageDiv);
    });
    messageInput.style.display = "block"; // Show message input field
    sendMessageBtn.style.display = "block"; // Show send message button
}

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    const message = { sender: "You", text: messageText };
    selectedContact.messages.push(message);

    const messageDiv = document.createElement("div");
    messageDiv.className = "sent-message";
    messageDiv.textContent = messageText;
    chatHistory.appendChild(messageDiv);

    messageInput.value = "";
}

// Create chat contacts list
contacts.forEach((contact) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="contact-circle"></div>
        <div class="contact-info">
            <h3>${contact.name}</h3>
            <p class="last-message">${contact.messages[contact.messages.length - 1].text}</p>
        </div>
    `;

    // Add click event listener to each contact to display chat history
    listItem.addEventListener("click", () => {
        displayChatHistory(contact);
    });

    chatList.appendChild(listItem);
});

// Add Contact button click event
addContactBtn.addEventListener("click", () => {
    const name = prompt("Enter contact name:");
    const phoneNumber = prompt("Enter contact phone number:");

    // Add the new contact to the list (you can save it to your database here)
    const newContact = { name, phoneNumber, messages: [] };
    contacts.push(newContact);

    // Refresh the chat contacts list
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="contact-circle"></div>
        <div class="contact-info">
            <h3>${name}</h3>
            <p class="last-message"></p>
        </div>
    `;

    // Add click event listener to the new contact
    listItem.addEventListener("click", () => {
        displayChatHistory(newContact);
    });

    chatList.appendChild(listItem);
});

// Send Message button click event
sendMessageBtn.addEventListener("click", () => {
    sendMessage();
});

// Allow sending a message by pressing Enter key
messageInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Display the first contact's chat history by default (you can change this behavior)
if (contacts.length > 0) {
    displayChatHistory(contacts[0]);
}
