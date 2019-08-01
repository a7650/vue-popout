/* eslint-disable */

export function extend(target, ...rest) {
    for (let i = 0; i < rest.length; i++) {
        let source = rest[i]
        for (let key in source) {
            target[key] = source[key]
        }
    }
    return target
}

export function isUndef(v) {
    return v === undefined || v === null
}

export function urlPushParam(originUrl, data) {
    let url = '';
    for (var i in data) {
        let val = data[i] !== undefined ? data[i] : '';
        url += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(val);
    }
    return originUrl += (originUrl.indexOf('?') < 0 ? '?' : '&') + (url ? url.substring(1) : '')
}

export function urlReplaceParam(originUrl,key,val) {
    let hasQuery = originUrl.indexOf("?");
    let result = "";
    if(hasQuery>-1){
        let flagStart = originUrl.indexOf(key,hasQuery);
        if(flagStart>-1){
            let flagEnd = originUrl.indexOf("&",flagStart);
            if(flagEnd == -1){
                flagEnd = originUrl.length;
            }
            result = originUrl.replace(`${originUrl.substring(flagStart,flagEnd)}`,`${key}=${val}`)
        }else{
            result = `${originUrl}&${key}=${val}`
        }
    }else{
        result = `${originUrl}?${key}=${val}`;
    }
    return result
}

export const storage = {
    get(key){
        return JSON.parse(sessionStorage.getItem(key))
    },
    set(key,data){
        return sessionStorage.setItem(key,JSON.stringify(data))
    }
}