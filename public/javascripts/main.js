const socket = io();
const form = document.getElementById('chat-form');
const msg_input = document.getElementById('msg');
const single_msg = document.querySelector('.single-msg');
const text = document.querySelector('.text');
const time = document.querySelector('.time');
const meta = document.querySelector('.meta');
const chat_box = document.querySelector('.chat-box');
const room_box = document.querySelector('.room-box');
const users_list_box = document.querySelector('.users-list-box');
const room_name = document.querySelector('.room-name');
const submit_btn = document.getElementById('submit-btn');


// get url strings
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

socket.emit('joinRoom', { username, room});

function createMessageElement(username, text, time){
    let el = document.createElement('div');
    let p_1 = document.createElement('p');
    let p_2 = document.createElement('p');

    //add classnames
    el.className = 'single-msg';
    p_1.className = 'meta';
    p_2.className = 'text';

    //append to parents
    el.appendChild(p_1);
    el.appendChild(p_2);
    

    p_1.innerHTML= username + ' - ' +`<span class="time"> ${time}`;
    p_2.textContent=text;
    
    //append to chat box
    chat_box.appendChild(el);
    
    chat_box.scrollTo(0, chat_box.scrollHeight);
}

function clearDomTree(){
    let arr = Array.from(users_list_box.childNodes);

    for(let i = 1; i < arr.length; i++){
        users_list_box.removeChild(arr[i]);
    }
}

function updateUsersList(users){
    clearDomTree();
    console.log(users)

    users.forEach(el => {
        let users_list_single = document.createElement('p');
        users_list_single.className = 'users-list-single';
        users_list_single.textContent = el.username;
        users_list_box.appendChild(users_list_single);
    });
}

function updateRoomName(room){
    room_name.textContent = room;
}




socket.on('roomInfo', ({room, users}) => {
    updateRoomName(room);
    updateUsersList(users);
})


socket.on('message', message => {
    console.log(message);
    // const new_msg = single_msg.cloneNode(true);
    createMessageElement(
        message.username,
        message.text, 
        message.time
    );
    

    //clear input field and focus
    msg_input.value = '';
    msg_input.focus();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let URLparams = new URLSearchParams(window.location.search);
    let username = URLparams.get('username');

    socket.emit('chatMessage', msg_input.value, username );

})

submit_btn.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();

        socket.emit('chatMessage', msg_input.value);
    }
})