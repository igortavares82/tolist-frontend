import Api from './Api';
import NotificationType from '../types/NotificationType';

export default class UserApi extends Api{

    post(data, handler) {

        super.post("users", data)
             .then(resp => {

                if (!resp)
                    return;

                super.notify("User created successfully", 
                             "You've received an e-mail to validate your register.", 
                             NotificationType.SUCCESS);

                return true;
             })
             .then(cleanupForm => handler(cleanupForm))
             .catch(error => {

                let data = error.response.data;
                super.catch(error, "User creation error", data.messages[0])
             });
    }
}

