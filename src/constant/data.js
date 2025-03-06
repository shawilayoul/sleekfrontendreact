import { images } from "../assets/images";
/****home slide data******/

export const homeSlideData = [
  {
    id: 1,
    title: "Casual Comfort: The Classic T-Shirt",
    description:
      "Experience ultimate comfort and effortless style with our premium cotton t-shirts, perfect for any occasion. Shop now and enjoy free shipping on your first order!",
    imgageLeft: images.mencloth3,
    imageRight: images.mencloth3,
    cta: "Shop Now", // Add a call-to-action
  },
  {
    id: 2,
    title: "Elegant Timekeeping: The Modern Watch",
    description:
      "Stay on time in style with our sleek and modern watches—perfect for both casual and formal occasions. Limited stock available—grab yours before it's gone!",
    imgageLeft: images.watch1,
    imageRight: images.watch2,
    cta: "Get Yours", // Add urgency
  },
  {
    id: 3,
    title: "Chic & Comfortable: Women's Shoes",
    description:
      "Step out in style with our trendy and comfortable women's shoes—designed for elegance and everyday wear. Upgrade your footwear collection today!",
    imgageLeft: images.woemenShoes1,
    imageRight: images.woemenShoes1,
    cta: "Buy Now", // Encourage action
  },
  {
    id: 4,
    title: "Functional Fashion: The Stylish Bag",
    description:
      "Carry your essentials in style with our versatile and chic bags—perfect for work, travel, or casual outings. Discover the perfect bag for your lifestyle.",
    imgageLeft: images.bag1,
    imageRight: images.bag2,
    cta: "Discover More", // Invite exploration
  },
  {
    id: 5,
    title: "Sharp & Stylish: Kids's Formal Wear",
    description:
      "Elevate your wardrobe with our premium men's formal wear—crafted for sophistication and confidence. Shop now and enjoy exclusive discounts!",
    imgageLeft: images.kid1,
    imageRight: images.kid1,
    cta: "Shop Exclusive", // Highlight exclusivity
  },
];

/****shop slide data******/

export const shopSlideDAta = [
  {
    id: 1,
    title: "Timeless Elegance: The Modern Watch",
    description:
      "Stay on time in style with our sleek and modern watches—perfect for both casual and formal occasions. Elevate your look with this timeless accessory.",
    image: images.watch2,
  },
  {
    id: 2,
    title: "Chic and Stylish: The Trendy Hat",
    description:
      "Top off your outfit with our trendy hat collection. Designed for both fashion and function, these hats add a touch of sophistication to any look.",
    image: images.hat,
  },
  {
    id: 3,
    title: "Sharp and Versatile: Men's Casual Wear",
    description:
      "Upgrade your casual wardrobe with our modern men's clothing. Perfect for everyday wear, these pieces combine comfort and style effortlessly.",
    image: images.mencloth3,
  },
  {
    id: 4,
    title: "Elegant and Comfortable: Women's Shoes",
    description:
      "Step out in style with our chic women's shoes. Designed for elegance and comfort, these shoes are perfect for any occasion.",
    image: images.woemenShoes1,
  },
];
/*** blog post data ***/

export const blogPost = [
  {
    id: 1,
    image: images.bolg1,
    date: "20/10/2024",
    title: "Exploring the Latest Fashion Trends for Fall 2024",
    author: "John",
    description:
      "As the weather cools down, fall fashion is making its comeback with bold, warm colors and layered outfits. In this post, we explore the top trends that are shaping the season and how to wear them to make a statement. From cozy knitwear to stylish outerwear, discover how to stay stylish this fall.",
  },
  {
    id: 2,
    image: images.bolg2,
    date: "20/10/2024",
    title: "How to Build a Capsule Wardrobe: A Guide for Minimalists",
    author: "John",
    description:
      "A capsule wardrobe is a minimalist approach to fashion, where you only keep essential, versatile items that can be mixed and matched effortlessly. In this post, we’ll guide you through the process of building a capsule wardrobe and share tips on creating timeless looks with fewer pieces.",
  },
  {
    id: 3,
    image: images.bolg3,
    date: "20/10/2024",
    title:
      "The Art of Accessorizing: Elevating Your Outfits with Simple Pieces",
    author: "John",
    description:
      "Accessories can make or break an outfit. In this post, we dive into the art of accessorizing, showcasing how the right accessories can elevate even the simplest of outfits. Whether it’s a statement necklace or a stylish scarf, discover how to add the perfect finishing touch to your wardrobe.",
  },
  {
    id: 4,
    image: images.bolg4,
    date: "20/10/2024",
    title: "Sustainable Fashion: How to Shop Ethically in 2024",
    author: "John",
    description:
      "Sustainable fashion is more than just a trend; it’s a movement towards reducing waste and supporting ethical brands. In this post, we discuss the importance of sustainable fashion and share practical tips on how to shop responsibly without compromising on style. Learn how to make a positive impact through your clothing choices.",
  },
];


export const products = [
  {_id:1,
    productName: "Classic Cotton T-Shirt",
    image: images.mencloth3,
    description: "Soft and comfortable cotton t-shirt for men.",
    price: 19.99,
    quantity: 50,
    category: "Clothing",
    subcategory: "men",
  },
  {
    _id:2,
    productName: "Elegant Women's Dress",
    image: images.mencloth2,
    description: "Stylish and elegant dress for women.",
    price: 49.99,
    quantity: 30,
    category: "Clothing",
    subcategory: "women",
  },
  {
    _id:3,
    productName: "Kids' Sneakers",
    image: images.blazer2,
    description: "Comfortable and durable sneakers for kids.",
    price: 29.99,
    quantity: 40,
    category: "Footwear",
    subcategory: "kids",
  },
  {
    _id:4,
    productName: "Men's Leather Jacket",
    image: images.mencloth4,
    description: "Premium leather jacket for men.",
    price: 99.99,
    quantity: 20,
    category: "Clothing",
    subcategory: "men",
  },
  {
    _id:5,
    productName: "Women's Handbag",
    image: images.bag1,
    description: "Chic and functional handbag for women.",
    price: 59.99,
    quantity: 25,
    category: "Accessories",
    subcategory: "women",
  },
  {
    _id:6,
    productName: "Kids' Backpack",
    image: images.bag2,
    description: "Colorful and spacious backpack for kids.",
    price: 39.99,
    quantity: 35,
    category: "Accessories",
    subcategory: "kids",
  },
  {
    _id:7,
    productName: "Men's Running Shoes",
    image: images.air2,
    description: "Lightweight and breathable running shoes for men.",
    price: 79.99,
    quantity: 15,
    category: "Footwear",
    subcategory: "men",
  },
  {
    _id:8,
    productName: "Women's Sunglasses",
    image: images.woemenShoes1,
    description: "Trendy sunglasses for women.",
    price: 29.99,
    quantity: 50,
    category: "Accessories",
    subcategory: "women",
  },
  {
    _id:9,
    productName: "Kids' T-Shirt",
    image: images.kid3,
    description: "Fun and colorful t-shirt for kids.",
    price: 14.99,
    quantity: 60,
    category: "Clothing",
    subcategory: "kids",
  },
  {
    _id:10,
    productName: "Men's Watch",
    image: images.watch1,
    description: "Sleek and modern watch for men.",
    price: 89.99,
    quantity: 10,
    category: "Accessories",
    subcategory: "men",
  },
];