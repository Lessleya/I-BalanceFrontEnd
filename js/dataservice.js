const url = 'https://cse341-ibalance-api.herokuapp.com/'
class DataService
{
    static async getCsrfToken(){
        return await fetch(url + "login").then(async res=>
            {
                res = await res.json(); 
                console.log(res); 
                return res._csrf
            })
    }
    static async postLogin(data){
        const option = {method:"post", Headers:{"Content-Type":"multipart/form-data"}, body:data}
        return await fetch(url + "login", option).then(res=> res.json())
    }
}