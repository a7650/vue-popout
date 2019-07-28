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

export function urlParam(originUrl, data) {
    let url = '';
    for (var i in data) {
        let val = data[i] !== undefined ? data[i] : '';
        url += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(val);
    }
    return originUrl += (originUrl.indexOf('?') < 0 ? '?' : '&') + (url ? url.substring(1) : '')
}