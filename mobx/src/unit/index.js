import axios from 'axios';
import qs from 'qs';
const Unit = {
    async getApi(ajaxCfg) {
        let data = await axios.get(ajaxCfg.url, { params: ajaxCfg.cfg },
            {
                headers: ajaxCfg.headers,
            })
        return data;
    },
    async getApi2(url, cfg, headers) {
        let data = await axios.get(url, { params: cfg },
            {
                headers: headers
            })
        return data;
    },
    async postApi(url, cfg, headers) {
        let fd = new FormData();
        for (let key in cfg) {
            fd.append(key, cfg[key]);
        }
        let data = await axios.post(url, cfg,
            {
                headers: headers
            })
        return data;
    },
    async putApi(url, cfg, headers) {
        let data = await axios.put(url, qs.stringify(cfg), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        return data;
    },
    async postApi2(url, cfg, headers) {
        let data = await axios.post(url, cfg,
            {
                headers: headers
            })
        return data;
    },
    async postApi3(url, cfg, headers) {
        let data = await axios.post(url, qs.stringify(cfg), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        return data;
    },
    async delApi(url, cfg, headers) {
        let data = await axios.delete(url, { params: cfg }, {
            headers: headers
        })
        return data;
    },
    async requestApi(cfg, headers, file) {
        let fd = new FormData();
        fd.append('param', JSON.stringify(cfg));
        if (file) {
            // 上传证明
            if (file.length) {
                for (let i = 0, len = file.length; i < len; i++) {
                    fd.append('files', file[i]);
                }
            } else {
                // 单个上传
                for (let key in file) {
                    fd.append(key, file[key]);
                }
            }
        }
        let data = await axios.post('/batch', fd,
            {
                headers: headers
            })
        return data;
    }
}
export default Unit;
