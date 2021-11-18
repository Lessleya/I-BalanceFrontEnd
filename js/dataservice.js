const url = 'https://cse341-ibalance-api.herokuapp.com/'
class DataService
{
    static async getCsrfToken(){
        return await fetch(url + "login").then(res=>{res.json(); console.log(res.json())})
    }
    static async postLogin(data){
        const option = {method:"post", Headers:{"Content-Type":"multipart/form-data"}, body:data}
        return await fetch(url + "login", option).then(res=> res.json())
    }
}