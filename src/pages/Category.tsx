
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
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

const ITEMS_PER_PAGE = 12;

export default function Category() {
  const { category } = useParams();
  const categoryName = categoryNames[category || ""] || "All Products";
  
  const baseProducts = category && categoryNames[category]
    ? getProductsByCategory(category)
    : allProducts;

  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const filteredProducts = useMemo(() => {
    return baseProducts.filter((product) => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Rating filter
      if (selectedRatings.length > 0) {
        const hasMatchingRating = selectedRatings.some(
          (rating) => product.rating >= rating
        );
        if (!hasMatchingRating) return false;
      }

      // Discount filter
      if (selectedDiscounts.length > 0) {
        const discount = product.originalPrice
          ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
          : 0;
        
        const hasMatchingDiscount = selectedDiscounts.some((discountFilter) => {
          if (discountFilter === "50% or more" && discount >= 50) return true;
          if (discountFilter === "40% or more" && discount >= 40) return true;
          if (discountFilter === "30% or more" && discount >= 30) return true;
          if (discountFilter === "Any discount" && discount > 0) return true;
          return false;
        });
        
        if (!hasMatchingDiscount) return false;
      }

      return true;
    });
  }, [baseProducts, priceRange, selectedRatings, selectedDiscounts]);

  const displayedProducts = filteredProducts.slice(0, displayCount);

  const handleRatingChange = (rating: number, checked: boolean) => {
    setSelectedRatings((prev) =>
      checked ? [...prev, rating] : prev.filter((r) => r !== rating)
    );
  };

  const handleDiscountChange = (discount: string, checked: boolean) => {
    setSelectedDiscounts((prev) =>
      checked ? [...prev, discount] : prev.filter((d) => d !== discount)
    );
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
  };

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
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={selectedRatings.includes(rating)}
                        onCheckedChange={(checked) =>
                          handleRatingChange(rating, checked as boolean)
                        }
                      />
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
                    <Checkbox
                      id="free-shipping"
                      checked={freeShipping}
                      onCheckedChange={(checked) => setFreeShipping(checked as boolean)}
                    />
                    <Label htmlFor="free-shipping" className="text-sm cursor-pointer">
                      Free Shipping
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fast-delivery"
                      checked={fastDelivery}
                      onCheckedChange={(checked) => setFastDelivery(checked as boolean)}
                    />
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
                      <Checkbox
                        id={discount}
                        checked={selectedDiscounts.includes(discount)}
                        onCheckedChange={(checked) =>
                          handleDiscountChange(discount, checked as boolean)
                        }
                      />
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
              Showing {displayedProducts.length} of {filteredProducts.length} results
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {displayedProducts.length < filteredProducts.length && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" size="lg" onClick={handleLoadMore}>
                  Load More Products
                </Button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
