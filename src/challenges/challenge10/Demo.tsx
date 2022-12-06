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
