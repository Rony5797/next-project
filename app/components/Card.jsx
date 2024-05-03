/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
export default function Card({ recipe }) {
  return (
    <Link href={`/details/${recipe?._id}`} className="card">
      <Image
        src={recipe?.thumbnail}
        className="rounded-md"
        width={300}
        height={160}
        alt=""
      />
      <h4 className="my-2">{recipe?.name}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {recipe?.rating}</span>
        <span>By: {recipe?.author}</span>
      </div>
    </Link>
  );
}
