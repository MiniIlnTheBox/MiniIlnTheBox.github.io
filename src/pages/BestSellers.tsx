import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getBestSellers } from "@/data/products";

const bestSellers = getBestSellers();

export default function BestSellers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Best Sellers</h1>
          <p className="text-xl text-muted-foreground">
            Discover our most popular products loved by customers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
