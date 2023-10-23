import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {

    const router=useRouter();
   
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <style jsx>{`
            nav{
                background-color:tomato;
            }

            a{text-decoration:underline;}
            `}</style>
        </nav>
    );
}
