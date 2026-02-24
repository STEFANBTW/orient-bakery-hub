import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../App';
import { Navbar } from './Navbar';

interface Props {
    onNavigate: (page: Page) => void;
}

export const Tournament: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-[#101622] text-slate-200 font-display min-h-screen relative overflow-x-hidden selection:bg-[#135bec] selection:text-white tourney-scroll">
            <Navbar onNavigate={onNavigate} />

            {/* SECTION 1: LIVE BRACKET */}
            <section className="min-h-screen pt-28 pb-20 relative flex flex-col items-center justify-start bg-[#101622] overflow-hidden" id="bracket">
                
                {/* Intensive Animated Background */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Gradient Orbs */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1], 
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#135bec]/20 rounded-full blur-[120px]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1.2, 1, 1.2], 
                            opacity: [0.2, 0.4, 0.2],
                            x: [0, -50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"
                    />

                    {/* Moving Lines/Curves */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <motion.path 
                            d="M-100 400C200 200 600 600 1540 300" 
                            stroke="#135bec" 
                            strokeWidth="1"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -100] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                         />
                         <motion.path 
                            d="M-100 600C400 400 800 800 1540 500" 
                            stroke="#135bec" 
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1, d: ["M-100 600C400 400 800 800 1540 500", "M-100 550C450 450 850 750 1540 550", "M-100 600C400 400 800 800 1540 500"] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                         />
                         <motion.path 
                            d="M0 800C300 700 600 900 1440 850" 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="1"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                         />
                    </svg>
                    
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">
                    {/* Hero Header */}
                    <div className="text-center mb-12 relative">
                        <motion.div 
                            initial={{ y: -20, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="inline-block relative group"
                        >
                            <span className="absolute inset-0 bg-[#135bec] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></span>
                            <span className="relative inline-block py-1 px-3 rounded bg-[#135bec]/10 text-[#135bec] border border-[#135bec]/30 text-sm font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                                FIFA 24 League • Season 5
                            </span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-2 relative"
                        >
                            <span className="relative z-10">Elimination Protocol</span>
                            <motion.span 
                                animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                                className="absolute left-0 top-0 text-[#135bec] z-0 mix-blend-screen opacity-50 blur-[1px]"
                            >
                                Elimination Protocol
                            </motion.span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-400 flex items-center justify-center gap-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Quarter Finals in Progress
                        </motion.p>
                    </div>

                    {/* Bracket Container */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex-grow w-full overflow-x-auto overflow-y-hidden custom-scrollbar bg-slate-900/30 rounded-2xl border border-white/5 p-8 backdrop-blur-sm relative shadow-2xl"
                    >
                        <div className="min-w-[1000px] h-full flex justify-between items-center relative">
                            
                            {/* Column 1: Quarter Finals */}
                            <div className="flex flex-col justify-around h-full gap-16 w-72 z-10">
                                {/* Match Card 1 */}
                                <BracketMatch 
                                    matchId="QF-01" 
                                    status="live"
                                    p1={{ name: 'Viper_X', score: 3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKaov3G_N_VuvIUe3hB4xqr7rjk4mI8qtbLZGbJWZyhxia47jSyRJxJ-z48CdsF6zFSm5U6_EmaaCzVBup3XQnkFzIyYnQO9bmAzDfoQO3hM8ko4cc4_f-BO_6FS33VLo9CLMFQ-TK1ZhDCrGCyqUlqN0jmyf_0B45BGtxLqkl2MIUBg5iCGM-SpDvXNx_uUr-NcMn_KW4dEda5nbNq-ZN3WNAlso1kUMd2xI8P9malbm5Uv7Rv3MKx80w2BUetBdfGGmMtk4ICt', win: true }}
                                    p2={{ name: 'NoobSlayer', score: 1, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbv6abQq7dt3LuFdbuNcrgNO4zaqWV2goqXMy0gPrscszyIExkVP748-_zINZZBTV5G3txOBldxf1R4UGBfvxIJulPbAbnUSnGQDaoGxu3_0mRxu5ZcfYzYVd0vKVJniNrAugPTS02ji0hWf6dPSTsbpvPsjh8IgJTGm5uorgJ4otCd1JTRwmWdcsqn8Vc9AHvnfXylohzMpMaODziEXgdyoUCcNLWJnDAXjC_ehSdAbkFZuAk3YFEz9lIzNjZtmEt1-Ly35ui9Sjp', win: false }}
                                />
                                
                                {/* Match Card 2 */}
                                <BracketMatch 
                                    matchId="QF-02" 
                                    status="ended"
                                    p1={{ name: 'DriftLord', score: 2, avatar: null, code: 'DL', win: true }}
                                    p2={{ name: 'K9Unit', score: 0, avatar: null, code: 'K9', win: false }}
                                />
                            </div>

                            {/* SVG Connectors */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                <motion.path 
                                    d="M 320,180 C 400,180 400,320 480,320" 
                                    fill="none" 
                                    stroke="#135bec" 
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    style={{ filter: "drop-shadow(0 0 2px #135bec)" }}
                                />
                                <motion.path 
                                    d="M 320,530 C 400,530 400,320 480,320" 
                                    fill="none" 
                                    stroke="#334155" 
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                />
                                <motion.path 
                                    d="M 770,320 L 830,320" 
                                    fill="none" 
                                    stroke="#334155" 
                                    strokeWidth="2" 
                                    strokeDasharray="5,5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 2 }}
                                />
                            </svg>

                            {/* Column 2: Semi Finals */}
                            <div className="flex flex-col justify-center h-full gap-32 w-72 z-10 pl-16">
                                <BracketMatch 
                                    matchId="SF-01" 
                                    status="live_main"
                                    p1={{ name: 'Viper_X', score: 1, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKaov3G_N_VuvIUe3hB4xqr7rjk4mI8qtbLZGbJWZyhxia47jSyRJxJ-z48CdsF6zFSm5U6_EmaaCzVBup3XQnkFzIyYnQO9bmAzDfoQO3hM8ko4cc4_f-BO_6FS33VLo9CLMFQ-TK1ZhDCrGCyqUlqN0jmyf_0B45BGtxLqkl2MIUBg5iCGM-SpDvXNx_uUr-NcMn_KW4dEda5nbNq-ZN3WNAlso1kUMd2xI8P9malbm5Uv7Rv3MKx80w2BUetBdfGGmMtk4ICt', win: true }}
                                    p2={{ name: 'TBD', score: 0, avatar: null, code: '??', win: false }}
                                    isMain
                                />
                            </div>

                            {/* Column 3: Finals */}
                            <div className="flex flex-col justify-center h-full gap-16 w-64 z-10 pl-16 opacity-40">
                                <motion.div 
                                    whileHover={{ scale: 1.05, opacity: 1 }}
                                    className="border border-dashed border-slate-600 rounded-lg p-8 flex flex-col items-center justify-center gap-4 text-center h-48 bg-slate-900/50 hover:bg-slate-800 transition-all cursor-not-allowed"
                                >
                                    <span className="material-icons text-4xl text-slate-600">emoji_events</span>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase">Grand Final</h4>
                                        <p className="text-xs text-slate-600 mt-1">Awaiting Challenger</p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: REGISTRATION */}
                <section className="py-24 relative bg-[#1a2333] border-y border-white/5" id="register">
                    {/* Geometric shapes */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#135bec]/5 to-transparent skew-x-12 origin-top-right pointer-events-none"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            {/* Left: Info & Prize Pool */}
                            <div className="w-full lg:w-1/2 space-y-10">
                                <div>
                                    <h3 className="text-[#135bec] font-bold text-lg tracking-widest mb-2">UPCOMING EVENT</h3>
                                    <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase leading-none">Warzone<br/>Wednesdays</h2>
                                </div>
                                <div className="bg-[#101622] border border-[#135bec]/30 p-8 rounded-xl relative overflow-hidden group hover:border-[#135bec] transition-colors duration-500">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-icons text-9xl text-[#135bec]">payments</span>
                                    </div>
                                    <h4 className="text-slate-400 font-mono text-sm uppercase tracking-wider mb-2">Total Prize Pool</h4>
                                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter tabular-nums flex items-baseline gap-2">
                                        <span className="text-[#135bec]">₦</span>100,000
                                        <span className="text-sm text-slate-500 font-normal tracking-normal ml-2">Guaranteed</span>
                                    </div>
                                    <div className="mt-6 flex gap-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <span className="material-icons text-[#135bec] text-sm">groups</span> 32 Teams
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-icons text-[#135bec] text-sm">calendar_today</span> Oct 25th
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-icons text-[#135bec] text-sm">schedule</span> 20:00 WAT
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right: Join Form */}
                            <div className="w-full lg:w-1/2">
                                <div className="bg-[#101622]/80 backdrop-blur-md border border-slate-700 p-8 md:p-10 rounded-2xl shadow-2xl relative">
                                    {/* Glowing border effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#135bec] to-purple-600 rounded-2xl blur opacity-20"></div>
                                    <form className="relative space-y-6">
                                        <h3 className="text-2xl font-bold text-white mb-6 uppercase">Join the Fight</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Team Name</label>
                                                <input className="w-full bg-[#1a2333] border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="e.g. Delta Squad" type="text"/>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Captain Gamertag</label>
                                                <input className="w-full bg-[#1a2333] border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="e.g. Slayer_01" type="text"/>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                            <input className="w-full bg-[#1a2333] border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="captain@example.com" type="email"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Discord ID</label>
                                            <input className="w-full bg-[#1a2333] border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="Username#1234" type="text"/>
                                        </div>
                                        <div className="pt-4">
                                            <button className="w-full bg-[#135bec] hover:bg-[#135bec]/90 text-white font-bold py-4 rounded uppercase tracking-widest text-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_-5px_#135bec]" type="button">
                                                Deploy Squad
                                            </button>
                                            <p className="text-center text-xs text-slate-500 mt-4">By registering, you agree to the Arena Rules & Regulations.</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: LIVE STREAM (Immersive viewing) */}
                <section className="min-h-screen py-20 bg-[#101622] flex flex-col items-center justify-center relative overflow-hidden" id="stream">
                    {/* Ambient Light */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#135bec]/5 blur-3xl pointer-events-none"></div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 w-full h-[80vh] flex flex-col md:flex-row gap-4">
                        {/* Main Player Area */}
                        <div className="flex-grow bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative group">
                            {/* Placeholder for video iframe */}
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                                <img className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Cyberpunk city gaming background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2wVS3uNMEBKqkGxWX6a4hX_K37LDTBFSNDL1ZY3j0lIn5yZbaRbFzY-pFOWO7VIKnekF7XIzsdyrWRop97frzOUgBtGgA-CQYSUZlqVQwCcvkF7wmEXUSO1plO9XvnChQiAdyWvrGft-WL2aCPUuIjzNb5zYBY_yP3yERCsP4I6h0ApdpmgxoThv2lRTi7nvKxMm624cOflWJfS2r6Xb6H3WEKn1oGS6GeQt5i9vZzuvYDCcWgbqSVHa8cFb2cg8fmucilnVLsl6"/>
                                <div className="relative z-10 text-center">
                                    <button className="w-20 h-20 bg-[#135bec]/90 rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(19,91,236,0.6)] animate-pulse-glow">
                                        <span className="material-icons text-5xl text-white">play_arrow</span>
                                    </button>
                                    <p className="mt-4 text-white font-bold tracking-widest uppercase text-sm">Live from Arena 1</p>
                                </div>
                                {/* Stream Overlay UI (Mockup) */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Live</span>
                                    <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><span className="material-icons text-[10px]">visibility</span> 12.4k</span>
                                </div>
                            </div>
                        </div>
                        {/* Chat Sidebar */}
                        <div className="w-full md:w-80 lg:w-96 bg-[#1a2333] border-l border-slate-800 flex flex-col rounded-xl overflow-hidden h-64 md:h-full">
                            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                                <h4 className="text-white font-bold text-sm uppercase">Arena Chat</h4>
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            </div>
                            {/* Chat Messages */}
                            <div className="flex-grow overflow-y-auto p-4 space-y-3 text-sm scrollbar-thin scrollbar-thumb-[#135bec]/50 scrollbar-track-transparent">
                                <div className="flex gap-2">
                                    <span className="text-[#135bec] font-bold whitespace-nowrap">NeonRider:</span>
                                    <span className="text-slate-300">That headshot was insane! 🔥</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-purple-400 font-bold whitespace-nowrap">Glitch_00:</span>
                                    <span className="text-slate-300">Who is winning?</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-yellow-500 font-bold whitespace-nowrap">Mod_Bot:</span>
                                    <span className="text-slate-400 italic">Welcome to the stream! Follow the rules.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold whitespace-nowrap">SniperElite:</span>
                                    <span className="text-slate-300">Lets go Orient Games!</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#135bec] font-bold whitespace-nowrap">Viper_Fan:</span>
                                    <span className="text-slate-300">Viper is crushing it rn</span>
                                </div>
                                <div className="flex gap-2 opacity-50">
                                    <span className="text-slate-500 text-xs">System: User banned.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-pink-500 font-bold whitespace-nowrap">Sakura:</span>
                                    <span className="text-slate-300">Wait for the ult...</span>
                                </div>
                            </div>
                            {/* Chat Input */}
                            <div className="p-4 bg-slate-900/80 border-t border-slate-800">
                                <div className="relative">
                                    <input className="w-full bg-[#101622] border border-slate-700 rounded-full py-2 px-4 text-white text-sm focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none" placeholder="Send a message..." type="text"/>
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#135bec] hover:text-white transition-colors">
                                        <span className="material-icons text-sm">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: HALL OF FAME (Showcase winners) */}
                <section className="py-24 bg-gradient-to-t from-[#101622] via-[#1a2333] to-[#101622] border-t border-slate-800" id="fame">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white uppercase tracking-widest mb-4">Hall of Fame</h2>
                            <div className="h-1 w-24 bg-[#135bec] mx-auto rounded-full"></div>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Honoring the champions who conquered the arena and claimed their glory.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Card 1 */}
                            <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-48 bg-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Winner portrait holding controller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNQM9yzJn0BvEjpcduVlARWuf3PqOAIinggwM1aXKp39OpKqs8Pi_0m0JnQCPat9zJqy5SH-TCPA0s6el56hLxAgXCHUTUcunjUOfJJvA3TMe-XzY_73rejDeupKI5kofIwqRkaFE7hw_2IHZOUVFoLtsFIOy5LcZISg1zGtVJzfMVtkeT0bQqQ_O4wGnKgbaZMi9h_UsJrdacP7qxWFoDZTr7O2ICWCFCvQkb1YqvSGwHBuRBzNRqsAUZ7FVumpdAqzcPJ_OCw1ne"/>
                                    {/* Rank Badge */}
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                            <span className="material-icons text-sm">emoji_events</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Shadow_King</h3>
                                    <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 4 Champion</p>
                                    <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                        <div className="text-xs text-slate-400">Prize Won</div>
                                        <div className="text-sm font-bold text-white">₦80,000</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-48 bg-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gamer portrait with headset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3GR9OuBcYRXB8E57-9BJPXNo6rfLAQx_BPK21Oe3xlcqoQNkkKCfUj-hqU0qQpuuFrzYFfLmENIkEUBJl6qTG2rG1VWEivkGKePezBEHL39MOAmDHY2NjeaqCVibfobKe06Ib--Aqo4BCgPl4N_rBXsPlrFHj1gs7MKhc0H_mEp7JduZlf_8YSbERCQbfqNdmUobuAu9UGNn7FMmcEJHj_qO62sVEwXp07q-kydrGkxBVO--ANMPG0QnFw1m_8MDZ_dEZkvbvN4J"/>
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                        <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                            <span className="material-icons text-sm">emoji_events</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Pixel_Valkyrie</h3>
                                    <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 4 Runner-up</p>
                                    <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                        <div className="text-xs text-slate-400">Prize Won</div>
                                        <div className="text-sm font-bold text-white">₦40,000</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-48 bg-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gamer setup abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZx8HWgjXKA42EyF40SsqV6ucqsfWVk9fqLaN_TW-rIl8bsHRcmrdgFGH91BJcdD8Eswoqw8EJdS0F4pasHSGLWTAp0IwX16oyZ_C6xJhP-SLBylTbp7Fk1gqiQbkrYorWkgUEqLmKxIso5LgZ1A6FincDmRk2Fez39Q5A5a1GiZOd7jp-tvLP3AglldmPSXVPKs2Z5Tsah0FQ3q0V7ni1TcJqy3sM0Nqnm6Q8oybqUtvWG7psXbIyNAB0zRldP-ADNp891oK38LYK"/>
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                        <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                            <span className="material-icons text-sm">military_tech</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Rapid_Fire</h3>
                                    <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 3 Champion</p>
                                    <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                        <div className="text-xs text-slate-400">Prize Won</div>
                                        <div className="text-sm font-bold text-white">₦75,000</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-48 bg-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Controller close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRSSgWjLl7l4vAdFdVSK9IIELfDnuRHJSKN97JVfz1i0-nwSMcrW_sJj_NGSulQ_DKewww6PBX-x4RH1kLOf7jXWhtL1p_6g3-FwPUjPiVUnNOGGQzvcWgNNjSLTh5q9mdSc9b2d0PjKhbUYT9iQR0xW4MtS1Pk-a5jJN6bMC_zfsZXyXu1YdzifShBwPwiN58k-qaF6vfuhyEpiWkS1bBTH_eLbCYyZfYyatnQizkAWDAClQinarlYe2qTShum57fNZ2CiFW0NbRo"/>
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                        <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                            <span className="material-icons text-sm">military_tech</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Ghost_Ops</h3>
                                    <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 2 Champion</p>
                                    <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                        <div className="text-xs text-slate-400">Prize Won</div>
                                        <div className="text-sm font-bold text-white">₦60,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <footer className="bg-black py-8 border-t border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-600 text-sm">© 2023 Orient Games Arena. All systems operational.</p>
                </div>
            </footer>
        </div>
    );
};

// --- Sub-Components ---

interface BracketMatchProps {
    matchId: string;
    status: 'live' | 'ended' | 'live_main';
    p1: { name: string; score: number; avatar?: string | null; code?: string; win: boolean };
    p2: { name: string; score: number; avatar?: string | null; code?: string; win: boolean };
    isMain?: boolean;
}

const BracketMatch: React.FC<BracketMatchProps> = ({ matchId, status, p1, p2, isMain }) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(19,91,236,0.25)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`
                bg-[#1a2333] border border-slate-700 transition-all duration-300 rounded-lg overflow-hidden shadow-lg group cursor-pointer relative
                ${isMain ? 'border-2 border-[#135bec]/50 shadow-[0_0_30px_rgba(19,91,236,0.15)] scale-110' : 'opacity-80 hover:opacity-100 hover:border-[#135bec]'}
            `}
        >
            {isMain && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full animate-pulse z-20 border-2 border-[#101622]"></div>
            )}

            <div className={`flex justify-between items-center p-3 border-b ${isMain ? 'bg-[#135bec]/10 border-[#135bec]/30' : 'bg-slate-800/50 border-slate-700'}`}>
                <span className={`text-xs font-mono ${isMain ? 'text-[#135bec] font-bold' : 'text-slate-400'}`}>MATCH {matchId}</span>
                {status === 'live' || status === 'live_main' ? (
                     <span className={`text-xs font-bold flex items-center gap-1 ${isMain ? 'text-red-500' : 'text-green-500'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span> 
                        {isMain ? 'LIVE' : ''}
                     </span>
                ) : (
                    <span className="text-xs text-slate-500">ENDED</span>
                )}
            </div>

            <div className="p-4 space-y-3">
                <PlayerRow player={p1} isWinner={p1.win} />
                <PlayerRow player={p2} isWinner={p2.win} />
            </div>
        </motion.div>
    );
};

const PlayerRow: React.FC<{ player: any; isWinner: boolean }> = ({ player, isWinner }) => (
    <div className={`flex justify-between items-center ${isWinner ? 'bg-white/5 p-1 -m-1 rounded' : 'opacity-60'}`}>
        <div className="flex items-center gap-3">
            {player.avatar ? (
                <img className={`w-8 h-8 rounded object-cover ${isWinner ? 'ring-2 ring-[#135bec]' : 'grayscale'}`} alt={player.name} src={player.avatar} />
            ) : (
                <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${isWinner ? 'bg-[#135bec]/20 text-[#135bec]' : 'bg-slate-700 text-slate-400'}`}>
                    {player.code}
                </div>
            )}
            <span className={`font-bold transition-colors ${isWinner ? 'text-white' : 'text-slate-300'}`}>{player.name}</span>
        </div>
        <span className={`text-xl font-bold ${isWinner ? 'text-[#135bec]' : 'text-slate-500'}`}>{player.score}</span>
    </div>
);