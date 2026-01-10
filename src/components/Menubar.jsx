import { useState, useEffect, useContext } from "react";
import { Eraser, Menu, X, ChevronRight, Coins } from "lucide-react";
import { SignedIn, SignedOut, useAuth, useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Menubar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    const {credit} = useContext(AppContext);


    const openRegister =() => {
        openSignUp({});
    }
    const openLogIn = () => {
        openSignIn({});
    } 


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'API', href: '#' },
    ];

    // Inline style for gradient animation
    const gradientAnimationStyle = {
        background: 'linear-gradient(90deg, #2563eb, #22d3ee, #2563eb)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 3s ease infinite',
    };

    return (
        <>
            {/* Add the animation keyframes as a style tag */}
            <style jsx>{`
                @keyframes gradientMove {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
            `}</style>
            
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                isScrolled
                    ? 'bg-white/80 backdrop-blur-lg border-slate-200 shadow-sm py-3'
                    : 'bg-transparent border-transparent py-5'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        
                        {/* Left Side: Logo */}
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                                <Eraser size={20} className="relative z-10" />
                                {/* Subtle glow effect behind logo */}
                                <div className="absolute inset-0 bg-blue-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                                remove<span className="text-blue-600">bg</span>
                            </span>
                        </div>

                        {/* Center: Desktop Nav Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>

                    
                        <div className="hidden md:flex items-center gap-4">
                            <SignedOut>
                                <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2" onClick={openLogIn}>
                                    Log in
                                </button>
                                
                                <div className="group relative">
                                    <div 
                                        style={gradientAnimationStyle}
                                        className="absolute -inset-0.5 rounded-full opacity-75 blur-[1px] group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                                    ></div>
                                    <button className="relative flex items-center gap-2 px-6 py-2.5 bg-white rounded-full leading-none text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-colors" onClick={openRegister}>
                                        Sign up
                                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1 5 sm:py-2 5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                                        <Coins size={14} className="text-blue-600" />
                                        <p className="text-xs sm:text-sm font-medium text-gray-600">
                                            Credits: {credit}
                                        </p>
                                    </button>
                                    
                                    <p className="text-gray-600 max-sm:hidden">
                                        Hi, {user?.fullName}
                                    </p>
                                </div>
                                <UserButton afterSignOutUrl="/"/>
                            </SignedIn>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="px-4 pt-4 pb-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3 px-4">
                           <SignedOut>
                                 <button className="w-full text-center py-2.5 text-slate-600 font-medium hover:text-blue-600 transition-colors" onClick={openLogIn}>
                                    Log in
                                </button>
                                
                                <div className="group relative w-full flex justify-center">
                                    <div 
                                        style={gradientAnimationStyle}
                                        className="absolute -inset-0.5 rounded-lg opacity-75 blur-[1px]"
                                    ></div>
                                    <button className="relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg leading-none text-slate-900 font-bold hover:bg-slate-50 transition-colors" onClick={openRegister}>
                                        Sign up free
                                    </button>
                                </div>
                           </SignedOut>
                           <SignedIn>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <UserButton afterSignOutUrl="/"/>
                                    <button className="flex items-center gap-2 bg-blue-100 px-3 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                                        <Coins size={14} className="text-blue-600" />
                                        <p className="text-xs sm:text-sm font-medium text-gray-600">
                                            Credits: {credit}
                                        </p>
                                    </button>
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menubar;