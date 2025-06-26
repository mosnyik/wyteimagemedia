import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Wyte Image Media"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Elevating Africa's premium experiences through exceptional event
              management, luxury hospitality, prestigious awards, and compelling
              storytelling. Based in the United Kingdom, serving clients
              globally. Contact us at wyteimagemedia@mail.co.uk
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-green-400"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100086159696714",
                    "_blank"
                  )
                }
              >
                Facebook
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-400"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/wyteimagemedia/",
                    "_blank"
                  )
                }
              >
                Instagram
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-green-400"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/wyteimagemedia/",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-400"
                onClick={() => window.open("https://x.com/mosnyik/", "_blank")}
              >
                Twitter
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services/event-management"
                  className="hover:text-green-400 transition-colors"
                >
                  Event Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hotel-reservations"
                  className="hover:text-orange-400 transition-colors"
                >
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/profile-magazine"
                  className="hover:text-green-400 transition-colors"
                >
                  Profile Magazine
                </Link>
              </li>
              <li>
                <Link
                  href="/services/golden-hearts-awards"
                  className="hover:text-orange-400 transition-colors"
                >
                  Golden Hearts Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-green-400 transition-colors"
                >
                  Branding Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Wyte Image Media. All rights
            reserved. | Based in United Kingdom, England
          </p>
        </div>
      </div>
    </footer>
  );
}
