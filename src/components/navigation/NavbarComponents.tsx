import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export function NavBarComponent() {
  return (
    <Navbar fluid rounded className="px-6 py-3">
      
     
      <NavbarBrand href="/" className="flex items-center gap-3">
        <Image
          src="https://staunchmen.com/wp-content/uploads/2025/01/Staunch-Men-Clothing-co-Logo-Online-Men-Fashion-Shop-In-Lekki-Boutique-in-Lekki-Lekki-Best-Clothing-Shop-Mens-Clothing-Shoes-In-Lekki-Clothing-.png"
          alt="Logo"
          width={160}
          height={60}
          className="object-contain h-12 w-auto"
        />

        <span className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          STAUNCH
        </span>
      </NavbarBrand>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-2 md:order-2">
        <Button color="light">Login</Button>
        <Button>Sign Up</Button>
        <NavbarToggle />
      </div>

      {/* Menu Links */}
      <NavbarCollapse>
        <NavbarLink href="#" active>Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Product</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>

    </Navbar>
  );
}