"use client"
import { login, logout } from "@/redux/slicers/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux"

export default function FormLogin() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    return (
        <div>
            <label>Username: </label>
            <input onChange={(e) => setText(e.target.value)} type="text" name="username" />
            <br />
            <button type="button" onClick={() => dispatch(login(text))} >Login</button>
            <button type="button" onClick={() => dispatch(logout())} >Logout</button>
        </div>
    )
}