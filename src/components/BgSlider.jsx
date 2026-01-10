import { useState } from "react";
import { assets } from "../assets/assets";
import {
    Users,
    ShoppingBag,
    Car
} from "lucide-react";

const categories = [
    { id: "people", label: "People", icon: <Users size={18} /> },
    { id: "products", label: "Products", icon: <ShoppingBag size={18} /> },
    { id: "cars", label: "Cars", icon: <Car size={18} /> },
];

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [activeCategory, setActiveCategory] = useState("people");

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    }

    const getCategoryImage = (categoryId) => {

        switch (categoryId) {
            case "people":
                return { original: assets.people_org, processed: assets.people };
            case "products":
                return { original: assets.product_org, processed: assets.product };
            case "cars":
                return { original: assets.car_org, processed: assets.car };
            default:
                return { original: assets.people_org, processed: assets.people };
        }
    }

    const categoryImages = getCategoryImage(activeCategory);

    return (
        <div className="mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Stunning Quality
            </h2>
            <div className="flex justify-center w-full mb-8">
                <div className="inline-flex items-center p-1.5 bg-gray-100 rounded-xl sm:rounded-full overflow-x-auto max-w-full no-scrollbar">
                    {categories.map((category) => {
                        const isSelected = activeCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`
                                    flex items-center gap-2 px-4 py-2.5 rounded-lg sm:rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                                    ${isSelected
                                        ? 'bg-white text-primary-700 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                                    }
                                `}
                            >
                                <span className={isSelected ? 'text-primary-600' : 'text-gray-400'}>
                                    {category.icon}
                                </span>
                                {category.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg">
                <img
                    src={categoryImages.original}
                    alt="original image"
                    style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
                />
                <img
                    src={categoryImages.processed}
                    alt="removed bg image"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    className="absolute top-0 left-0 w-full h-full"
                />

                <input
                    type="range"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
                    min={0}
                    max={100}
                    onChange={handleSliderChange}
                    value={sliderPosition}
                />
            </div>
        </div>
    )
}

export default BgSlider;