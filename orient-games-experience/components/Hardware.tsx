import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../App';
import { Navbar } from './Navbar';

interface Props {
    onNavigate: (page: Page) => void;
}

export const Hardware: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-[#f8f8f5] dark:bg-[#1a1914] text-gray-800 dark:text-gray-200 font-display min-h-screen relative overflow-x-hidden selection:bg-[#f2b90d] selection:text-black">
             {/* Grid Overlay */}
             <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #3a362b 1px, transparent 1px), linear-gradient(to bottom, #3a362b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             {/* Standardized Navigation */}
             <Navbar onNavigate={onNavigate} />

             {/* HERO SECTION */}
             <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 border-b border-[#f2b90d]/10">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-[1px] w-12 bg-[#f2b90d]"></span>
                            <span className="text-[#f2b90d] text-xs tracking-[0.3em] font-bold">SPECIFICATION OVERVIEW v.5.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8">
                            ZERO<br/> LATENCY.<br/>
                            <span className="text-[#f2b90d]" style={{ WebkitTextStroke: '2px #f2b90d', color: 'transparent' }}>8K REALITY.</span>
                        </h1>
                        <div className="flex flex-wrap gap-8 text-sm text-gray-400 font-mono mt-8 border-t border-[#f2b90d]/20 pt-8 max-w-2xl">
                            {[{l:'RENDER SCALE', v:'200%'}, {l:'FRAME RATE', v:'UNLOCKED'}, {l:'INPUT LAG', v:'<0.5ms'}].map((s,i) =>(
                                <div key={i} className={`flex flex-col ${i>0?'border-l border-gray-700 pl-8':''}`}>
                                    <span className="text-[10px] text-[#f2b90d] mb-1">{s.l}</span>
                                    <span className="text-white text-xl">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-4 relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="relative w-full aspect-square border border-[#f2b90d]/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                             <div className="absolute inset-2 border border-dashed border-[#f2b90d]/20 rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-80 bg-[#26241d] border border-[#f2b90d]/30 rounded-xl overflow-hidden relative group">
                                <img alt="Circuit" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3MenTI34UcsY1S2iTxfSuz7KAhaqEcysu_kTcqpeRRQx8t76M7DBzxJ8u84C-LiSXBuzdgeA0ZpUqbdHb-YNFpWMtK0VBJKtz2eaXDU-IWmWSNJRDZfT3XgGfgm0iaKfglVRrP-5xPLHpyq269hciogPl4DfarpBnfgCH8Uo5v1xcmr1XB5aiOEwcFwvEUEvvwzhzXyB52l-qftY8PCoG8--1sGJur5yOIchPm1dscxD8eA2zQPoUuWK3T8Kg9e9bFkVkQJhvyxi"/>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="text-[10px] text-[#f2b90d] mb-1">SYSTEM ARCHITECTURE</div>
                                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#f2b90d] w-3/4"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* PC RIGS SECTION */}
             <section className="py-32 px-4 relative border-b border-[#f2b90d]/10 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <span className="text-[#f2b90d] text-xs tracking-widest font-bold block mb-2">// HARDWARE CONFIGURATION</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">The Rigs</h2>
                        </div>
                    </div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[600px] bg-[#26241d]/30 rounded-2xl border border-[#f2b90d]/20 flex items-center justify-center p-8 group">
                            <div className="absolute top-4 left-4 text-[10px] text-[#f2b90d]/50 font-mono">FIG 2.1 - EXPLODED VIEW</div>
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <img alt="PC Rig" className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(242,185,13,0.3)] grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclQ8Im1ImDIEwPdTuKMespLQVxjvhT9YhpStwrlbtEA30iZXG21L1xwpzYiRv6E_zHU5l90Fm1aBDLPdylYh1qhW7vwT19Eu8NCBFTW5wRWDaIER6DP5zgkMIsZnQ61w4tWfJ6s8Idxfq8tSnnGPFNn6fP8bt55oiL3CKiiGSiX0dlbaeNRHwh6wvULzayKqOgTjY0cUmXj6cqVghnWO_5dqfXQp0QS_OlB3-aehJxghk3ZfmNPe1q1rJJhrwb3OWaWBcRdFF9Ys2"/>
                                {/* Exploded pointers */}
                                <div className="absolute top-[20%] right-[10%] bg-[#26241d] border border-[#f2b90d]/40 p-2 rounded text-[10px] text-[#f2b90d] w-24 backdrop-blur-md">RTX 4090 TI<br/><span className="text-gray-400">24GB GDDR6X</span></div>
                            </div>
                        </div>
                        <div className="space-y-8">
                             <div className="border-l-2 border-[#f2b90d] pl-6 py-2">
                                <h3 className="text-2xl font-bold text-white mb-2">CUSTOM "TITAN" BUILD</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-md">Engineered for zero-compromise performance. Our custom loop cooling system ensures peak clock speeds are maintained indefinitely.</p>
                             </div>
                             <div className="space-y-4">
                                {[{icon:'memory', l:'Processor', v:'Intel Core i9-14900KS', r:'6.2GHz'}, {icon:'developer_board', l:'Graphics', v:'NVIDIA RTX 4090 OC', r:'24GB'}, {icon:'storage', l:'Memory', v:'Corsair Dominator Platinum', r:'64GB'}].map((item, i) => (
                                    <div key={i} className="bg-[#26241d] border border-[#f2b90d]/20 p-4 rounded flex justify-between items-center group hover:border-[#f2b90d]/60 transition-colors cursor-default">
                                        <div className="flex items-center gap-4">
                                            <span className="material-icons text-[#f2b90d]/50 group-hover:text-[#f2b90d]">{item.icon}</span>
                                            <div>
                                                <div className="text-[10px] text-[#f2b90d] uppercase tracking-widest">{item.l}</div>
                                                <div className="text-white font-bold">{item.v}</div>
                                            </div>
                                        </div>
                                        <div className="text-right text-white font-mono">{item.r}</div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* CONSOLE ARCHITECTURE (PS5) */}
             <section className="py-32 px-4 relative border-b border-[#f2b90d]/10 bg-[#151410]">
                 <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                         <div className="md:w-1/2">
                            <span className="text-[#f2b90d] text-xs tracking-widest font-bold block mb-2">// NEXT-GEN CONSOLE</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-6">Station V <br/>Architecture</h2>
                            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#f2b90d] pl-6">
                                Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible games.
                            </p>
                         </div>
                         <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col gap-4">
                            {[
                                { l: 'CUSTOM RDNA 2', v: '10.28 TFLOPS', i: 'memory' },
                                { l: 'BANDWIDTH', v: '448GB/s', i: 'speed' },
                                { l: 'STORAGE', v: '825GB NVMe', i: 'storage' }
                            ].map((s, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <div className="flex items-center gap-3">
                                        <span className="material-icons text-[#f2b90d]">{s.i}</span>
                                        <span className="text-xs text-gray-400 font-bold tracking-widest">{s.l}</span>
                                    </div>
                                    <span className="text-white font-mono">{s.v}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="relative h-[500px] w-full bg-black/50 rounded-2xl overflow-hidden border border-[#f2b90d]/20 group">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,84,235,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRSSgWjLl7l4vAdFdVSK9IIELfDnuRHJSKN97JVfz1i0-nwSMcrW_sJj_NGSulQ_DKewww6PBX-x4RH1kLOf7jXWhtL1p_6g3-FwPUjPiVUnNOGGQzvcWgNNjSLTh5q9mdSc9b2d0PjKhbUYT9iQR0xW4MtS1Pk-a5jJN6bMC_zfsZXyXu1YdzifShBwPwiN58k-qaF6vfuhyEpiWkS1bBTH_eLbCYyZfYyatnQizkAWDAClQinarlYe2qTShum57fNZ2CiFW0NbRo" alt="PS5 Controller Art" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                         
                         {/* Haptic Points */}
                         <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                             <div className="relative">
                                 <span className="absolute w-4 h-4 bg-[#f2b90d] rounded-full animate-ping"></span>
                                 <span className="relative block w-4 h-4 bg-[#f2b90d] rounded-full border-2 border-white"></span>
                                 <div className="absolute left-8 top-0 w-48 bg-black/80 text-white text-xs p-2 rounded border border-[#f2b90d]/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                     <strong>Adaptive Triggers</strong><br/>Dynamic resistance levels simulate physical impact.
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
             </section>

             {/* DISPLAY TECH */}
             <section className="py-32 px-4 relative border-b border-[#f2b90d]/10">
                 <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-16">
                         <span className="text-[#f2b90d] text-xs tracking-[0.4em] font-bold uppercase">// VISUAL FIDELITY</span>
                         <h2 className="text-5xl md:text-7xl font-bold text-white mt-2">43" 4K HDR CANVAS</h2>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {[
                             { t: 'ULTRA HD', d: '3840 x 2160 Resolution', i: '4k' },
                             { t: 'HDR 10+', d: '1 Billion Colors', i: 'hdr_on' },
                             { t: '120Hz', d: 'Fluid Motion Processing', i: 'shutter_speed' }
                         ].map((card, i) => (
                             <motion.div 
                                whileHover={{ y: -10 }}
                                key={i} className="bg-[#26241d]/50 border border-[#f2b90d]/10 p-8 rounded-xl text-center group hover:bg-[#26241d] hover:border-[#f2b90d]/50 transition-all duration-300">
                                 <span className="material-icons text-5xl text-gray-600 group-hover:text-[#f2b90d] mb-4 transition-colors">{card.i}</span>
                                 <h3 className="text-2xl font-bold text-white mb-2">{card.t}</h3>
                                 <p className="text-gray-400 font-mono text-sm">{card.d}</p>
                             </motion.div>
                         ))}
                     </div>
                 </div>
             </section>

             {/* VR HEADSETS */}
             <section className="py-32 px-4 relative border-b border-[#f2b90d]/10 bg-[#12110e]">
                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                         <span className="text-[#f2b90d] text-xs tracking-widest font-bold uppercase block mb-4">// IMMERSIVE TECH</span>
                         <h2 className="text-5xl font-bold text-white mb-6">VR FRONTIER</h2>
                         <p className="text-gray-400 leading-relaxed mb-8">
                             Step into the metaverse with industry-leading optics. Our VR stations feature headsets with 2064x2208 resolution per eye, pancake lenses for clarity, and full-color passthrough mixed reality.
                         </p>
                         <ul className="space-y-4">
                             {[
                                 'Pancake Optics for edge-to-edge clarity',
                                 'Qualcomm Snapdragon XR2 Gen 2',
                                 'TruTouch Haptics in Controllers',
                                 '110° Field of View'
                             ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-4 text-gray-300">
                                     <span className="w-1.5 h-1.5 bg-[#f2b90d] rounded-full"></span>
                                     {item}
                                 </li>
                             ))}
                         </ul>
                     </div>
                     <div className="relative">
                         <div className="absolute inset-0 bg-gradient-to-r from-[#f2b90d]/20 to-transparent rounded-full blur-[80px]"></div>
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ27q6uD1KvHZYG9Lyy-dmVCntdyUC8JvklwuJ7NMOv8v0DvRkInIulr_W0IdX2L4E-dEGD6Gkg7MGa71npDExoKMEe-Nkxq9pB1f9OI4_y0SwVIDzue_bxi-cC4Ffz2oFV3_NEy4NrzwnqtNHTjfqcDcGrsm-RLARQ7gFSP6ByHgrITUhBO1e643G3ERoGdc4rBOybMmIMI4eKqPez9-ZQiXvBrhfiKAR86lenVMLFQfKhFWkXPHA0G5pXlEjhMzVRWLjcKClsLOB" alt="VR Headset" className="relative z-10 w-full animate-[float_5s_ease-in-out_infinite] drop-shadow-[0_20px_50px_rgba(242,185,13,0.15)]" />
                     </div>
                 </div>
             </section>

             {/* RACING SIMULATOR */}
             <section className="py-32 px-4 relative">
                 <div className="max-w-7xl mx-auto text-center">
                     <span className="text-[#f2b90d] text-xs tracking-widest font-bold uppercase block mb-4">// PROFESSIONAL GRADE</span>
                     <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 uppercase italic tracking-tighter">Sim Racing Rig</h2>
                     
                     <div className="relative w-full aspect-[21/9] bg-[#1a1914] rounded-3xl overflow-hidden border border-gray-800 group">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQO3haxzauLNwSEpt1bqCLFHeSJPKAdCdBjtpJtAj1IY494HnF1cF9UcL3o7KVemu3fme9OvO23-OUABIWDWLVUFUNLV63L84j1osxI-btkFt_sTbL75eWuJXj92HQXmMZn7ImOwlj3FIjDaeGASGTZQELWxMuf2zjxS2JdePQfCMVopqrTG7xGm7vKm2Pf-bu6elcD5hvS2in6_vqne055T0noEFTsMoZzfjb89WgrawLkXlIxyGlEatN-brN_2Xu_b2-iIfkMw-C" alt="Racing Simulator" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                         
                         {/* Specs Overlay */}
                         <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end">
                             <div className="text-left">
                                 <h3 className="text-3xl font-bold text-white mb-2">Direct Drive Wheel Base</h3>
                                 <p className="text-gray-400 max-w-lg">
                                     Experience the track with 8Nm of torque. Feel every bump, curb, and tire slip with zero latency force feedback.
                                 </p>
                             </div>
                             <div className="flex gap-4 mt-8 md:mt-0">
                                 <div className="bg-[#f2b90d] text-black px-4 py-2 font-bold rounded uppercase text-sm">Load Cell Pedals</div>
                                 <div className="bg-white/10 text-white backdrop-blur px-4 py-2 font-bold rounded uppercase text-sm border border-white/20">Bucket Seat</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
        </div>
    );
};