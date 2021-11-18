const url = 'https://cse341-ibalance-api.herokuapp.com/'
class DataService
{
    static async getCsrfToken(){
        return await fetch(url + "login").then(async res=>
            {
                res = await res.json();  
                return res._csrf
            })
    }
    static async postLogin(data){
        const option = {method:"post", credentials:"include", Headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)}
        return await fetch(url + "login", option).then(res=> res.json())
    }
}