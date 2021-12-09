<<<<<<< HEAD
import { DataService } from "./dataservice.js"
=======
import {DataService} from './dataservice.js'
>>>>>>> parent of 11ef73e (Merge branch 'main' of https://github.com/Lessleya/I-BalanceFrontEnd)

export async function isLoggedIn() {
    let loggedin = await DataService.get('is-logged-in')
    if(loggedin.loggedIn){
        document.querySelector('.logout').classList.remove('hidden-error')
        document.querySelector('.login').classList.add('hidden-error')


    }
    else {
        //document.querySelector('.login').classList.add('hidden-error')
        //document.querySelector('.logout').classList.remove('hidden-error')
        window.location.replace('../view/login.html')
    }
    return loggedin.email
}