import Molecule from "@/app/_components/molecules";
import Organism from "@/app/_components/organisms";
import { Breadcrumb } from "antd";
import { notFound } from "next/navigation";
import { Product } from "@/app/_types/product";

export default async function ProductCategoryPage({ params }: any) {
  interface CategoryType {
    title: string;
    desc: string;
  }

  const { category } = params;

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit nam corporis magni ea laborum. Dolores totam dolorem beatae blanditiis? Quos, explicabo. Itaque earum tenetur tempora praesentium modi doloremque soluta?";

  // in the future maybe we can use backend for this (categorymodel)
  const categoryRecord: Record<string, CategoryType> = {
    all: { title: "All", desc: lorem },
    prints: { title: "Prints", desc: lorem },
    books: { title: "Books", desc: lorem },
    stickers: { title: "Stickers", desc: lorem },
    keychains: { title: "Keychains", desc: lorem },
    standee: { title: "Standee", desc: lorem },
    tumbler_mugs: { title: "Tumbler / Mugs", desc: lorem },
    tshirts_hoodies: { title: "Tshirts / Hoodies", desc: lorem },
    paocat: { title: "Paocat Merch", desc: lorem },
  };

  async function fetchProducts(category: string, length: number) {
    try {
      const res = await fetch(
        `http:/localhost:3000/mock/products/${category}?length=${length}`
      );
      const data = await res.json();

      return data.products || [];
    } catch (error) {
      console.error(error);
    }
  }

  const categoryItem = categoryRecord[category];

  // redirect user if they type an invalid slug
  if (!categoryItem) {
    notFound();
  }

  const productsArray: Product[] = await fetchProducts(category, 6);

  return (
    <main className="py-6 py-12 max-w-[1366px] mx-auto">
      <article>
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/shop">Shop</a>,
            },
            {
              title: <a href={`/shop/${category}`}>{categoryItem.title}</a>,
            },
          ]}
        />
      </article>
      <header className="mt-6">
        <h2 className="text-2xl font-bold">{categoryItem.title}</h2>
        <p className="mt-6">{categoryItem.desc}</p>
      </header>
      <article className="my-6">
        <Organism.Shop>
          {productsArray.length &&
            productsArray.map((product: Product) => {
              return (
                <Molecule.Product
                  key={product.id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  isSoldOut={product.isSoldOut}
                  link={product.link}
                />
              );
            })}
        </Organism.Shop>
      </article>
    </main>
  );
}
