import {socket} from './main.js'


socket.emit('news', 'hello');

socket.on('ack', data => {
  console.log(data);
  console.log(socket);
  if (data.success) {
    console.log('click is working');
    document
      .getElementById('myBtn')
      .addEventListener('click', loadDirectMessageContent);
    console.log('click enabled');
  }
});

function loadDirectMessageContent() {
  console.log('here3');
  socket.emit(
    'messageTo',
    document.getElementById('directMessageEmailInput').value
  );
  console.log('here4');
  socket.on('messageData', function (data) {
    console.log('recieve data');
    console.log(data); //should output 'hello world'

    // if(data['connected'] == false){
    if (data['success'] == false) {
      alert('no user found');
      // dmc.innerHTML = "<p>No user was found</p>"
    } else {
      console.log('user found');
      messageUserByEmail();
      let dmc = document.getElementById('directMessageContent');
      let content = "";
      data.data.forEach(element => {
        content += `<p class="${socket.email == element.fromUserEmail ? "sender" : "reciever"}">${element.message}</p>`
      });
      dmc.innerHTML = content;
      document.getElementById('sendMessageId').addEventListener('click', sendMessage);
    }
  });
}

socket.on('recieveMessage', data => {
  console.log(data)
  let dmc = document.getElementById('directMessageContent');
  const toAdd = `<p class="${socket.email == data.fromUserEmail ? "sender" : "reciever"}">${data.message}</p>`
  dmc.innerHTML += toAdd
})

function messageUserByEmail() {
  // e.preventDefault();
  let modal = document.getElementById('myModal');
  modal.innerHTML = `<div class="modal-content">
    <div class="modal-header">
    <span class="close">&times;</span>
    <h2>Message friend</h2>
    </div>
    
    <div class="modal-body">
    
    <div id="directMessageContent">
    
    </div>
    
    <div id="directMessageInputSection">
        <form id="directMessageForm">
        <textarea name="directMessageFormInput" id="directMessageFormInput" placeholder="Message..." height: 36px></textarea>
        </form>
        <button class="btn" id="sendMessageId">Send</button>
    </div>
    
    </div>
    
</div>`;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];
  // When the user clicks on the button, open the modal

  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

// Modal section

function sendMessage() {
  let message = document.getElementById('directMessageFormInput').value;
  let time = Date.now();
  let toEmail = document.getElementById('directMessageEmailInput').value;
  socket.emit('sendMessage', {
    message: message,
    date: time,
    toEmail: toEmail,
  });
}
