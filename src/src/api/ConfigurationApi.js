import Api from './Api';

export default class ConfigurationApi extends Api {

    get() {
        super.get('configurations', null);
    }
}