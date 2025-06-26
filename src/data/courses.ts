
export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "programming" | "mathematics" | "science" | "business";
  image: string;
  description: string;
  whatYouWillLearn: string[];
  curriculum: {
    section: string;
    lessons: { title: string; duration: string; preview?: boolean }[];
  }[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 1250,
    duration: "42 hours",
    level: "Intermediate",
    category: "programming",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    description: "Master React.js from basics to advanced concepts. Build real-world projects and become a React expert.",
    whatYouWillLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks and Context API",
      "Implement state management with Redux",
      "Create responsive UIs with modern CSS"
    ],
    curriculum: [
      {
        section: "React Fundamentals",
        lessons: [
          { title: "Introduction to React", duration: "15:30", preview: true },
          { title: "Setting up Development Environment", duration: "12:45", preview: true },
          { title: "Understanding JSX", duration: "18:20" },
          { title: "Components and Props", duration: "22:15" }
        ]
      },
      {
        section: "Advanced React Concepts",
        lessons: [
          { title: "React Hooks Deep Dive", duration: "25:40" },
          { title: "Context API", duration: "20:15" },
          { title: "Performance Optimization", duration: "18:30" }
        ]
      }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Advanced Calculus Masterclass",
    instructor: "Dr. Michael Chen",
    price: 1999,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 890,
    duration: "35 hours",
    level: "Advanced",
    category: "mathematics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
    description: "Master advanced calculus concepts with step-by-step explanations and practical applications.",
    whatYouWillLearn: [
      "Master differential and integral calculus",
      "Solve complex mathematical problems",
      "Apply calculus in real-world scenarios",
      "Prepare for advanced mathematics courses"
    ],
    curriculum: [
      {
        section: "Differential Calculus",
        lessons: [
          { title: "Limits and Continuity", duration: "20:15", preview: true },
          { title: "Derivatives and Applications", duration: "25:30" },
          { title: "Chain Rule and Implicit Differentiation", duration: "18:45" }
        ]
      },
      {
        section: "Integral Calculus",
        lessons: [
          { title: "Fundamental Theorem of Calculus", duration: "22:20" },
          { title: "Integration Techniques", duration: "28:15" },
          { title: "Applications of Integration", duration: "24:30" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Alex Rivera",
    price: 2499,
    rating: 4.7,
    reviews: 2100,
    duration: "38 hours",
    level: "Beginner",
    category: "programming",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    description: "Learn Python programming and data science from scratch. Perfect for beginners.",
    whatYouWillLearn: [
      "Master Python programming fundamentals",
      "Work with NumPy and Pandas libraries",
      "Create data visualizations with Matplotlib",
      "Build machine learning models"
    ],
    curriculum: [
      {
        section: "Python Basics",
        lessons: [
          { title: "Getting Started with Python", duration: "16:45", preview: true },
          { title: "Variables and Data Types", duration: "14:20", preview: true },
          { title: "Control Structures", duration: "19:15" }
        ]
      },
      {
        section: "Data Science Libraries",
        lessons: [
          { title: "Introduction to NumPy", duration: "21:30" },
          { title: "Data Manipulation with Pandas", duration: "26:45" },
          { title: "Data Visualization", duration: "23:20" }
        ]
      }
    ],
    featured: true
  },
  {
    id: 4,
    title: "Organic Chemistry Fundamentals",
    instructor: "Dr. Emily Watson",
    price: 1799,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 750,
    duration: "28 hours",
    level: "Intermediate",
    category: "science",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop",
    description: "Comprehensive course covering organic chemistry principles, reactions, and mechanisms.",
    whatYouWillLearn: [
      "Understand organic molecular structures",
      "Master reaction mechanisms",
      "Identify functional groups",
      "Solve organic chemistry problems"
    ],
    curriculum: [
      {
        section: "Basic Concepts",
        lessons: [
          { title: "Atomic Structure and Bonding", duration: "18:30", preview: true },
          { title: "Molecular Geometry", duration: "16:45" },
          { title: "Functional Groups", duration: "20:15" }
        ]
      },
      {
        section: "Reactions and Mechanisms",
        lessons: [
          { title: "Substitution Reactions", duration: "22:20" },
          { title: "Elimination Reactions", duration: "19:45" },
          { title: "Addition Reactions", duration: "21:30" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    instructor: "Mark Thompson",
    price: 2199,
    rating: 4.5,
    reviews: 1680,
    duration: "32 hours",
    level: "Beginner",
    category: "business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    description: "Learn digital marketing strategies, social media marketing, and grow your online presence.",
    whatYouWillLearn: [
      "Master social media marketing",
      "Create effective ad campaigns",
      "Understand SEO and content marketing",
      "Analyze marketing metrics and ROI"
    ],
    curriculum: [
      {
        section: "Digital Marketing Basics",
        lessons: [
          { title: "Introduction to Digital Marketing", duration: "14:20", preview: true },
          { title: "Understanding Your Audience", duration: "17:15", preview: true },
          { title: "Marketing Channels Overview", duration: "16:30" }
        ]
      },
      {
        section: "Advanced Strategies",
        lessons: [
          { title: "Social Media Marketing", duration: "24:45" },
          { title: "Email Marketing Campaigns", duration: "19:20" },
          { title: "Analytics and Optimization", duration: "21:15" }
        ]
      }
    ],
    featured: true
  },
  {
    id: 6,
    title: "Statistics for Data Analysis",
    instructor: "Dr. Jennifer Kim",
    price: 1699,
    originalPrice: 2799,
    rating: 4.8,
    reviews: 920,
    duration: "26 hours",
    level: "Intermediate",
    category: "mathematics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    description: "Master statistical concepts and their applications in data analysis and research.",
    whatYouWillLearn: [
      "Understand descriptive and inferential statistics",
      "Perform hypothesis testing",
      "Work with probability distributions",
      "Apply statistical methods to real data"
    ],
    curriculum: [
      {
        section: "Descriptive Statistics",
        lessons: [
          { title: "Measures of Central Tendency", duration: "15:45", preview: true },
          { title: "Measures of Variability", duration: "18:20" },
          { title: "Data Visualization", duration: "16:30" }
        ]
      },
      {
        section: "Inferential Statistics",
        lessons: [
          { title: "Probability Distributions", duration: "22:15" },
          { title: "Hypothesis Testing", duration: "25:30" },
          { title: "Confidence Intervals", duration: "19:45" }
        ]
      }
    ]
  }
];
