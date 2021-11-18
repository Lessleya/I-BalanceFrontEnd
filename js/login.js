document.querySelector(".login-form").addEventListener("submit", processLogin)
function processLogin(){
    console.log('help')
    const data ={email:document.getElementById('email'), password:document.getElementById('password'), _csrf:DataService.getCsrfToken()}
    DataService.postLogin(data).then(res=> console.log(res))
}