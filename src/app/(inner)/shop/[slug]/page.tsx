import Product from "@/data/Product.json";
import ShopClient from "./ShopClient";

export async function generateStaticParams() {
  return Product.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ShopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ShopClient />;
}
