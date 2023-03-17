export const description = `
<h1 class='text-xl'>Fetch data</h1>
<pre><code>
------------------------------------------------------------------------------------------------
Fetch data from: 
    - https://randomuser.me/
    - https://picsum.photos/200


From first url get 20 users and render the first name of each user.
From second url get the image as blob and render the image.
</pre></code>
`;

export const code = `
.fetchData {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    height: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

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
    } catch (error:any) {
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
    } catch (error:any) {
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
        return imageBlob;
    } catch (error:any) {
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
    if (status === 404) {
        throw new Error("The resource you requested was not found.");
    }

    if (status === 500) {
        throw new Error("There was a server error.");
    }

    throw new Error('Something went wrong...')
}

import React, { useEffect, useState } from "react";
import { getData, postData, getImage } from './fetchData'
import "./Demo.css";

const GET_DATA_URL = 'https://randomuser.me/api/?results=20';
const GET_IMAGE_URL = 'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU'
const POST_DATA_URL = 'https://api.github.com/gists'

interface error {
    hasError: boolean;
    message: string;
}

export default function Demo() {
    const [users, setUsers] = useState<Array<any> | null>(null)
    const [image, setImage] = useState<Blob | null | void>(null)
    const [errorState, setErrorState] = useState<error>({ hasError: false, message: "" })

    useEffect(() => {
        getData(GET_DATA_URL).then(data => setUsers(data.results)).catch(handleError)
        getImage(GET_IMAGE_URL).then(setImage).catch(handleError)
        const payload = {}
        // postData(POST_DATA_URL, payload).then((response) => console.log(response)).catch(handleError)
    }, [])

    const handleError = (err:any) => {
        setErrorState({ hasError: true, message: err.message })
    }

    if (users === null || image === null) return <div className="fetchData">loading...</div>

    return (
        <div className="fetchData">
            {errorState.hasError && <div>{errorState.message}</div>}
            {users.map(user => {
                return (
                    <p key={user.email}>{user.name.first}</p>
                )
            })}
            <img alt="" src={URL.createObjectURL(image)} width="auto" height='auto' />
        </div>
    );
}

`.trim();
