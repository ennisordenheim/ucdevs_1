import Link from 'next/link';
import FinalFooter from './FinalFooter';

export default function Footer() {
  // Helper component for footer navigation links
  const FooterNavLink = ({ title, href }) => (
    <div className="py-6 flex justify-between items-center">
      <h2 className="text-white text-4xl md:text-5xl font-bold">{title}</h2>
      <Link href={href} className="bg-white rounded-lg p-3 hover:bg-gray-200 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
  
  return (
    <>
      <footer className="bg-[#101010] pt-8 pb-8 px-8 md:px-16 relative">
        {/* Navigation Links */}
        <div className="container mx-auto relative z-20">
          <div className="border-t border-b border-dashed border-gray-500 divide-y divide-dashed divide-gray-500">
            <FooterNavLink title="Projects" href="#projects" />
            <FooterNavLink title="Learn" href="#learn" />
            <FooterNavLink title="Team" href="#team" />
            <FooterNavLink title="Partners" href="#partners" />
          </div>

          {/* Footer Bottom - Social Links Only */}
          <div className="mt-10 flex flex-row justify-end items-center relative z-20">
            <div className="flex space-x-12">
              <Link href="https://twitter.com/ucdevs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                Twitter
              </Link>
              <Link href="https://discord.gg/XmXhmJ9Xx6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add FinalFooter directly within the Footer component */}
      <FinalFooter />
    </>
  );
}
