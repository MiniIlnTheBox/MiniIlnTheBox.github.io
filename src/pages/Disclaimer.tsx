import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <Card className="p-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Website Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The information provided by MiniInTheBox on our website is for general informational purposes 
                only. All information on the site is provided in good faith, however we make no representation 
                or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, 
                or completeness of any information on the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to external websites that are not provided or maintained by us. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                on these external websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
              <p className="text-muted-foreground mb-4">
                Product images are for illustrative purposes only and may differ from the actual product. 
                We make every effort to display colors and images accurately, but we cannot guarantee that 
                your device's display accurately reflects the color of the products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The site cannot and does not contain professional advice. The information is provided for 
                general informational and educational purposes only and is not a substitute for professional advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Affiliate Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain affiliate links. This means we may receive a commission if you click 
                a link and purchase something that we have recommended, at no additional cost to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Errors and Omissions</h2>
              <p className="text-muted-foreground mb-4">
                While we have made every attempt to ensure the information contained on this website is correct, 
                we are not responsible for any errors or omissions, or for the results obtained from the use 
                of this information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Fair Use</h2>
              <p className="text-muted-foreground mb-4">
                Our website may use copyrighted material which has not always been specifically authorized 
                by the copyright owner. We believe this constitutes a 'fair use' of any such copyrighted 
                material as provided for in applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Disclaimer, please contact us at legal@miniinthebox.com
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