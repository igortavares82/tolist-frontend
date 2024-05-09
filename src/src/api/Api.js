import axios from 'axios';
import React, { useMemo } from 'react';
import { notification } from 'antd';

import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";

import NotificationType from '../types/NotificationType';

export default class Api {
    
    constructor(useNotification = true) {

        this.useNotification = useNotification;

        if (useNotification == true) {
            
            [this.api, this.contextHolder] = notification.useNotification();
        }

        this._axios = axios.create({
            baseURL: process.env.BASE_URL
        });
    }

    get(url, data) {
        
        return this._axios
                   .get(url, data);
    }

    post(url, data) {

        return this._axios
                   .post(url, data);
    }

    patch(url, data) {

        return this._axios
                   .patch(url, data);
    }

    catch(error, title, description) {

        console.error(error.response);

        if (!title && !description)
            this.notify("Connection error", "Something went wrong. Try again.",  NotificationType.ERROR);
        
        else
            this.notify(title, description, NotificationType.ERROR);
    }

    notify(title, description, type) {

        let icon = null;

        switch(type) {
            case NotificationType.SUCCESS:
                icon = (<FaRegCheckCircle style={{ color: "5DEBD7" }} />);
                break;

            case NotificationType.ERROR:
                icon = (<VscError style={{ color: "FF204E" }} />)
                break;
        }

        this.api.open({
            message: title,
            description: description,
            icon: icon
        });
    }

    changeScreen(path, timer = 1500) {

        setTimeout(() => {

            window.location.href = `/#/${path}`;
            window.location.reload();
        }, timer);
    }
}