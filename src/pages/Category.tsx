import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";
import { getProductsByCategory, products as allProducts } from "@/data/products";

const categoryNames: Record<string, string> = {
  "home-garden": "Home & Garden",
  toys: "Toys & Hobbies",
  christmas: "Christmas Gifts",
  electronics: "Consumer Electronics",
};

export default function Category() {
  const { category } = useParams();
  const categoryName = categoryNames[category || ""] || "All Products";
  
  const products = category && categoryNames[category]
    ? getProductsByCategory(category)
    : allProducts;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">{categoryName}</h1>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <Slider defaultValue={[0, 200]} max={500} step={10} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                        {rating}★ & Up
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Shipping</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="free-shipping" />
                    <Label htmlFor="free-shipping" className="text-sm cursor-pointer">
                      Free Shipping
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fast-delivery" />
                    <Label htmlFor="fast-delivery" className="text-sm cursor-pointer">
                      Fast Delivery
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Discount</h3>
                <div className="space-y-2">
                  {["50% or more", "40% or more", "30% or more", "Any discount"].map((discount) => (
                    <div key={discount} className="flex items-center space-x-2">
                      <Checkbox id={discount} />
                      <Label htmlFor={discount} className="text-sm cursor-pointer">
                        {discount}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {products.length} results
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
