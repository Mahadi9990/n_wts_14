import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500  to-purple-600">
      <h1>Create Blog page</h1>
      <Link className="p-5 bg-white text-black" href={'blogs'}>Got blog page</Link>
    </div>
  );
}
