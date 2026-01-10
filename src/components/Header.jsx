import { useState, useContext } from "react";
import { Sparkles, Upload } from "lucide-react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext"; // Adjust the import path as needed

const Header = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const { removeBg } = useContext(AppContext); // Get removeBg from context

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log("Selected file:", file.name);
            
            // Call removeBg function from context
            if (removeBg) {
                removeBg(file);
                // You can also add loading state or success message here
            } else {
                alert(`File selected: ${file.name}`);
                console.log("removeBg function not found in context");
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            console.log("Dropped file:", file.name);
            
            // Call removeBg function from context
            if (removeBg) {
                removeBg(file);
            } else {
                alert(`File dropped: ${file.name}`);
                console.log("removeBg function not found in context");
            }
        } else {
            alert("Please drop an image file only");
        }
    };

    return (
        <div 
            className="pt-40"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-48 items-center">
                    {/* Left Side: Text Content */}
                    <div className="order-2 md:order-1">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-2 shadow-sm">
                                <Sparkles size={12} className="fill-blue-200" />
                                <span>100% Secured</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-2 leading-[1.1]">
                                Remove Background
                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 pb-2">
                                    from Image
                                </span>
                            </h1>

                            <p className="text-sm md:text-lg text-slate-600 mb-6 leading-relaxed max-w-lg">
                                Drag and drop your file to get a transparent background in 5 seconds. No clicks or complex software needed.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                                
                                {/* Styled upload button */}
                                <label
                                    htmlFor="file-upload"
                                    className="group relative px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
                                >
                                    <Upload className="w-5 h-5 group-hover:animate-bounce" />
                                    <span>
                                        {selectedFile ? `Uploaded: ${selectedFile.name.substring(0, 10)}...` : "Upload Image"}
                                    </span>
                                </label>
                            </div>

                            {/* Drag and drop indicator */}
                            {isDragging && (
                                <div className="fixed inset-0 bg-blue-500/10 backdrop-blur-sm z-50 flex items-center justify-center">
                                    <div className="bg-white p-8 rounded-2xl shadow-2xl border-4 border-dashed border-blue-500">
                                        <div className="text-center">
                                            <Upload className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                                            <p className="text-xl font-bold text-slate-800">Drop your image here</p>
                                            <p className="text-slate-600 mt-2">Release to upload</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Selected file info */}
                            {selectedFile && (
                                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Upload className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-green-800">{selectedFile.name}</p>
                                            <p className="text-sm text-green-600">
                                                {(selectedFile.size / 1024).toFixed(2)} KB • Ready to process
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400 font-medium">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <p>Trusted by designers</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Video */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                            <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;