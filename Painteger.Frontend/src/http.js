export default class Http {
    static post(data = null) {
        return Http._request('POST','loadWithStyle', data);
    }

    static get(data = null) {
        return Http._request('GET', 'getImage', data);
    }

    static _request(method, path, data) {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            mode: 'cors',
            credentials: 'include'
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(`http://127.0.0.1:5000/${path}`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw resp.json();
                }
                return resp.json();
            })
            .catch(async responseError => {
                const err = await responseError.then(error => {
                    return error;
                });
                console.log(err);
                return Promise.reject(err)
            });
    }
}
