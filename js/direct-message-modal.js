import { socket } from './main.js';

socket.on('ack', data => {
  if (data.success) {
    document
      .getElementById('myBtn')
      .addEventListener('click', loadDirectMessageContent);
  }
});

function loadDirectMessageContent() {
  let toUser = document.getElementById('directMessageEmailInput').value;
  socket.emit(
    'messageTo',
    document.getElementById('directMessageEmailInput').value
  );
  socket.on('messageData', data => {
    if (data.success) {
      messageModal();

      const dmc = document.getElementById('directMessageContent');
      let content = '';

      data.data.forEach(element => {
        content += `<p class="${
          socket.email == element.fromUserEmail ? 'sender' : 'reciever'
        }">${element.message}</p>`;
      });

      console.log(content)
      let toUserDiv = document.getElementById('toUserDiv')
      toUserDiv.innerHTML =  `<h3>${toUser}</h3>`
      // dmc.innerHTML = `<div id="toUserDiv"><h3>${toUser}</h3></div>`;
      dmc.innerHTML += '<div id="messageContent">';
      dmc.innerHTML += content;
      dmc.innerHTML += '</div>';
      // dmc.innerHTML = content;

      document
        .getElementById('sendMessageId')
        .addEventListener('click', sendMessage);
    } else {
      alert('no user found');
    }
  });
}

socket.on('recieveMessage', data => {
  let dmc = document.getElementById('directMessageContent');
  const toAdd = `<p class="${
    socket.email == data.fromEmail ? 'sender' : 'reciever'
  }">${data.message}</p>`;
  dmc.innerHTML += toAdd;
});

function messageModal() {
  const modal = document.getElementById('messageModal');
  modal.innerHTML = `<div class="modal-content">
    <div class="modal-header">
    <span class="close">&times;</span>
    <h2>Message friend</h2>
    </div>
    
    <div class="modal-body">

    <div id="toUserDiv">
    </div>

    

    <div id="directMessageContent">
    
    </div>

    <div id="directMessageSendMessage">
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
  const message = document.getElementById('directMessageFormInput').value;
  const time = Date.now();
  const toEmail = document.getElementById('directMessageEmailInput').value;
  socket.emit('sendMessage', {
    message: message,
    date: time,
    toEmail: toEmail,
    fromEmail: socket.email
  });
}
