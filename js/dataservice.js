const apiUrl = 'https://cse341-ibalance-api.herokuapp.com/';
// const apiUrl = 'http://localhost:3000/'

export class DataService {
  static async getCsrfToken() {
    const option = {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };
    return await fetch(apiUrl, option).then(async res => {
      res = await res.json();
      return res._csrf;
    });
  }
  static async post(data, endpoint) {
    data['_csrf'] = await DataService.getCsrfToken()
    const option = {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    return await fetch(apiUrl + endpoint, option).then(res => res.json());
  }
  static async get(endpoint) {
    const option = {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };
    return await fetch(apiUrl + endpoint, option).then(res => {
      return res.json();
    });
  }
}
