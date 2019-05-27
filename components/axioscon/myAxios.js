
import axios from 'axios';
let CancelToken = axios.CancelToken;
import {notification} from 'antd';
import {resolve} from 'path';
let config ={};
if(1){
    config = {
        accessToken:localStorage.getItem('access-token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG1tIiwidXNlcklkIjoiNDc5MjUiLCJ0aXRsZSI6IuWImOaipuaihSIsImZpcm1JZCI6NzQ3Nywicm9sZUlkIjozMzAsImlhdCI6MTU1NzgyNDYyMn0.jUEQyo8V8AUhQoWKlVYwC_GK9knF_CUXI-ecpleeXKA' ,
        firmCode:sessionStorage.getItem('firmCode') || '110201',
        firmId:sessionStorage.getItem('firmId') || 7477
    }
}
else {
    config = {
        accessToken:localStorage.getItem('access-token') || '' ,
        firmCode:sessionStorage.getItem('firmCode') || '',
        firmId:sessionStorage.getItem('firmId') || ''
    }
}


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
   return new Promise((resolve,reject)=>{
       setTimeout(() => {
            resolve({liumm:'ni hao!'})
       }, 1500);
   })

   
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


