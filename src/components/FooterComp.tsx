import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
  
  export function FooterComp() {
    return (
      <Footer container className="bg-background">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <span className="self-center whitespace-nowrap text-4xl font-bold text-[#212427]" style={{ fontFamily: 'Makota, sans-serif' }}>
                AURA
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              <div >
                <FooterTitle title="About Us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Our Story</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Sustainability</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Shop" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Skincare</FooterLink>
                  <FooterLink href="#">Makeup</FooterLink>
                  <FooterLink href="#">Haircare</FooterLink>
                  <FooterLink href="#">Accessories</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Customer Service" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Contact Us</FooterLink>
                  <FooterLink href="#">FAQ</FooterLink>
                  <FooterLink href="#">Returns</FooterLink>
                  <FooterLink href="#">Shipping Information</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="AURA™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  