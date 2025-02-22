import { type JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  login(idToken: string) {
    const payload = JSON.parse(idToken);
    localStorage.setItem('id_token', payload.token);
    localStorage.setItem('user_id', payload.userID);
    window.location.assign('/Movies');
  }

  getUserID(): string {
    const userID = localStorage.getItem('user_id') || '';
    return userID;
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }
  loggedIn() {
    const token = this.getToken();
    console.log("Token from localStorage:", token); // Debug log
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      // Attempt to decode the provided token using jwtDecode, expecting a JwtPayload type
      const decoded = jwtDecode<JwtPayload>(token);

      // Check if the decoded token has an expiration property and if it is less than the current time in seconds
      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        // If the token is expired, return true indicating that it is expired.
        return true;
      }
    } catch (err) {
      // If decoding fails (e.g., due to an invalid token format), catch the error and return false.
      return false;
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
