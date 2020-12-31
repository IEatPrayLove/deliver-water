import Login from './models/login.js';

class Store {
  constructor() {
    this.login = new Login(this);
  }
}

export default new Store();
