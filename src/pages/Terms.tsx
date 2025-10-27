import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <Card className="p-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials on our website 
                for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>You may not modify or copy the materials</li>
                <li>You may not use the materials for commercial purposes</li>
                <li>You may not attempt to reverse engineer any software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
              <p className="text-muted-foreground mb-4">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant 
                that product descriptions, pricing, or other content is accurate, complete, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Orders and Payments</h2>
              <p className="text-muted-foreground mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or 
                cancel any order for any reason. Payment must be received before orders are processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground mb-4">
                Shipping times are estimates and not guaranteed. We are not responsible for delays caused 
                by shipping carriers or customs. Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                We accept returns within 30 days of delivery. Items must be unused and in original packaging. 
                Refunds will be processed within 5-10 business days after we receive the returned item.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use the website or products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and 
                for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">
                You may not use our website for any unlawful purpose or to violate any laws. This includes 
                but is not limited to fraud, harassment, or distribution of malware.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the website 
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8 pt-8 border-t">
              Last updated: January 2025
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}