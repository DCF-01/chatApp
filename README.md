# Chat App
### This app runs on NodeJS. It has several rooms that users can join and use in order to send messages between each other.

<hr>
<br>

#### The user types in their username and joins a room. The 'chatbot' notifies all other users in the same room of the join action. The same is true when a user leaves a room.
<br>

<img src="https://imgur.com/qnxiSX3.png" alt="login_image">

<hr>
<br>

#### All messages are timestamped via current dateTime (formating via [momentJS](https://github.com/moment)).
#### You can request a transcript to be send via email. This action uses the Amazon SES API for email delivery, and requires valid AWS credentials set in the following environment variables: $USERNAME, $PASSWORD.

<br>
<img src="https://imgur.com/n3J62wD.png" alt="chat_image">
<hr>
<br>

#### Messages in any room can be stored as simple records in any SQL database. The app uses MySQL by default.
<br>

#### Libraries / Frameworks used:
- socket.io
- nodemailer
- express
- momentJS
- nodemon
- mysql2


