/**
 * GET JSON DATA
 * 
 * @param url 
 * @returns 
 */
export async function getData(url: string) {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(`An error has occurred: ${response.status}`);
    const data = await response.json();
    return data;
}

/**
 * UPLOAD JSON DATA
 * 
 * @param url 
 * @param data 
 * @returns 
 */
export async function postData(url: string, data: Blob) {
    const request = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    const response = await fetch(url, request);
    if (!response.ok)
        throw new Error(`An error has occurred: ${response.status}`);
    const responseData = response.json();
    return responseData;
}

/**
 * GET AN IMAGE
 * 
 * @param imageUrl 
 * @returns 
 */
export async function getImage(imageUrl: string) {
    const response = await fetch(imageUrl);
    if (!response.ok)
        throw new Error(`An error has occurred: ${response.status}`);
    const imageBlob = await response.blob();
    return imageBlob;
}
