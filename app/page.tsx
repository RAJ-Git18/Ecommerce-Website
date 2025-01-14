import Image from "next/image";
import Link from "next/link";
import Produts from "./products/page";

export default function Home() {
  return (
    <>
    <h1 className="bg-red-500 text-2xl text-white">Hello my name is Raj Simkhada</h1>
    <Link href="\products">Products</Link>
    </>
  );
}
