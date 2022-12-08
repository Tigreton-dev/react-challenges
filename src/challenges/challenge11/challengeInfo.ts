export const description = `
<h1 class='text-xl'>React Context</h1>
<pre><code>
------------------------------------------------------------------------------------------------

In this coding challenge, the interview might give 
you a React application with multiple nested 
components like the following.

Component “B” is the child component of “A” while 
component “C” and “D” are child components of “B”.

Suppose there is an object in component “A” and it 
is required in “C” and “D”. There are two ways to 
share this object in these nested components without 
using props. The first is by using Redux. But never 
use Redux in such cases where the interviewer wants 
to avoid props because Redux is meant for complex 
projects. Actually, the interviewer is expecting 
“Context” for this coding challenge. 

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
    const response = await fetch(url);
    if (!response.ok)
        throw new Error('An error has occurred: + response.status');
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
        throw new Error('An error has occurred: + response.status');
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
        throw new Error('An error has occurred: + response.status');
    const imageBlob = await response.blob();
    return imageBlob;
}

import React, { useEffect, useState } from "react";
import { getData, postData, getImage } from './fetchData'
import "./Demo.css";

export default function Demo() {
    const [users, setUsers] = useState<Array<any> | null>(null)
    const [image, setImage] = useState<Blob | null>(null)

    const fetchData = async (url: string) => {
        try {
            const data = await getData(url);
            setUsers(data.results)
        } catch (error) {
            console.error("An error has ocurred: " + error.message);
        }
    };

    const fetchImageData = async (url: string) => {
        try {
            const image = await getImage(url);
            setImage(image)
        } catch (error) {
            console.error("An error has ocurred: " + error.message);
        }
    };

    const sendData = async (url: string, payload: object) => {
        try {
            const sendData = await postData(url, payload);
            console.log(sendData);
        } catch (error) {
            console.error("An error has ocurred: " + error.message);
        }
    };

    useEffect(() => {
        fetchData('https://randomuser.me/api/?results=20');
        fetchImageData('https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU');
        // sendData("https://api.github.com/gists", {})
    }, [])

    if (users === null || image === null) return <div className="fetchData">loading...</div>

    return (
        <div className="fetchData">
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
