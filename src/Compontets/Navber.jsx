import Link from "next/link";

export default function Navber() {
  return (
    <div className="flex justify-center gap-5 py-5">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
    </div>
  );
}
