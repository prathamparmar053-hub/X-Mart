export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const groceryProducts: Product[] = [
  { id: 101, name: "Organic Harvest Basket", description: "Fresh seasonal vegetables from local certified organic farms.", price: "$45.00", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" },
  { id: 102, name: "Premium Coffee Selection", description: "Single-origin Arabica beans roasted to perfection.", price: "$28.50", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800" },
  { id: 103, name: "Artisanal Spice Collection", description: "Hand-picked spices from around the world for gourmet cooking.", price: "$35.00", image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=800" },
  { id: 104, name: "Gourmet Pantry Essentials", description: "High-quality oils, vinegars, and grains for fine dining at home.", price: "$52.00", image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800" }
];

export const clothesProducts: Product[] = [
  { id: 201, name: "Executive Tailored Suit", description: "Premium wool blend suit for a sharp professional look.", price: "$899.00", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800" },
  { id: 202, name: "Professional Silk Blouse", description: "Elegant 100% silk blouse for corporate environments.", price: "$145.00", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&q=80&w=800" },
  { id: 203, name: "Modern Business Casual Set", description: "Versatile pieces for a contemporary workplace aesthetic.", price: "$220.00", image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800" },
  { id: 204, name: "Premium Leather Briefcase", description: "Handcrafted Italian leather bag for the modern executive.", price: "$350.00", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800" }
];

export const sportsProducts: Product[] = [
  { id: 301, name: "Professional Tennis Racket", description: "Carbon fiber frame for ultimate power and precision.", price: "$210.00", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800" },
  { id: 302, name: "High-Performance Treadmill", description: "Smart treadmill with interactive training programs.", price: "$1,450.00", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800" },
  { id: 303, name: "Ergonomic Yoga Kit", description: "Non-slip mat and eco-friendly support blocks.", price: "$85.00", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { id: 304, name: "Smart Fitness Tracker", description: "Advanced health monitoring with multi-sport tracking.", price: "$199.00", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800" }
];

export const electronicsProducts: Product[] = [
  { id: 401, name: "Next-Gen Laptop Pro", description: "Ultra-fast processor and stunning 16-inch display.", price: "$2,199.00", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800" },
  { id: 402, name: "Noise-Cancelling Headphones", description: "Immersive audio experience with industry-leading ANC.", price: "$349.00", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
  { id: 403, name: "Ultra-Wide 4K Monitor", description: "Perfect for productivity and creative professional work.", price: "$650.00", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800" },
  { id: 404, name: "Smart Home Ecosystem", description: "Integrated hub for controlling your entire workspace.", price: "$299.00", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" }
];
