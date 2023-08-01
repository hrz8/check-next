import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href={'/'}>Landing Page</Link></li>
                <li><Link href={'/play/1'}>Game Suit</Link></li>
                <li><Link href={'/games'}>Games</Link></li>
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/home'}>Beranda</Link></li>
            </ul>
        </nav>
    )
}