"use strict";

import Vue from 'vue';
import axios from "axios";

let config = {
    baseURL: BASE_HOST,
    timeout: 1000 * 10 * 1,
    withCredentials: true,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {

        // 为所有的请求添加拦截代理    
        // 不是全域名需要补全域名
        if (config.url.substr(0, 4).toLowerCase() != "http") {
            config.url = API_PATH + config.url;
        }

        console.log(config)
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        if (response.status != 200) {
            return Promise.reject(response);
        }
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $http: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;