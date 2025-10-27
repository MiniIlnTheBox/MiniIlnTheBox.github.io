import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Gift, Truck, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";

const featuredProducts = getFeaturedProducts();

const categories = [
  {
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&h=300&fit=crop",
    link: "/category/home-garden",
  },
  {
    name: "Toys & Hobbies",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    link: "/category/toys",
  },
  {
    name: "Christmas Gifts",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=300&fit=crop",
    link: "/category/christmas",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    link: "/category/electronics",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary via-amber-500 to-secondary overflow-hidden">
        <div className="container h-full flex items-center">
          <div className="max-w-xl text-white z-10">
            <h1 className="text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Make Gifting Easy This Christmas
            </h1>
            <p className="text-xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Discover amazing deals on thousands of products
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              asChild
            >
              <Link to="/category/christmas">
                Shop Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&h=600&fit=crop"
              alt="Christmas decorations"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Free Shipping", desc: "Orders over $50" },
              { icon: Shield, title: "Secure Payment", desc: "100% Protected" },
              { icon: Gift, title: "Gift Cards", desc: "Perfect Gifts" },
              { icon: Headphones, title: "24/7 Support", desc: "Always Here" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <feature.icon className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <Link to={category.link} key={i}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center font-semibold">
                    {category.name}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link to="/best-sellers">
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-secondary to-accent text-white overflow-hidden">
            <div className="p-12 relative">
              <h2 className="text-4xl font-bold mb-4">
                Limited Time Offer!
              </h2>
              <p className="text-xl mb-6">
                Get up to 50% off on selected items
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/best-sellers">Shop Deals</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
