import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    iconFinder(search, limit = 100) {
        const target_url = 'https://api.iconify.design/search?query=' + search + '&limit=' + limit;
        const requestObj = axios.get(target_url, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
            },
        });
        requestObj.promise = requestObj.promise.then(({ body, statusCode }) => {
            return body;
        }).catch((err) => {
            return err;
        });
        return requestObj;
    }
};
