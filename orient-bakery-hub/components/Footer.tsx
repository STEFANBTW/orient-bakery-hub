
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="material-icons text-primary text-3xl">bakery_dining</span>
            <span className="text-xl font-bold uppercase tracking-tight">Orient Bakery</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Leading the way in artisanal baking and event catering since 1998. Freshly baked daily, with passion.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="camera_alt" />
            <SocialIcon icon="place" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-gray-200">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition">Daily Menu</a></li>
            <li><a href="#" className="hover:text-primary transition">Custom Cakes</a></li>
            <li><a href="#" className="hover:text-primary transition">Wholesale Portal</a></li>
            <li><a href="#" className="hover:text-primary transition">Bulk Orders</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gray-200">Our Bakery</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition">Our Story</a></li>
            <li><a href="#" className="hover:text-primary transition">Workshops</a></li>
            <li><a href="#" className="hover:text-primary transition">Locations</a></li>
            <li><a href="#" className="hover:text-primary transition">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gray-200">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-2"><span className="material-icons text-xs">location_on</span> No. 45 Ahmadu Bello Way, Jos</li>
            <li className="flex items-center gap-2"><span className="material-icons text-xs">phone</span> +234 800 ORIENT</li>
            <li className="flex items-center gap-2"><span className="material-icons text-xs">email</span> fresh@orientbakery.ng</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
         <p>© 2024 Orient Bakery Nigeria Ltd. All rights reserved.</p>
         <div className="flex gap-6">
           <a href="#" className="hover:text-gray-400">Privacy Policy</a>
           <a href="#" className="hover:text-gray-400">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <a href="#" className="text-gray-400 hover:text-primary transition-colors border border-gray-800 p-2 rounded-full flex items-center justify-center">
    <span className="material-icons text-xl">{icon}</span>
  </a>
);

export default Footer;
