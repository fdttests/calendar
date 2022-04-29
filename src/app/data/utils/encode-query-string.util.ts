export default function encodeQueryString(obj: any): string {
    Object.keys(obj).forEach(key => {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] == null || obj[key] == undefined || obj[key] == 'undefined' || obj[key] == 'null') {
                obj[key] = '';
            }
        }
    });

    return new URLSearchParams(obj).toString();
}
