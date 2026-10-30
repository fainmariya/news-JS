import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        if (!apiUrl) {
            throw new Error('API_URL is not defined');
        }
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error('API_KEY is not defined');
        }
        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
