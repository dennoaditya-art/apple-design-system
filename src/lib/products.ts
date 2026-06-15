export interface Product {
  id: string
  name: string
  tagline: string
  price: string
  category: "iphone" | "mac" | "ipad" | "watch" | "airpods" | "accessories"
  imageSrc: string
  color?: string
}

export const PRODUCTS: Product[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Built for Apple Intelligence.",
    price: "$999",
    category: "iphone",
    imageSrc: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    tagline: "The largest display ever on iPhone.",
    price: "$1,199",
    category: "iphone",
    imageSrc: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    tagline: "Powerful. Practical. Playful.",
    price: "$799",
    category: "iphone",
    imageSrc: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&q=80",
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    tagline: "Big screen. Big battery.",
    price: "$899",
    category: "iphone",
    imageSrc: "https://images.unsplash.com/photo-1592286927505-1a2513d8b3d1?w=600&q=80",
  },
  {
    id: "macbook-pro-14",
    name: "MacBook Pro 14\"",
    tagline: "M4 Pro. Pro performance.",
    price: "$1,599",
    category: "mac",
    imageSrc: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
  },
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16\"",
    tagline: "M4 Max. Built for the impossible.",
    price: "$2,499",
    category: "mac",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  },
  {
    id: "macbook-air",
    name: "MacBook Air",
    tagline: "Supercharged by M4.",
    price: "$1,099",
    category: "mac",
    imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  },
  {
    id: "ipad-pro",
    name: "iPad Pro",
    tagline: "The ultimate iPad experience.",
    price: "$999",
    category: "ipad",
    imageSrc: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    tagline: "Supercharged by M3.",
    price: "$599",
    category: "ipad",
    imageSrc: "https://images.unsplash.com/photo-1682426526490-667d4912b8de?w=600&q=80",
  },
  {
    id: "ipad-10th-gen",
    name: "iPad 10th Gen",
    tagline: "Colorful. Capable. Charming.",
    price: "$349",
    category: "ipad",
    imageSrc: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80",
  },
  {
    id: "watch-ultra-2",
    name: "Apple Watch Ultra 2",
    tagline: "Adventure awaits.",
    price: "$799",
    category: "watch",
    imageSrc: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
  },
  {
    id: "watch-series-10",
    name: "Apple Watch Series 10",
    tagline: "The future of wellness.",
    price: "$399",
    category: "watch",
    imageSrc: "https://images.unsplash.com/photo-1546868871-af0de0ae72cc?w=600&q=80",
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    tagline: "Sound the way it was meant to be.",
    price: "$249",
    category: "airpods",
    imageSrc: "https://images.unsplash.com/photo-1631172220668-5675a45f19fc?w=600&q=80",
  },
  {
    id: "airpods-4",
    name: "AirPods 4",
    tagline: "Iconic. Now even better.",
    price: "$129",
    category: "airpods",
    imageSrc: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&q=80",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    tagline: "Wireless over-ear headphones.",
    price: "$549",
    category: "airpods",
    imageSrc: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80",
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard",
    tagline: "Designed for iPad Pro.",
    price: "$349",
    category: "accessories",
    imageSrc: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
  },
  {
    id: "apple-pencil-pro",
    name: "Apple Pencil Pro",
    tagline: "Pixel-perfect precision.",
    price: "$129",
    category: "accessories",
    imageSrc: "https://images.unsplash.com/photo-1590959651373-a3db0f38cbe4?w=600&q=80",
  },
]

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "iphone", label: "iPhone" },
  { id: "mac", label: "Mac" },
  { id: "ipad", label: "iPad" },
  { id: "watch", label: "Watch" },
  { id: "airpods", label: "AirPods" },
  { id: "accessories", label: "Accessories" },
] as const
