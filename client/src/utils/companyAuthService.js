import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';


// import LogoImg from 'images/test-icon.png';
export default class CompanyAuthService {
  constructor(clientId, domain, type) {
    // Configure Auth0 lock
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:8080/',
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
    localStorage.removeItem('id_token_company');
    localStorage.removeItem('profile_company');
  }

  // ======================================================
  // Static methods
  // ======================================================
  static getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile_company');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  static loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = CompanyAuthService.getToken()
    return !!token && !CompanyAuthService.isTokenExpired(token);
  }

  static setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile_company', JSON.stringify(profile));
    // Triggers profile_updated event to update the UI
  }

  // getProfile(){
  //   // Retrieves the profile data from localStorage
  //   const profile = localStorage.getItem('profile')
  //   return profile ? JSON.parse(localStorage.profile) : {}
  // }

  static setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token_company', idToken);
  }

  static getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token_company');
  }

  static getTokenExpirationDate() {
    const token = CompanyAuthService.getToken();
    const decoded = jwtDecode(token);
    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  static isTokenExpired() {
    const token = CompanyAuthService.getToken()
    if (!token) return true;
    const date = CompanyAuthService.getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }
}
