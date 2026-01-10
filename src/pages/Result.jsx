import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import {useNavigate } from "react-router-dom";

const Result = () => {
    
    const {image, resultImage} = useContext(AppContext);
    const navigate = useNavigate();
    return(
        <div className="mx-4 my-3 lg:mx-44 mt-24 min-h-[75vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-400 mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 text-xs">01</span>
                        ORIGINAL IMAGE
                    </h3>
                    <img src={image ? URL.createObjectURL(image) : ""} alt="img_people" className="rounded-md w-full object-cover" />
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2 text-xs">02</span>
                        BACKGROUND REMOVED
                    </h3>
                    <div className="rounded-md border border-gray-300 h-full bg-layer relative overflow-hidden">
                        <img src={resultImage ? resultImage : ""} alt="img" className="w-full object-cover" />
                        {!resultImage && image &&(
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="border-4 border-indigo-600 rounded-full h-12 w-12 border-t-transparent animate-spin">
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {resultImage && (
                <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
                    <button 
                        onClick={() => navigate("/")}
                        className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-10 rounded-2xl transition-all border border-slate-200 shadow-sm"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Try Another Image</span>
                    </button>
                    <a href={resultImage} download className="cursor-pointer py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg hover: from-purple-600 hover: to-indigo-600 transition-300 ease-in-out transform hover:scale-105">
                        Download Image
                    </a>
                </div>
            )}
        </div>
    )
}
export default Result;