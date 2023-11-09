export function createURLWithParams(filterObject) {
    const baseUrl = '';

    const queryParams = [];

    for (const key in filterObject) {
        if (filterObject[key] !== '') {
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(filterObject[key])}`);
        }
    }

    const queryString = queryParams.join('&');

    if (queryString) {
        return `${baseUrl}?${queryString}`;
    } else {
        return baseUrl;
    }
}

