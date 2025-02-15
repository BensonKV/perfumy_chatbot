const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInputField = document.getElementById('chatbot-input-field');
const chatbotSendButton = document.getElementById('chatbot-send');


chatbotButton.addEventListener('click', () => {
  chatbotWindow.classList.toggle('open');
  chatbotWindow.style.display = chatbotWindow.classList.contains('open') ? 'flex' : 'none';
});


chatbotSendButton.addEventListener('click', sendMessage);
chatbotInputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const userMessage = chatbotInputField.value.trim();
  if (userMessage) {
    addMessage('user', userMessage);
    chatbotInputField.value = '';
    respondToMessage(userMessage);
  }
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);

 
  if (sender === 'bot' && message.includes('<a ')) {
    messageElement.innerHTML = message;
  } else {
    messageElement.textContent = message;
  }

  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function respondToMessage(message) {
  let botMessage = '';
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    botMessage = 'Hello! How can I assist you today?';
  } else if (lowerMessage.includes('recommend')) {
    botMessage = 'Sure! Here are some popular perfumes: <a href="https://www.dior.com/en_lt/beauty/sauvage-fragrance" target="_blank">Sauvage</a>, <a href="https://www.jaguar-fragrances.com/" target="_blank">Jaguar</a>, <a href="https://splashfragrance.in/bleu-de-chanel-by-chanel-for-men-edp-perfume-online-india/" target="_blank">Bleu de Chanel</a>, <a href="https://foggpk.com/" target="_blank">Fogg</a>, <a href="https://www.axe.com/in/en/products/fragrance.html" target="_blank">Axe</a>, <a href="https://bellavitaorganic.com/?srsltid=AfmBOopxgKFf_fsJh6LXq1PIXoHwaU-Vrf40gjwQZSTyQkDtiL81oGtI" target="_blank">Bella Vita</a>.';
  } else if (lowerMessage.includes('price')) {
    botMessage = 'Our perfumes range from INR 500 to INR 2000. <a href="https://www.tatacliq.com/beauty-grooming-fragrances-and-perfumes/c-msh2511" target="_blank">Check out our list for more details!</a>';
  } else if (lowerMessage.includes('ingredients')) {
    botMessage = 'Our perfumes are made with high-quality ingredients like essential oils, alcohol, and fragrance compounds. <a href="#" target="_blank">Learn more here</a>.';
  } else if (lowerMessage.includes('shipping')) {
    botMessage = 'We offer free shipping on orders above INR 1000. Delivery usually takes 3-5 business days. <a href="#" target="_blank">View our shipping policy</a>.';
  } else if (lowerMessage.includes('best seller') || lowerMessage.includes('popular')) {
    botMessage = 'Our best-selling perfumes are <a href="https://www.dior.com/en_lt/beauty/sauvage-fragrance" target="_blank">Sauvage</a>, <a href="https://www.jaguar-fragrances.com/" target="_blank">Jaguar</a>, <a href="https://splashfragrance.in/bleu-de-chanel-by-chanel-for-men-edp-perfume-online-india/" target="_blank">Bleu de Chanel</a>, and <a href="https://foggpk.com/" target="_blank">Fogg</a>.';
  } else if (lowerMessage.includes('contact')) {
    botMessage = 'You can reach us at <a href="mailto:ben456737@gmail.com">ben456737@gmail.com</a> or call <a href="tel:+919342087043">+91-9342087043</a>.';
  } else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
    botMessage = 'You’re welcome! Let me know if you need further assistance.';
  } else {
    botMessage = 'I’m here to help! Ask me about perfumes, recommendations, prices, or shipping.';
  }

  setTimeout(() => addMessage('bot', botMessage), 1000);
}