/**
 * GET JSON DATA
 *
 * @param url
 * @returns
 */
export async function getData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) return _handleError(response.status);
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

/**
 * UPLOAD JSON DATA
 *
 * @param url
 * @param data
 * @returns
 */
export async function postData(url: string, data: object) {
    try {
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
        if (!response.ok) return _handleError(response.status);
        const responseData = response.json();
        return responseData;
    } catch (error: any) {
        throw new Error(error);
    }
}

/**
 * GET AN IMAGE
 *
 * @param imageUrl
 * @returns
 */
export async function getImage(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) return _handleError(response.status);
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        return imageObjectURL;
    } catch (error: any) {
        throw new Error(error);
    }
}

/**
 * ERROR HANDLER
 *
 * @param status
 * @returns
 */
function _handleError(status: number) {
    if (status >= 400 && status < 500) {
        throw new Error("Client Error response");
    }

    if (status >= 500 && status < 600) {
        throw new Error("Server error response");
    }

    throw new Error("Something went wrong...");
}
