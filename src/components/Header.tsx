import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary via-amber-500 to-secondary py-2">
        <div className="container flex items-center justify-between text-sm text-white">
          <span>🎁 Free Shipping on Orders Over $50!</span>
          <span>24/7 Customer Support</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex h-16 items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>

        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col items-center">
            <div className="flex gap-0.5">
              {[
                "hsl(0 72% 51%)",
                "hsl(39 91% 60%)",
                "hsl(142 76% 36%)",
                "hsl(217 91% 60%)",
                "hsl(280 80% 50%)",
              ].map((color, i) => (
                <div
                  key={i}
                  className="h-6 w-1 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-lg font-bold">MiniInTheBox</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 ml-6">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/category/home-garden" className="transition-colors hover:text-primary">
            Home & Garden
          </Link>
          <Link to="/category/toys" className="transition-colors hover:text-primary">
            Toys & Hobbies
          </Link>
          <Link to="/category/christmas" className="transition-colors hover:text-primary">
            🎄 Christmas
          </Link>
          <Link to="/category/electronics" className="transition-colors hover:text-primary">
            Electronics
          </Link>
          <Link to="/best-sellers" className="transition-colors hover:text-primary">
            Best Sellers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-64"
            />
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <Button size="icon" variant="ghost" asChild>
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button size="icon" variant="ghost" asChild>
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          <Button size="icon" variant="ghost" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
