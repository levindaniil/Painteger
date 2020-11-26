export default class Http {
    static post(data) {
        const options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json; charset=utf-8',
            // },
            // mode: 'cors',
            // credentials: 'include'
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(`http://127.0.0.1:5000/loadWithStyle`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw resp.json();
                }
                return resp.json();
            });
    }

    static get() {
        const options = {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json; charset=utf-8',
            // },
            // mode: 'cors',
            // credentials: 'include'
        };

        return fetch(`http://127.0.0.1:5000/getImage`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw resp.json();
                }
                return resp.blob();
            });
    }
}
