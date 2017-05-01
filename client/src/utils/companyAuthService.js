import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';

const redirectURL = process.env.NODE_ENV === 'production' ?
  'https://hifivela.com/' :
  'http://localhost:3000/';

export default class CompanyAuthService {
  constructor(companyId, domain, type) {
    this.lock = new Auth0Lock(companyId, domain, {
      auth: {
        redirectUrl: redirectURL,
        redirect: true,
        responseType: 'token'
      },
      theme: {
        logo: 'https://s3-us-west-1.amazonaws.com/highfivestatic/hifivelogoblack.png'
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
    localStorage.removeItem('id_token_company');
    localStorage.removeItem('profile_company');
    localStorage.removeItem('company_backend_profile');
  }
  static getProfile() {
    const profile = localStorage.getItem('profile_company');
    return profile ? JSON.parse(localStorage.profile_company) : {};
  }
  static loggedIn() {
    const token = CompanyAuthService.getToken();
    return !!token && !CompanyAuthService.isTokenExpired(token);
  }
  static setProfile(profile) {
    localStorage.setItem('profile_company', JSON.stringify(profile));
  }
  static setCompanyBackEndProfile(company) {
    localStorage.setItem('company_backend_profile', JSON.stringify(company));
  }
  static getCompanyBackEndProfile() {
    const id = localStorage.getItem('company_backend_profile');
    return id ? JSON.parse(localStorage.company_backend_profile) : null;
  }
  static setToken(idToken) {
    localStorage.setItem('id_token_company', idToken);
  }
  static getToken() {
    return localStorage.getItem('id_token_company');
  }
  static getTokenExpirationDate() {
    const token = CompanyAuthService.getToken();
    const decoded = jwtDecode(token);
    if (!decoded.exp) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  static isTokenExpired() {
    const token = CompanyAuthService.getToken();
    if (!token) return true;
    const date = CompanyAuthService.getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }
}
