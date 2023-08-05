"use client"
import { useSelector } from "react-redux"

export default function Navbar() {
    const username = useSelector((state) => state.auth.value.username);

    return (
        <nav>
            <ul>
                <li>Username: {username}</li>
            </ul>
        </nav>
    )
}