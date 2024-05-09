import Api from './Api';
import NotificationType from '../types/NotificationType';
import { jwtDecode } from 'jwt-decode';

export default class AuthApi extends Api {

    signin(data, handler) {

        super.post("authentication/token", data)
             .then(resp => {
                
                if (!resp)
                    return;

                let data = resp.data.data;
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("expires", data.expires);

                super.notify("Success", "User logged in successfully.", NotificationType.SUCCESS);
                super.changeScreen("search");
             })
             .catch(error => super.catch(error, "Not found", "User could't be found. Try again."));
    }

    signout() {

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("expires");

        window.location.href = "/#/signin";
        window.location.reload();
    }

    forgotPassword(data, handler) { 

        super.patch("authentication/retrieve", data)
             .then(resp => {

                if (!resp)
                    return;

                super.notify("Success", "A message was sent to your e-mail.", NotificationType.SUCCESS);
                return resp;
             })
             .then(handler)
             .catch(error => {

                let data = error.response.data;
                super.catch(error, "Password retrieve error", data.messages[0])
             });;
    }

    updatePassword(data, handler) {

        super.patch("authentication/update-password", data)
             .then(resp => {

                if (!resp)
                    return;
                
                super.notify("Success", "Password updated successfully", NotificationType.SUCCESS);
                super.changeScreen("signin");
             })
             .catch(error => {

                let data = error.response.data;
                super.catch(error, "Password retrieve error", data.messages[0]);
             })
    }

    isAuthenticated() {
        let user = this.getUser();
        return user != null;
    }

    getUser() {

        try {
            let token = sessionStorage.getItem("token");
            return jwtDecode(token);
        } catch(e) {
            return null;
        }
    }
}