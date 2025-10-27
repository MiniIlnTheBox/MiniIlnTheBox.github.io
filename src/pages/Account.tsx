import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, MapPin, CreditCard } from "lucide-react";

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders">
              <Package className="h-4 w-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="addresses">
              <MapPin className="h-4 w-4 mr-2" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="payment">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="md:col-span-2">
                  <Button>Update Profile</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-6">
              <h2 className="text-xl font-bold mb-6">Change Password</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button>Change Password</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <Card key={order} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">Order #{1000 + order}</h3>
                      <p className="text-sm text-muted-foreground">
                        Placed on December {order}, 2024
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      Delivered
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=100&h=100&fit=crop"
                        alt="Product"
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">Smart LED String Lights</h4>
                        <p className="text-sm text-muted-foreground">Quantity: 2</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$49.98</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <span className="font-semibold">Total: $49.98</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Track Order</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-square bg-muted">
                    <img
                      src={`https://images.unsplash.com/photo-1512909006721-3d6018887383?w=300&h=300&fit=crop`}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2">
                      Smart LED String Lights
                    </h3>
                    <p className="font-bold text-primary mb-3">$24.99</p>
                    <Button size="sm" className="w-full">Add to Cart</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addresses">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold">Home Address</h3>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <p className="text-muted-foreground">
                  John Doe<br />
                  123 Main Street<br />
                  New York, NY 10001<br />
                  United States<br />
                  +1 (555) 123-4567
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold">Work Address</h3>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <p className="text-muted-foreground">
                  John Doe<br />
                  456 Business Ave<br />
                  New York, NY 10002<br />
                  United States<br />
                  +1 (555) 987-6543
                </p>
              </Card>

              <Card className="p-6 border-dashed">
                <Button variant="outline" className="w-full">
                  + Add New Address
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payment">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold">Visa ending in 4242</h3>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono">•••• •••• •••• 4242</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold">Mastercard ending in 5555</h3>
                    <p className="text-sm text-muted-foreground">Expires 06/26</p>
                  </div>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono">•••• •••• •••• 5555</p>
                </div>
              </Card>

              <Card className="p-6 border-dashed">
                <Button variant="outline" className="w-full">
                  + Add New Payment Method
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
