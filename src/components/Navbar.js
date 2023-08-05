"use client"
import Link from "next/link";
import { useSelector } from "react-redux"

export default function Navbar() {
    const username = useSelector((state) => state.auth.value.username);

    return (
        <nav>
            <ul>
                <li>Username: {username}</li>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/blogs'}>Blogs</Link></li>
            </ul>
        </nav>
    )
}