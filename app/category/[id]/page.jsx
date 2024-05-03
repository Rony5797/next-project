/* eslint-disable react/no-unescaped-entities */
import Card from "@/app/components/Card";
import { getAllrecipe } from "@/db/queries";

export default async function Categorized({ params: { id } }) {
  const allRecipe = await getAllrecipe();
  const decodedString = decodeURIComponent(id);

  const matchCategory = allRecipe.filter(
    (recipe) => recipe.category === decodedString && recipe
  );

  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">Appetizers &amp; Snacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {matchCategory.map((category) => (
              <Card key={category._id} recipe={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
