import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About MiniInTheBox</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing you quality products at affordable prices.
            Since 2006, we've been serving millions of customers worldwide with our
            curated selection of home goods, electronics, and unique gifts.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To make shopping convenient and affordable for everyone",
            },
            {
              icon: Users,
              title: "10M+ Customers",
              description: "Trusted by millions of happy customers worldwide",
            },
            {
              icon: Award,
              title: "Quality Products",
              description: "Carefully curated products that meet our high standards",
            },
            {
              icon: Heart,
              title: "Customer First",
              description: "24/7 support and hassle-free returns",
            },
          ].map((value, i) => (
            <Card key={i} className="p-6 text-center">
              <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2006, MiniInTheBox started with a simple vision: to make online
              shopping accessible and enjoyable for everyone. What began as a small team
              with big dreams has grown into a global e-commerce platform serving millions
              of customers across the world.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that everyone deserves access to quality products at fair prices.
              That's why we work directly with manufacturers and suppliers to bring you
              the best deals without compromising on quality.
            </p>
            <p className="text-muted-foreground">
              Today, we offer thousands of products across multiple categories, from home
              and garden to electronics and toys. Our commitment to customer satisfaction
              drives everything we do.
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground mb-12">
            The passionate people behind MiniInTheBox
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder" },
              { name: "Michael Chen", role: "Chief Technology Officer" },
              { name: "Emily Davis", role: "Head of Operations" },
              { name: "David Lee", role: "Customer Success Lead" },
            ].map((member, i) => (
              <div key={i}>
                <div className="aspect-square rounded-full overflow-hidden mb-4 bg-gradient-to-br from-primary to-secondary">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1534528741775 + i * 100
                    }-0000000?w=300&h=300&fit=crop&faces=1`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="bg-gradient-to-r from-primary via-amber-500 to-secondary text-white p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10M+", label: "Happy Customers" },
              { value: "50K+", label: "Products" },
              { value: "100+", label: "Countries" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
