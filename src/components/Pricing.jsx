import { Zap, ChevronRight } from 'lucide-react';
import { plans } from '../assets/assets';
import { useAuth, useClerk } from '@clerk/clerk-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import placeOrder from '../service/OrderService';

const Pricing = () => {

    const {isSignedIn, getToken} = useAuth();
    const {openSignIn} = useClerk();
    const {loadUserCredits, backendUrl} = useContext(AppContext);

    const handleOrder = (planId) => {
        if(!isSignedIn){
            return openSignIn();
        }
        placeOrder({
            planId, 
            getToken, 
            onSuccess: () => {
                loadUserCredits();
            }, 
            backendUrl
        });
    }

    const gradientAnimationStyle = {
        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
        backgroundSize: "300% 300%",
        animation: "gradient 2s ease infinite"
    };

    return (
        <div className="py-10 md:px-20 lg:px-20">
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>

            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Choose Your Perfect Package
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-black-300">
                        Select from our carefully curated photography packages designed to meet your specific needs and budget.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="relative h-full"
                        >
                            {plan.popular && (
                                <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-600 to-indigo-600 blur-2xl opacity-15 transform scale-95 translate-y-8 rounded-[3rem]"></div>
                            )}
                            <div className={`h-full flex flex-col relative rounded-3xl ${plan.popular
                                    ? 'bg-linear-to-br from-blue-400 via-indigo-500 to-cyan-400 p-0.5 shadow-2xl shadow-blue-900/10'
                                    : 'bg-white border border-slate-200 shadow-sm'
                                }`}>
                                <div className={`flex-1 flex flex-col bg-white p-8 ${plan.popular ? 'rounded-[22px]' : 'rounded-3xl'}`}>
                                    {plan.popular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg shadow-blue-600/30 uppercase flex items-center gap-1.5 ring-4 ring-white">
                                                <Zap size={12} className="fill-current" /> Most Popular
                                            </div>
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-600' : 'text-slate-900'}`}>
                                            {plan.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed h-10">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="mb-8 flex items-baseline">
                                        <div className='text-center'>
                                             <span className="text-5xl font-extrabold text-slate-900 tracking-tight">₹{plan.price}</span>
                                        </div>
                                    </div>
                                    <div className={`mb-8 rounded-2xl p-4 border ${plan.popular ? 'bg-blue-50/80 border-blue-100' : 'bg-slate-50/50 border-slate-100'}`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2.5 rounded-xl ${plan.popular ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 border border-slate-200 shadow-sm'}`}>
                                                <Zap className="w-5 h-5" fill={plan.popular ? "currentColor" : "none"} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Monthly Limit</p>
                                                <p className="text-lg font-bold text-slate-900 leading-none">{plan.credits.toLocaleString()} <span className="text-sm font-normal text-slate-500">credits</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <p className="text-slate-700 text-sm">
                                            <span className="font-semibold">{plan.credits} credits</span> included for all your export needs
                                        </p>
                                    </div>
                                    {plan.popular ? (
                                        <div className="group relative">
                                            <div
                                                style={gradientAnimationStyle}
                                                className="absolute -inset-0.5 rounded-xl opacity-75 blur-[1px] group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                                            ></div>
                                            <button 
                                                className="relative w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl leading-none text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-colors" 
                                                onClick={() => handleOrder(plan.id)}
                                            >
                                                Choose {plan.name.split(" ")[0]} Plan
                                                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button 
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 rounded-xl leading-none text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                                            onClick={() => handleOrder(plan.id)} // Added onClick handler
                                        >
                                            Choose {plan.name.split(" ")[0]} Plan
                                            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;