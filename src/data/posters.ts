
export interface Poster {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const posters: Poster[] = [
  {
    id: 1,
    title: "Neon Dreams",
    price: 899,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    description: "A vibrant cyberpunk-inspired poster with electric neon colors that glow in the dark.",
    category: "Abstract",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Raj Kumar", rating: 5, comment: "Amazing quality! Looks stunning in my room.", date: "2024-01-15" },
      { id: 2, userName: "Priya Sharma", rating: 4, comment: "Great colors, exactly as shown in the picture.", date: "2024-01-10" }
    ]
  },
  {
    id: 2,
    title: "Cosmic Journey",
    price: 1299,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
    description: "Explore the mysteries of space with this stunning cosmic artwork featuring distant galaxies.",
    category: "Space",
    rating: 4.9,
    reviews: [
      { id: 3, userName: "Arjun Patel", rating: 5, comment: "Mind-blowing! Perfect for my study room.", date: "2024-01-12" },
      { id: 4, userName: "Sneha Gupta", rating: 5, comment: "Love the quality and the design is gorgeous.", date: "2024-01-08" }
    ]
  },
  {
    id: 3,
    title: "Matrix Code",
    price: 799,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=600&fit=crop",
    description: "Digital rain effect poster inspired by the iconic Matrix movie scenes.",
    category: "Tech",
    rating: 4.7,
    reviews: [
      { id: 5, userName: "Vikram Singh", rating: 5, comment: "Perfect for any tech lover!", date: "2024-01-14" },
      { id: 6, userName: "Kavya Reddy", rating: 4, comment: "Good quality print, fast delivery.", date: "2024-01-11" }
    ]
  },
  {
    id: 4,
    title: "Innovation Light",
    price: 999,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=600&fit=crop",
    description: "Minimalist poster representing the power of ideas and innovation with elegant lighting.",
    category: "Minimalist",
    rating: 4.6,
    reviews: [
      { id: 7, userName: "Rohit Agarwal", rating: 5, comment: "Simple yet powerful design. Love it!", date: "2024-01-13" },
      { id: 8, userName: "Anita Verma", rating: 4, comment: "Nice addition to my office space.", date: "2024-01-09" }
    ]
  },
  {
    id: 5,
    title: "Forest Mystique",
    price: 1199,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    description: "Enchanting forest scene with mysterious golden lights filtering through ancient trees.",
    category: "Nature",
    rating: 4.8,
    reviews: [
      { id: 9, userName: "Deepak Joshi", rating: 5, comment: "Brings nature indoors. Absolutely beautiful!", date: "2024-01-16" },
      { id: 10, userName: "Meera Nair", rating: 5, comment: "The lighting effect is stunning!", date: "2024-01-07" }
    ]
  },
  {
    id: 6,
    title: "Urban Waves",
    price: 849,
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=600&fit=crop",
    description: "Modern architectural poster featuring dynamic wave patterns in urban settings.",
    category: "Architecture",
    rating: 4.5,
    reviews: [
      { id: 11, userName: "Sameer Khan", rating: 4, comment: "Unique design, good quality material.", date: "2024-01-15" },
      { id: 12, userName: "Ritu Bansal", rating: 5, comment: "Perfect for modern interiors!", date: "2024-01-12" }
    ]
  },
  {
    id: 7,
    title: "Retro Sunset",
    price: 749,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    description: "Vintage-style poster with warm sunset colors and retro geometric patterns.",
    category: "Retro",
    rating: 4.7,
    reviews: [
      { id: 13, userName: "Anil Kumar", rating: 5, comment: "Takes me back to the 80s! Love the vibe.", date: "2024-01-14" },
      { id: 14, userName: "Pooja Mehta", rating: 4, comment: "Great colors, matches my room perfectly.", date: "2024-01-10" }
    ]
  },
  {
    id: 8,
    title: "Ocean Dreams",
    price: 1099,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop",
    description: "Serene ocean waves poster capturing the calming essence of deep blue waters.",
    category: "Nature",
    rating: 4.9,
    reviews: [
      { id: 15, userName: "Sanjay Tripathi", rating: 5, comment: "So peaceful and calming. Perfect for bedroom.", date: "2024-01-13" },
      { id: 16, userName: "Neha Sharma", rating: 5, comment: "Excellent print quality, vibrant colors!", date: "2024-01-11" }
    ]
  },
  {
    id: 9,
    title: "Geometric Harmony",
    price: 899,
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=400&h=600&fit=crop",
    description: "Abstract geometric patterns creating a harmonious blend of shapes and colors.",
    category: "Abstract",
    rating: 4.4,
    reviews: [
      { id: 17, userName: "Rahul Gupta", rating: 4, comment: "Interesting design, good for modern spaces.", date: "2024-01-16" },
      { id: 18, userName: "Sunita Yadav", rating: 5, comment: "Love the pattern! Very contemporary.", date: "2024-01-08" }
    ]
  },
  {
    id: 10,
    title: "Mountain Peak",
    price: 1399,
    image: "https://images.unsplash.com/photo-1464822759844-d150baec3871?w=400&h=600&fit=crop",
    description: "Majestic mountain landscape with snow-capped peaks under dramatic skies.",
    category: "Landscape",
    rating: 4.8,
    reviews: [
      { id: 19, userName: "Manish Agarwal", rating: 5, comment: "Breathtaking view! Feels like I'm there.", date: "2024-01-15" },
      { id: 20, userName: "Shruti Kapoor", rating: 4, comment: "Beautiful landscape, great for living room.", date: "2024-01-09" }
    ]
  },
  {
    id: 11,
    title: "City Nights",
    price: 949,
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop",
    description: "Urban skyline at night with glowing city lights and reflections.",
    category: "Urban",
    rating: 4.6,
    reviews: [
      { id: 21, userName: "Karan Malhotra", rating: 5, comment: "Love the night city vibe!", date: "2024-01-14" },
      { id: 22, userName: "Divya Singh", rating: 4, comment: "Great for urban themed rooms.", date: "2024-01-12" }
    ]
  },
  {
    id: 12,
    title: "Floral Bloom",
    price: 699,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=600&fit=crop",
    description: "Delicate floral design with blooming flowers in soft pastel colors.",
    category: "Floral",
    rating: 4.7,
    reviews: [
      { id: 23, userName: "Priyanka Jain", rating: 5, comment: "So elegant and feminine! Perfect!", date: "2024-01-13" },
      { id: 24, userName: "Amit Saxena", rating: 4, comment: "Nice gift for my wife, she loved it.", date: "2024-01-10" }
    ]
  },
  {
    id: 13,
    title: "Abstract Flow",
    price: 799,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
    description: "Fluid abstract design with flowing colors that create a sense of movement.",
    category: "Abstract",
    rating: 4.5,
    reviews: [
      { id: 25, userName: "Sunil Chopra", rating: 4, comment: "Unique design, goes well with modern decor.", date: "2024-01-16" },
      { id: 26, userName: "Rekha Gupta", rating: 5, comment: "Beautiful flowing patterns!", date: "2024-01-07" }
    ]
  },
  {
    id: 14,
    title: "Vintage Car",
    price: 1199,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=600&fit=crop",
    description: "Classic vintage car poster for automotive enthusiasts and retro lovers.",
    category: "Vintage",
    rating: 4.8,
    reviews: [
      { id: 27, userName: "Ajay Kumar", rating: 5, comment: "Perfect for my garage! Love classic cars.", date: "2024-01-15" },
      { id: 28, userName: "Geeta Patel", rating: 4, comment: "Nostalgic and well-made.", date: "2024-01-11" }
    ]
  },
  {
    id: 15,
    title: "Space Explorer",
    price: 1349,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
    description: "Astronaut exploring distant planets in this cosmic adventure poster.",
    category: "Space",
    rating: 4.9,
    reviews: [
      { id: 29, userName: "Rohit Sharma", rating: 5, comment: "Amazing space theme! My kid loves it.", date: "2024-01-14" },
      { id: 30, userName: "Sita Devi", rating: 5, comment: "Inspiring and beautifully designed.", date: "2024-01-08" }
    ]
  },
  {
    id: 16,
    title: "Minimalist Lines",
    price: 599,
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=400&h=600&fit=crop",
    description: "Clean, simple lines in a minimalist design perfect for modern spaces.",
    category: "Minimalist",
    rating: 4.4,
    reviews: [
      { id: 31, userName: "Vijay Gupta", rating: 4, comment: "Simple and elegant, just what I wanted.", date: "2024-01-13" },
      { id: 32, userName: "Kamlesh Singh", rating: 4, comment: "Goes well with minimal decor.", date: "2024-01-09" }
    ]
  },
  {
    id: 17,
    title: "Tropical Paradise",
    price: 1099,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=600&fit=crop",
    description: "Vibrant tropical scene with palm trees and crystal clear waters.",
    category: "Nature",
    rating: 4.7,
    reviews: [
      { id: 33, userName: "Manoj Tiwari", rating: 5, comment: "Feels like vacation every day!", date: "2024-01-16" },
      { id: 34, userName: "Lalita Kumari", rating: 4, comment: "Bright and cheerful, perfect for summer.", date: "2024-01-12" }
    ]
  },
  {
    id: 18,
    title: "Art Deco Style",
    price: 899,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description: "Elegant Art Deco inspired design with geometric patterns and gold accents.",
    category: "Vintage",
    rating: 4.6,
    reviews: [
      { id: 35, userName: "Raj Mishra", rating: 5, comment: "Classy and sophisticated design!", date: "2024-01-15" },
      { id: 36, userName: "Mamta Agarwal", rating: 4, comment: "Love the vintage appeal.", date: "2024-01-10" }
    ]
  },
  {
    id: 19,
    title: "Wildlife Safari",
    price: 1249,
    image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ed?w=400&h=600&fit=crop",
    description: "Majestic wildlife photography featuring animals in their natural habitat.",
    category: "Wildlife",
    rating: 4.8,
    reviews: [
      { id: 37, userName: "Prakash Jha", rating: 5, comment: "Stunning wildlife photography!", date: "2024-01-14" },
      { id: 38, userName: "Sunanda Rai", rating: 5, comment: "Beautiful animals, great quality print.", date: "2024-01-11" }
    ]
  },
  {
    id: 20,
    title: "Music Vibes",
    price: 749,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    description: "Musical instruments and notes creating an artistic composition for music lovers.",
    category: "Music",
    rating: 4.5,
    reviews: [
      { id: 39, userName: "Rakesh Yadav", rating: 4, comment: "Perfect for my music room!", date: "2024-01-13" },
      { id: 40, userName: "Alka Sinha", rating: 5, comment: "Love music and this poster captures it perfectly.", date: "2024-01-07" }
    ]
  }
];
