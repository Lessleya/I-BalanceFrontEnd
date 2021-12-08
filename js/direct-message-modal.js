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
    if (data.connected)
    {
        console.log('click is working')
        document.getElementById('myBtn').addEventListener("click", loadDirectMessageContent)
    }
})


function loadDirectMessageContent(){
    messageUserByEmail();
    socket.emit('messageTo', document.getElementById('directMessageEmailInput').value);
    
    socket.on('messageData', function(data){
        console.log('recieve data')
        console.log(data);   //should output 'hello world'
        let dmc = document.getElementById('directMessageContent');
        
        if(data['connected'] == false){
            dmc.innerHTML = "<p>No user was found</p>"
        }
        else{
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
        <button class="btn" type="submit">Send</button>
        </form>
    </div>
    
    </div>
    
</div>`

// Add-task Modal



//     // Get the modal
// var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
modal.style.display = "block";
}
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




