const url = 'https://cse341-ibalance-api.herokuapp.com/'
//const url = 'http://localhost:3000/'

class DataService
{
    static async getCsrfToken() {
            const option = { method: "get", credentials: 'include', headers: { "Content-Type": "application/json" } }
            return await fetch(url + "login", option).then(async res=>
        {
            res = await res.json();
            console.log(res)
                return res._csrf
            })
    }
    static async postLogin(data) {
        const option = {method:"post", credentials: 'include', headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)}
        return await fetch(url + "login", option).then(res=> res.json())
    }
}