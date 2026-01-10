import video_banner from './video_banner.mp4';
import people from './people.png';
import people_org from './people-org.png';
import car from './car.png';
import car_org from './car-org.png';
import product_org from './product-org.png';
import product from './product.png';

export const assets = {
    video_banner,
    people,
    people_org,
    car,
    car_org,
    product_org,
    product,
};

export const plans = [
    {
        id: "basic",
        name: "Basic Package",
        price: 99,
        credits: 50,
        description: "Perfect for small projects and occasional exports",
        popular: false
    },
    {
        id: "premium",
        name: "Premium Package",
        price: 249,
        credits: 150,
        description: "Great for regular users and medium-sized projects",
        popular: true
    },
    {
        id: "ultimate",
        name: "Ultimate Package",
        price: 499,
        credits: 400,
        description: "Ideal for power users and large-scale exports",
        popular: false
    }
];