/**
 * Obtains parameters from the hash of the URL
 * @return Object
 * CREDIT: Spotify Auth. Code Flow Example in Docs
 */
export function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g, q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q)
    }
    return hashParams;
}

export function objectIsEmpty(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' &&
    JSON.stringify(obj) === '{}';
}

export function cleanUrlParams() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
}

