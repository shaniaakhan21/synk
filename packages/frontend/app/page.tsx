import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>HELO Synk it up</h1>
      <nav>
        <ul>
          <li>
            <Link href="/LoginPage">
              Login
            </Link>
          </li>
          <li>
            <Link href="/SignupPage">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
