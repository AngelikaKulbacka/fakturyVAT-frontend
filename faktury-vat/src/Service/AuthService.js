import axios from "axios";

export const USER_EMAIL_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthService {
    static login(formData) {
        return axios.post("http://localhost:8080/login", formData, {
            headers: {
              Authorization: 'Basic ' + window.btoa(formData.email + ":" + formData.password)
            }
          })
    }

    static saveSuccessfulLogin(email, password) {
        sessionStorage.setItem(USER_EMAIL_SESSION_ATTRIBUTE_NAME, email);
        
        // setup axios interceptor
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.setAuthorization('Basic ' + window.btoa(email + ":" + password));
                }

                return config;
            }
        )
    }

    static isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_EMAIL_SESSION_ATTRIBUTE_NAME);   
        return user !== null;
    }

    static logout() {
        sessionStorage.removeItem(USER_EMAIL_SESSION_ATTRIBUTE_NAME);
    }

    static getLoggedInUserEmail() {
        let user = sessionStorage.getItem(USER_EMAIL_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user;
    }
}

export default AuthService