const url = 'https://cse341-ibalance-api.herokuapp.com/'
class DataService
{
    async getCrsfToken(){
        return await fetch(url + "login").then(res=> res.json)
    }
    async postLogin(data){
        const option = {method:"post", Headers:{"Content-Type":"multipart/form-data"}, body:data}
        return await fetch(url + "login", option).then(res=> res.json)
    }
}