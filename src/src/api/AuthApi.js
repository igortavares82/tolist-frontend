import Api from './Api';
import NotificationType from '../types/NotificationType';

export default class AuthApi extends Api {

    auth(data, handler) {

        super.post("authentication/token", data)
             .then(resp => {
                
                if (!resp)
                    return;

                let data = resp.data.data;
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("expires", data.expires);

                super.notify("Success", "User logged in successfully.", NotificationType.SUCCESS);
                return resp;
             })
             .then(resp => handler(resp))
             .catch(error => super.catch(error, "Not found", "User could't be found. Try again."));
    }
}