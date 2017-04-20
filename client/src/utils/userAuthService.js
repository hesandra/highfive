import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';

const redirectURL = process.env.NODE_ENV === 'production' ?
  'http://hifivela.com/' :
  'http://localhost:8080/';

export default class UserAuthService {
  constructor(clientId, domain, type) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: redirectURL,
        redirect: true,
        responseType: 'token'
      },
     theme: {
        logo: 'http://i.imgur.com/KTZ8vA2.png'
      },
      languageDictionary: {
        title: type
      }
    });
    this.login = this.login.bind(this);
  }
  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token_user');
    localStorage.removeItem('profile_user');
    localStorage.removeItem('backend_profile');
  }
  static getProfile() {
    const profile = localStorage.getItem('profile_user');
    return profile ? JSON.parse(localStorage.profile_user) : {};
  }
  static loggedIn() {
    const token = UserAuthService.getToken();
    return !!token && !UserAuthService.isTokenExpired(token);
  }
  static setProfile(profile) {
    localStorage.setItem('profile_user', JSON.stringify(profile));
  }
  static setBackEndProfile(user) {
    localStorage.setItem('backend_profile', JSON.stringify(user));
  }
  static getBackEndProfile() {
    const id = localStorage.getItem('backend_profile');
    return id ? JSON.parse(localStorage.backend_profile) : null;
  }
  static setToken(idToken) {
    localStorage.setItem('id_token_user', idToken);
  }
  static getToken() {
    return localStorage.getItem('id_token_user');
  }
  static getTokenExpirationDate() {
    const token = UserAuthService.getToken();
    const decoded = jwtDecode(token);
    if (!decoded.exp) {
      return null;
    }
    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  static isTokenExpired() {
    const token = UserAuthService.getToken();
    if (!token) return true;
    const date = UserAuthService.getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
}
