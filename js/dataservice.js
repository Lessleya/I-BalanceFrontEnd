const url = 'https://cse341-ibalance-api.herokuapp.com/';
//const url = 'http://localhost:3000/'

class DataService {
  static async getCsrfToken() {
    const option = {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };
    return await fetch(url, option).then(async res => {
      res = await res.json();
      return res._csrf;
    });
  }
  static async post(data, endpoint) {
    const option = {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    return await fetch(url + endpoint, option).then(res => res.json());
  }
  static async get(endpoint) {
    const option = {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };
    return await fetch(url + endpoint, option).then(res => {
      return res.json();
    });
  }
}
