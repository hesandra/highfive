import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';


// import LogoImg from 'images/test-icon.png';
export default class UserAuthService {
  constructor(clientId, domain, type) {
    // Configure Auth0 lock
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:8080/',
        redirect: true,
        responseType: 'token'
      },
      theme: {
        primaryColor: '#FFFFF'
      },
      languageDictionary: {
        title: type
      }
    })
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  // ======================================================
  // Public methods
  // ======================================================
  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token_user');
    localStorage.removeItem('profile_user');
    localStorage.removeItem('backend_profile');
  }

  // ======================================================
  // Static methods
  // ======================================================
  static getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile_user');
    return profile ? JSON.parse(localStorage.profile_user) : {};
  }

  static loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = UserAuthService.getToken()
    return !!token && !UserAuthService.isTokenExpired(token);
  }

  static setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile_user', JSON.stringify(profile));
    // Triggers profile_updated event to update the UI
  }

  static setBackEndProfile(user) {
    localStorage.setItem('backend_profile', JSON.stringify(user));
  }

  static getBackEndProfile() {
    const id = localStorage.getItem('backend_profile');
    return id ? JSON.parse(localStorage.backend_profile) : null;
  }

  static setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token_user', idToken);
  }

  static getToken() {
    // Retrieves the user token from localStorage
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
