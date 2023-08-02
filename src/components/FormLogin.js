"use client"
import { useState } from "react";

export default function FormLogin() {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    return (
        <div>
            <label>Username: </label>
            <input onChange={(e) => setText(e.target.value)} type="text" name="username" />
            <br />
            <button type="button" onClick={() => setUsername(text)} >Login</button>

            <p>{username}</p>
        </div>
    )
}