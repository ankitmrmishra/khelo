import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Dices } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto md:px-20 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="logo ">
                <span className="flex justify-between align-middle items-center text-3xl text-primary">
                  <Dices className="size-9 " />
                  <Link href={"/"}>Khelo</Link>
                </span>
              </div>
            </Link>
            <p className="text-gray-400">
              India&apos;s first social prediction market where opinions have
              real value.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Trading Platform
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Trading Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Trading Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Khelo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
