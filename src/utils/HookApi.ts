import axios from "axios";
import * as methodTypes from "./method.httprequest";
import Cookies from "js-cookie";

export default function HookAPI(endpoint: any, data = null, method = null, showMessage = false): any {
    // axios.defaults.withCredentials = true;
    const baseAPI = "http://localhost:3000/v1/"
    // const baseAPI = "http://3lichat.com:8765"
    let header = {};
    if (Cookies.get("_person_token")) {
        header = {
            "Authorization": "Bearer " + Cookies.get("_person_token"),
        }
    }
    if (method === methodTypes.GET || method === null) {
        return axios({
            method: methodTypes.GET,
            url: baseAPI + endpoint,
            headers: header
        }).then(
            response => {
                const responseData = response.data;
                return [responseData, null];
            }
        ).catch(error => {
                if (error.response) {
                    const errorResponse = error.response.data;
                }
                return [null, error.response.data];

            }
        );


    } else {
        return axios(baseAPI + endpoint, {
            method: method,
            data: data,
            headers: header
        }).then(response => {
                const responseData = response.data;
                // if (showMessage)
                // message.success({ title: "Thông báo", description: responseData.message }, {
                //     width: Math.min(window.innerWidth * 0.8, 400) + "px"
                // })
                return [responseData, null];
            }
        ).catch(error => {
            if (error.response) {
                const errorResponse = error.response.data;
                // message.error({ title: "Lỗi", description: errorResponse.data }, {
                //     width: Math.min(window.innerWidth * 0.8, 400) + "px"
                // })
            }
            return [null, error.response.data];

        });
    }

}