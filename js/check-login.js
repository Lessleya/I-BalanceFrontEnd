import { DataService } from "./dataservice.js"

export default async function isloggedin() {
    let loggedin = await DataService.get('is-logged-in')
    if(loggedin.loggedIn){
        document.querySelector('.logout').classList.remove('hidden-error')
        document.querySelector('.login').classList.add('hidden-error')
        window.location.replace('../view/login.html')

    }
    else {
        //document.querySelector('.login').classList.add('hidden-error')
        //document.querySelector('.logout').classList.remove('hidden-error')
        window.location.replace('../view/login.html')
    }
    return loggedin.email
}
isloggedin()