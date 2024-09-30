import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Navbarcomp() {
  return (
    <Navbar fluid className="bg-[#97bfbd] py-6">
      <NavbarBrand href="#abt">
        <span className="self-center whitespace-nowrap text-4xl font-bold text-[#212427]" style={{ fontFamily: 'Makota, sans-serif' }}>AURA</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <a href="#contact">
          <Button className="bg-white text-[#212427] hover:bg-[#171717] font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Login
          </Button>
        </a>
        <NavbarToggle className="bg-[##97bfbd]" />
      </div>
      <NavbarCollapse className="bg-[##97bfbd]">
        <NavbarLink className="text-[#212427] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#shop">Shop</NavbarLink>
        <NavbarLink className="text-[#212427] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#services">About</NavbarLink>
        <NavbarLink className="text-[#212427] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#faq">FAQ</NavbarLink>
        <NavbarLink className="text-[#212427] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
