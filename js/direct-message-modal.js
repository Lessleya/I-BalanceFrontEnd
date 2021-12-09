import isLoggedIn from './check-login.js'
const socket = io("https://cse341-ibalance-api.herokuapp.com/", {transports: ['websocket']});

isLoggedIn().then(email => {
    console.log(email)
    socket.emit('name', email)    
})

socket.emit('news', 'hello');

socket.on('ack', (data) => {
    console.log('here')
    console.log(data);
    console.log('here2')
    if (data.success)
    {
        console.log('click is working')
        document.getElementById('myBtn').addEventListener("click", loadDirectMessageContent)
        console.log('click enabled')
    }
})


function loadDirectMessageContent(){
    console.log('here3')
    socket.emit('messageTo', document.getElementById('directMessageEmailInput').value);
    console.log('here4')
    socket.on('messageData', function(data){
        console.log('recieve data')
        console.log(data);   //should output 'hello world'
        let dmc = document.getElementById('directMessageContent');
        
        // if(data['connected'] == false){
            if(data['success'] == false){
                alert('no user found')
                // dmc.innerHTML = "<p>No user was found</p>"
            }
        else{
            console.log("user found")
            messageUserByEmail();
            dmc.innerHTML = data;
        }
    
    });
}

function messageUserByEmail(){
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
        <button class="btn" id="sendMessageId" onclick=sendMessage >Send</button>
    </div>
    
    </div>
    
</div>`

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal

modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
}

// Modal section

function sendMessage(){
    let message = document.getElementById('directMessageFormInput');
    let time = new Date.now()
    let toEmail = document.getElementById('directMessageEmailInput').value;
    socket.emit('sendMessage', {'message': message, 'date': time, 'toEmail': email});

}


