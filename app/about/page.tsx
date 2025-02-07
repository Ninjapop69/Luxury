import { CheckCircleIcon, RocketLaunchIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-charcoal min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-gold mb-8 animate-fade-in">About Us</h1>
          <p className="text-silver mb-12 text-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            At Luxury Listing Pages, we are redefining the way luxury real estate is marketed. In a world where first
            impressions matter, we provide bespoke, high-converting property websites that showcase high-end homes in
            the way they deserve—sophisticated, seamless, and unforgettable. Our mission is to bridge the gap between
            technology and real estate, offering a digital showroom experience that captivates potential buyers and
            drives offers faster.
          </p>

          <h2
            className="text-3xl font-serif font-bold text-gold mb-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Our Story
          </h2>
          <div
            className="flex flex-col md:flex-row items-center mb-12 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Serg Mahalo"
              width={200}
              height={200}
              className="rounded-full mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <p className="text-silver mb-4">
                Luxury Listing Pages was founded by Serg Mahalo, a computer engineering student from Wentworth Institute
                of Technology in Boston, Massachusetts. Combining a background in technology with a deep understanding
                of real estate, Serg saw a critical gap in the market: high-end real estate agents needed better tools
                to showcase their properties in a way that matched the prestige of the homes they were selling.
              </p>
              <p className="text-silver">
                Too often, multi-million-dollar estates are reduced to generic listings on crowded platforms, blending
                in with lower-tier properties. Luxury buyers expect exclusivity—they want personalized, immersive
                experiences that highlight the lifestyle a property offers, not just its specs. That's why Serg created
                Luxury Listing Pages, a premium service dedicated to providing real estate professionals with elegant,
                highly optimized, and lead-driven property websites.
              </p>
            </div>
          </div>

          <h2
            className="text-3xl font-serif font-bold text-gold mb-6 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Our Vision
          </h2>
          <p className="text-silver mb-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
            We believe that luxury real estate deserves luxury marketing. Every detail of a high-end home is
            meticulously curated, from its architecture to its interior design—why should its online presence be any
            different? Our vision is to elevate luxury real estate marketing by delivering:
          </p>
          <ul className="space-y-4 mb-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            {[
              "Custom-Branded Property Domains – Each listing gets its own premium website (e.g., 4757FakeStreet.com) to give it a unique identity.",
              "High-End Visual Presentation – Our designs reflect the elegance and sophistication of the homes they represent, ensuring a seamless experience across all devices.",
              "Lead Capture & Automation – Every visitor is a potential buyer. We provide integrated forms, automated follow-ups, and CRM synchronization to maximize conversions.",
              "SEO & Performance Optimization – Fast, mobile-friendly, and fully optimized for Google rankings, ensuring the right buyers find the right homes.",
              "Data-Driven Insights – Our analytics help agents understand visitor engagement and refine their sales strategy.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                <span className="text-silver">{item}</span>
              </li>
            ))}
          </ul>

          <h2
            className="text-3xl font-serif font-bold text-gold mb-6 animate-fade-in"
            style={{ animationDelay: "700ms" }}
          >
            Why Luxury Listing Pages?
          </h2>
          <div className="space-y-6 mb-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">We Understand Luxury Buyers</h3>
              <p className="text-silver">
                Luxury buyers operate differently. They don't just browse properties—they seek curated experiences that
                align with their lifestyle and aspirations. Our property websites offer immersive virtual experiences,
                allowing potential buyers to explore homes in a way that static listing pages simply cannot match.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">We Empower High-End Real Estate Agents</h3>
              <p className="text-silver">
                Our goal is to help top-tier real estate professionals market their listings more effectively, attract
                serious buyers, and ultimately close deals faster. By providing agents with an elite digital toolkit, we
                give them the competitive edge they need in the fast-moving luxury real estate market.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">We Leverage Cutting-Edge Technology</h3>
              <p className="text-silver">
                With a background in computer engineering, Serg brings a deep understanding of web performance, UX/UI
                design, and digital marketing automation. Our platform is built with the latest technologies, ensuring
                that every listing site is lightning-fast, highly responsive, and seamlessly integrated with lead
                capture systems.
              </p>
            </div>
          </div>

          <h2
            className="text-3xl font-serif font-bold text-gold mb-6 animate-fade-in"
            style={{ animationDelay: "900ms" }}
          >
            A Future Focused on Innovation
          </h2>
          <p className="text-silver mb-6 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            At Luxury Listing Pages, we don't just keep up with real estate marketing trends—we set them. We are
            constantly innovating, exploring new ways to enhance property presentation, buyer engagement, and conversion
            optimization. Our future roadmap includes:
          </p>
          <ul className="space-y-4 mb-12 animate-fade-in" style={{ animationDelay: "1100ms" }}>
            {[
              "AI-Driven Personalization – Tailoring website content to match each buyer's interests.",
              "Virtual Reality (VR) & 3D Tours – Bringing properties to life in an interactive digital environment.",
              "Integrated Advertising Solutions – Connecting listing pages with high-impact Google and social media campaigns for maximum exposure.",
              "Real-Time Market Insights – Helping agents track engagement metrics and adjust their sales strategy accordingly.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <RocketLaunchIcon className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                <span className="text-silver">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-black bg-opacity-50 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "1200ms" }}>
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">
              Join the Future of Luxury Real Estate Marketing
            </h2>
            <p className="text-silver mb-6">
              If you're a luxury real estate agent looking to elevate your listings, attract serious buyers, and
              leverage cutting-edge technology to drive sales, Luxury Listing Pages is your ultimate marketing partner.
            </p>
            <p className="text-xl text-gold font-bold mb-6">
              🏆 Your listings deserve more than just another page—they deserve a premium experience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              📩 Request a Free Demo Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
