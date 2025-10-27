import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const wishlistProducts = products.slice(0, 6);

export default function Wishlist() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        <p className="text-muted-foreground mb-8">
          You have {wishlistProducts.length} items in your wishlist
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
