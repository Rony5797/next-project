/* eslint-disable react/no-unescaped-entities */

import { getAllrecipe } from "@/db/queries";
import Card from "./components/Card";
import Link from "next/link";

export default async function Home() {
  const allRecipe = await getAllrecipe();

  return (
    <main>
      <section className="container">
        <div className="py-4 bg-[url('./assets/images/cover.png')] rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Choose from thousands of recipes
            </h1>
            <p className="text-white my-4">
              Appropriately integrate technically sound value with scalable
              infomediaries negotiate sustainable strategic theme areas
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="/category/Dessert">Morning Bliss Café</Link>
              </li>

              <li>
                <Link href="/category/Dessert">Sunrise Bites Kitchen</Link>
              </li>

              <li>
                <Link href="/category/Breakfast & Brunch">
                  Brunch Haven Delights
                </Link>
              </li>

              <li>
                <Link href="/category/Breakfast & Brunch">
                  Rise & Dine Eatery
                </Link>
              </li>

              <li>
                <Link href="/category/Breakfast & Brunch">
                  Breakfast Oasis Junction
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
              {allRecipe?.map((recipe) => (
                <Card key={recipe._id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
