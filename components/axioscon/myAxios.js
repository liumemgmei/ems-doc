
import axios from 'axios';
let CancelToken = axios.CancelToken;
import {notification} from 'antd';

function getSuffix(data, url) {
    if (!url) {
        url = '';
    }
    let suffix = '';
    if (data !== undefined) {
      let keysArr = Object.keys(data).sort();
      keysArr.forEach((v) => {
        if (typeof data[v] !== 'undefined' && data[v].length > 0 || typeof data[v] !== 'object') {
            suffix = suffix + '&' + v + '=' + encodeURIComponent(data[v]);
        }
      });
    }
    if (url.indexOf('?') === -1) {
        suffix.replace('&','?');
    }
    return url + suffix;
}

export default function myAxios(method, url,data,firmId = sessionStorage.getItem('firmId')) {
    // url = url+'/ems';
    firmId = firmId || 7477;
	//判断浏览器中的全局是否存在
	//请求方式统一大写
	let that = this;
	method = method.toUpperCase();
	if (method === 'GET') {
		// fetch的GET不允许有body，参数只能放在url中
		if (data) {
			url = getSuffix(url, data);
		}
		data = undefined;
	}
    else {
		data = data && JSON.stringify(data);
	}
	// url = '/node'+url
	const accessToken = localStorage.getItem('access-token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG1tIiwidXNlcklkIjoiNDc5MjUiLCJ0aXRsZSI6IuWImOaipuaihSIsImZpcm1JZCI6NzQ3Nywicm9sZUlkIjozMzAsImlhdCI6MTU1NzgyNDYyMn0.jUEQyo8V8AUhQoWKlVYwC_GK9knF_CUXI-ecpleeXKA';
    const stationCode = ( 110201) + '0101';
	return axios({
		method,
		url,
		data,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Token': accessToken , // 从localStorage中获取access token
			'Current-Firm-Id': firmId , // 当前单位ID
			'Station-Code': stationCode
		},
		cancelToken: new CancelToken(function (cancel) {
			if (that && that.axiosList) {
				that.axiosList.push(cancel);
			}
		})
	})
		.then((res, req) => {
			if (axios.isCancel(res)) {
				return Promise.reject();
            }
            console.log('liumm',res.data.errorCode)
            
			if (res.data.errorCode === 54) {
				/*localStorage.setItem("access-token", null);*/
				// window.location.href = getCurrentUrl(res.request.responseURL) + '/#/login';//通过请求路径判断当前地址栏地址
				notificationOpen(res.data.errorMsg);
				return new Promise(() =>{});
			}
      if ((sessionStorage.getItem('firmId') === null || localStorage.getItem('access-token') === null) && res.request.responseURL.indexOf('identifying_code/captcha') < 0 && res.request.responseURL.indexOf('login') < 0 ) {
        // window.location.href = getCurrentUrl(res.request.responseURL) + '/#/login';//通过请求路径判断当前地址栏地址
        return new Promise((resolve, reject) =>{resolve();});
      }
      if (typeof res.data === 'string' && res.data.indexOf('html') === -1) {
        notificationOpen('数据错误或网络故障');
        return new Promise(() =>{});
      }
      if (JSON.stringify(res.data) === '{}') {
        /*notificationOpen('后台代码错误');*/
        return new Promise(() =>{});
      }
			//找不到相关资源
			if (res.data.errorCode === 51) {
				notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
			}
			//后台错误
			if (res.data.errorCode === 52) {
				notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
			}
      if (res.data.errorCode === 53) {
				notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
      }
      if (res.data.errorCode === 55) {
        notificationOpen(res.data.errorMsg);
      }
			if (res.data.errorCode === 1) {
				notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
			}
      if (res.data.errorCode === 2) {
        notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
      }
      if (res.data.errorCode === 3) {
        // notificationOpen(res.data.errorMsg);
        // return new Promise(() =>{})
      }
      if (res.data.errorCode === 4) {
        notificationOpen(res.data.errorMsg);
        // return new Promise(() =>{})
      }
      if (res.data.errorCode === 5) {
        notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
      }
      if (res.data.errorCode === 6) {
        notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
      }
      if (res.data.errorCode === 7) {
        notificationOpen(res.data.errorMsg);
        return new Promise(() =>{});
      }
      if (res.data.errorCode === 8) {
        notificationOpen(res.data.errorMsg);
      }

        if (Object.keys(res.data).length === 0) {
            return new Promise(() =>{});
        }
        return res;
    })
			.catch((e)=>{
                console.log(e)
				// window.location.href = '/#/error';
				if (axios.isCancel(e)) {
					return Promise.reject('The request was cancelled');
				}
				else {
					return Promise.reject('The request was error');
				}
			});
}

//截取当前请求根路径
function getCurrentUrl(responseURL) {
	const urlArr = responseURL.split('/');
	return urlArr[0] + '//' + urlArr[2];
}
//弹出提醒框
function notificationOpen(errorMsg) {
	//申明全局对象notification
	if (!window.notification) {
		window.notification = {};
	}
	//若已有提示框则return
	if (!window.notification.show) {
		window.notification.show = true;
        notification.config({
            placement: 'topRight'
        });
		notification.open({
			message: errorMsg,
			duration: 5
		});
		setTimeout(()=>{
			window.notification.show = false;
		},5000);
	}
}


