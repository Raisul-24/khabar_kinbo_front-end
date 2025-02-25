import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-yellow-50">
      <div className="mx-auto max-w-screen-xl py-2 md:py-16">
        <footer className="footer text-base-content">
          <aside>
            <Image className='hidden md:flex rounded-full'
              src="/logo.jpg"
              width={150}
              height={150}
              alt="Logo"
            />
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link href='/' className="link link-hover">Branding</Link>
            <Link href='/' className="link link-hover">Delivery</Link>
            <Link href='/' className="link link-hover">E-payment</Link>
            <Link href='/' className="link link-hover">Advertisement</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link href='/' className="link link-hover">About us</Link>
            <Link href='/' className="link link-hover">Contact</Link>
            <Link href='/' className="link link-hover">Restaurants</Link>
            <Link href='/' className="link link-hover">Address</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href='/' className="link link-hover">Terms of use</Link>
            <Link href='/' className="link link-hover">Privacy policy</Link>
            <Link href='/' className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>

        <div className="mt-8 border-t border-red-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-red-900">&copy; 2024. Khabar Kinbo. All rights reserved.</p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link href="#" className="text-red-900 transition hover:opacity-75"> Terms & Conditions </Link>
              </li>

              <li>
                <Link href="#" className="text-red-900 transition hover:opacity-75"> Privacy Policy </Link>
              </li>

              <li>
                <Link href="#" className="text-red-900 transition hover:opacity-75"> Cookies </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
