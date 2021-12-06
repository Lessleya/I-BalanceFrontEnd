document.getElementById('directMessageEmailForm').addEventListener("submit", messageUserByEmail);


function messageUserByEmail(e){
    e.preventDefault();

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




