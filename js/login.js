document.querySelector(".login-form").addEventListener("submit", processLogin)
async function processLogin(){
    const data = await {email:document.getElementById('email'), password:document.getElementById('password'), _csrf: await DataService.getCsrfToken()}
    await DataService.postLogin(data).then(async res=> console.log(await res))
}