import React, { useState } from 'react';
import { Product } from '../types';

const products: Product[] = [
  { id: '1', name: '75cl Premium', description: 'Water Bottle', price: 150, image: 'https://images.unsplash.com/photo-1602143407151-01114195bc03?auto=format&fit=crop&w=400&q=80', volume: '75cl' },
  { id: '2', name: '50cl On-the-Go', description: 'Bottle', price: 100, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=400&q=80', volume: '50cl' },
  { id: '3', name: '19L Dispenser', description: 'Refill', price: 1200, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80', volume: '19L' },
  { id: '4', name: 'Sachet Pack', description: '(20pcs)', price: 300, image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=400&q=80', volume: '20pcs' },
  { id: '5', name: '75cl Case', description: '12-Pack Case', price: 1800, image: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&w=400&q=80', volume: '12x75cl' },
  { id: '6', name: '50cl Case', description: '24-Pack Case', price: 2400, image: 'https://images.unsplash.com/photo-1589365278144-96e36761d411?auto=format&fit=crop&w=400&q=80', volume: '24x50cl' },
];

const Catalog: React.FC = () => {
  const [guests, setGuests] = useState(50);
  const [hours, setHours] = useState(4);
  const [subscriptionType, setSubscriptionType] = useState<'weekly'|'monthly'>('weekly');

  const recommendedLiters = Math.round(guests * hours * 0.5); // Simplified calculation

  return (
    <div className="bg-background-light min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Hydration Catalog & Subscriptions</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Orient Water's division for the custom, pure water needs. Choose for product catalog and bulk ordering.</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-500 mb-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-mono font-bold text-secondary">₦{product.price}</span>
                <button className="text-xs bg-slate-900 text-white px-3 py-2 rounded hover:bg-secondary transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          {/* Custom Bulk Order Card */}
          <div className="bg-white p-6 rounded-xl border border-dashed border-primary flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/5 transition-colors">
            <span className="material-icons text-4xl text-primary mb-2">assignment</span>
            <h3 className="font-bold text-slate-900">Custom Bulk Order</h3>
            <p className="text-xs text-slate-500 mt-2">Contact for Quote</p>
            <button className="mt-4 px-4 py-2 text-sm border border-slate-300 rounded hover:border-slate-800">Details</button>
          </div>
        </div>

        {/* Calculator & Subscription Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Calculator */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">The Hydration Calculator</h2>
            <p className="text-sm text-slate-500 mb-8">Increase the recommendation accuracy in the commemorative widget.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Guests</label>
                <input 
                  type="number" 
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Hours)</label>
                <input 
                  type="number" 
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              
              <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                Calculate Recommendation
              </button>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 text-sm mb-1">Recommended Bundle:</h4>
                <p className="text-blue-800 text-xs mb-2">Based on your inputs, we suggest <strong>{Math.ceil(recommendedLiters / 19)}x</strong> 19L Dispenser Refills and <strong>{Math.ceil(guests / 12)}x</strong> 50cl 12-Pack Cases.</p>
                <div className="text-lg font-bold text-blue-900">Estimated: ₦{((Math.ceil(recommendedLiters / 19) * 1200) + (Math.ceil(guests/12) * 1800)).toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Subscription Hub */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Never Run Dry - Subscription Hub</h2>
              <p className="text-sm text-slate-500">Home & Office 19L Dispenser Refills</p>
              
              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <span className={`text-sm font-medium ${subscriptionType === 'weekly' ? 'text-blue-600' : 'text-slate-400'}`}>Weekly</span>
                <button 
                  onClick={() => setSubscriptionType(subscriptionType === 'weekly' ? 'monthly' : 'weekly')}
                  className="w-14 h-8 bg-slate-200 rounded-full relative transition-colors focus:outline-none"
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${subscriptionType === 'monthly' ? 'left-7' : 'left-1'}`}></div>
                </button>
                <span className={`text-sm font-medium ${subscriptionType === 'monthly' ? 'text-blue-600' : 'text-slate-400'}`}>Monthly</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Weekly Card */}
              <div className={`p-6 rounded-xl border-2 transition-all ${subscriptionType === 'weekly' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 bg-white opacity-60'}`}>
                <h3 className="font-bold text-slate-900 mb-2">Weekly Refill Plan</h3>
                <p className="text-xs text-slate-500 mb-4">Ideal for offices. 4 deliveries per month. Manage online.</p>
                <div className="text-lg font-bold text-slate-900 mb-4">₦4,800 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">Subscribe Weekly</button>
              </div>

              {/* Monthly Card */}
              <div className={`p-6 rounded-xl border-2 transition-all ${subscriptionType === 'monthly' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 bg-white opacity-60'}`}>
                <h3 className="font-bold text-slate-900 mb-2">Monthly Refill Plan</h3>
                <p className="text-xs text-slate-500 mb-4">Perfect for homes. 1 delivery per month. Cancel anytime.</p>
                <div className="text-lg font-bold text-slate-900 mb-4">₦1,200 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">Subscribe Monthly</button>
              </div>
            </div>
            
            <div className="text-center mt-6">
                <a href="#" className="text-sm text-blue-600 underline">Manage Existing Subscription Login</a>
            </div>
          </div>
        </div>

        {/* Logistics Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Logistics & Delivery - Orient Water Trucks & Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" alt="Delivery Truck" className="w-full h-auto" />
            </div>
            <div>
               <div className="bg-slate-50 p-6 rounded-xl mb-4">
                 <h3 className="font-bold mb-2">Delivery Zones</h3>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="text-sm text-slate-600">Zone A: Reticul & GRA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                        <span className="text-sm text-slate-600">Zone B: Tudun Wada & Lamingo</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-100"></span>
                        <span className="text-sm text-slate-600">Zone C: Bukuru & Environs</span>
                    </div>
                 </div>
               </div>
               <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                 <li><strong>Fleet:</strong> Modern, temperature-controlled Orient Water Trucks ensure quality.</li>
                 <li><strong>Schedule:</strong> Standard deliveries 8 AM - 6 PM, Mon-Sat. Express options available.</li>
               </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Catalog;