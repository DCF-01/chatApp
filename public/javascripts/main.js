const socket = io();
const form = document.getElementById('chat-form');
const msg_input = document.getElementById('msg');
const single_msg = document.querySelector('.single-msg');
const chat_box = document.querySelector('.chat-box');

console.log('success');

socket.on('message', message => {
    const new_msg = single_msg.cloneNode(false);
    new_msg.textContent = message;
    chat_box.appendChild(new_msg);

    //clear input field and focus
    msg_input.value = '';
    msg_input.focus();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    socket.emit('chatMessage', msg_input.value);

})