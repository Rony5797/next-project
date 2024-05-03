import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import SignInOut from "./SingInOut";
export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src={logo} alt="logo" objectFit="cover" height={40} />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/about">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
