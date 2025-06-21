
export interface Note {
  id: number;
  title: string;
  subject: string;
  category: "jee" | "neet";
  price: number;
  originalPrice: number;
  author: string;
  rating: number;
  totalReviews: number;
  description: string;
  topics: string[];
  pages: number;
  difficulty: "Easy" | "Medium" | "Hard";
  preview: string;
  image: string;
  reviews: {
    id: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const notes: Note[] = [
  {
    id: 1,
    title: "Organic Chemistry Master Notes",
    subject: "Chemistry",
    category: "jee",
    price: 299,
    originalPrice: 499,
    author: "Dr. Rajesh Kumar",
    rating: 4.8,
    totalReviews: 156,
    description: "Comprehensive organic chemistry notes covering all JEE Advanced topics with reaction mechanisms and problem-solving strategies.",
    topics: ["Hydrocarbons", "Haloalkanes", "Alcohols", "Aldehydes", "Carboxylic Acids"],
    pages: 180,
    difficulty: "Hard",
    preview: "Chapter 1: Introduction to Organic Chemistry\n\nOrganic chemistry is the study of carbon compounds. Carbon has the unique ability to form four covalent bonds, leading to an enormous variety of compounds...",
    image: "/placeholder.svg",
    reviews: [
      {
        id: 1,
        userName: "Arjun Singh",
        rating: 5,
        comment: "Excellent notes! Helped me crack JEE Advanced. The reaction mechanisms are explained very clearly.",
        date: "2024-01-15"
      },
      {
        id: 2,
        userName: "Priya Sharma",
        rating: 4,
        comment: "Good content but could use more practice problems.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: 2,
    title: "Physics Mechanics Complete Guide",
    subject: "Physics",
    category: "jee",
    price: 399,
    originalPrice: 599,
    author: "Prof. Amit Verma",
    rating: 4.9,
    totalReviews: 203,
    description: "Master mechanics for JEE with detailed derivations, problem-solving techniques, and conceptual clarity.",
    topics: ["Kinematics", "Newton's Laws", "Work Energy", "Rotational Motion", "Gravitation"],
    pages: 220,
    difficulty: "Medium",
    preview: "Chapter 1: Motion in One Dimension\n\nKinematics deals with the description of motion without considering the forces that cause the motion...",
    image: "/placeholder.svg",
    reviews: [
      {
        id: 1,
        userName: "Rohit Kumar",
        rating: 5,
        comment: "Best physics notes I've ever used. The derivations are crystal clear.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: 3,
    title: "Human Physiology NEET Notes",
    subject: "Biology",
    category: "neet",
    price: 249,
    originalPrice: 399,
    author: "Dr. Sunita Rao",
    rating: 4.7,
    totalReviews: 189,
    description: "Complete human physiology notes for NEET with diagrams, flowcharts, and mnemonics for easy memorization.",
    topics: ["Digestive System", "Respiratory System", "Circulatory System", "Nervous System", "Endocrine System"],
    pages: 150,
    difficulty: "Medium",
    preview: "Chapter 1: Digestive System\n\nThe digestive system is responsible for breaking down food into nutrients that can be absorbed by the body...",
    image: "/placeholder.svg",
    reviews: [
      {
        id: 1,
        userName: "Sneha Patel",
        rating: 5,
        comment: "Amazing notes with beautiful diagrams. Helped me score 360+ in NEET.",
        date: "2024-01-18"
      }
    ]
  },
  {
    id: 4,
    title: "Calculus for JEE Advanced",
    subject: "Mathematics",
    category: "jee",
    price: 349,
    originalPrice: 549,
    author: "Prof. Vikash Gupta",
    rating: 4.6,
    totalReviews: 142,
    description: "Advanced calculus concepts with step-by-step solutions and shortcuts for JEE preparation.",
    topics: ["Limits", "Derivatives", "Integration", "Differential Equations", "Applications"],
    pages: 200,
    difficulty: "Hard",
    preview: "Chapter 1: Limits and Continuity\n\nA limit describes the behavior of a function as its input approaches a particular value...",
    image: "/placeholder.svg",
    reviews: []
  },
  {
    id: 5,
    title: "Genetics and Evolution NEET",
    subject: "Biology",
    category: "neet",
    price: 199,
    originalPrice: 299,
    author: "Dr. Meera Singh",
    rating: 4.5,
    totalReviews: 98,
    description: "Comprehensive genetics and evolution notes with family trees, genetic problems, and evolutionary concepts.",
    topics: ["Mendel's Laws", "Chromosomal Theory", "Molecular Basis", "Evolution", "Origin of Life"],
    pages: 120,
    difficulty: "Medium",
    preview: "Chapter 1: Principles of Inheritance\n\nGregor Mendel's experiments with garden peas laid the foundation for our understanding of heredity...",
    image: "/placeholder.svg",
    reviews: []
  },
  {
    id: 6,
    title: "Thermodynamics JEE Master",
    subject: "Physics",
    category: "jee",
    price: 279,
    originalPrice: 449,
    author: "Dr. Kiran Bedi",
    rating: 4.8,
    totalReviews: 167,
    description: "Complete thermodynamics for JEE with laws, processes, and real-world applications.",
    topics: ["First Law", "Second Law", "Entropy", "Heat Engines", "Refrigerators"],
    pages: 160,
    difficulty: "Hard",
    preview: "Chapter 1: Introduction to Thermodynamics\n\nThermodynamics is the branch of physics that deals with heat, work, and energy...",
    image: "/placeholder.svg",
    reviews: []
  },
  {
    id: 7,
    title: "Plant Physiology NEET Complete",
    subject: "Biology",
    category: "neet",
    price: 229,
    originalPrice: 349,
    author: "Prof. Anita Sharma",
    rating: 4.4,
    totalReviews: 123,
    description: "Detailed plant physiology notes with diagrams and experimental setups for NEET preparation.",
    topics: ["Photosynthesis", "Respiration", "Transport", "Growth", "Reproduction"],
    pages: 140,
    difficulty: "Easy",
    preview: "Chapter 1: Photosynthesis\n\nPhotosynthesis is the process by which plants convert light energy into chemical energy...",
    image: "/placeholder.svg",
    reviews: []
  },
  {
    id: 8,
    title: "Coordinate Geometry JEE",
    subject: "Mathematics",
    category: "jee",
    price: 319,
    originalPrice: 499,
    author: "Prof. Rajat Mittal",
    rating: 4.7,
    totalReviews: 134,
    description: "Master coordinate geometry with analytical methods and geometric interpretations for JEE.",
    topics: ["Straight Lines", "Circles", "Parabola", "Ellipse", "Hyperbola"],
    pages: 190,
    difficulty: "Medium",
    preview: "Chapter 1: Coordinate System\n\nThe coordinate system allows us to represent geometric figures algebraically...",
    image: "/placeholder.svg",
    reviews: []
  }
];
