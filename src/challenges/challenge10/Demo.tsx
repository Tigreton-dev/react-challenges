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
