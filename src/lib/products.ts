export interface Product {
  id: string
  name: string
  tagline: string
  price: string
  category: "phones" | "laptops" | "tablets" | "watches" | "audio" | "accessories"
  imageSrc: string
  color?: string
}

export const PRODUCTS: Product[] = [
  {
    id: "ultra-phone-x",
    name: "UltraPhone X",
    tagline: "Built for next-gen intelligence.",
    price: "$999",
    category: "phones",
    imageSrc: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
  },
  {
    id: "ultra-phone-x-plus",
    name: "UltraPhone X Plus",
    tagline: "The largest display on a phone.",
    price: "$1,199",
    category: "phones",
    imageSrc: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
  },
  {
    id: "phone-std",
    name: "Phone S",
    tagline: "Powerful. Practical. Playful.",
    price: "$799",
    category: "phones",
    imageSrc: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&q=80",
  },
  {
    id: "phone-std-plus",
    name: "Phone S Plus",
    tagline: "Big screen. Big battery.",
    price: "$899",
    category: "phones",
    imageSrc: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
  },
  {
    id: "laptop-pro-14",
    name: "Laptop Pro 14\"",
    tagline: "Next-gen performance.",
    price: "$1,599",
    category: "laptops",
    imageSrc: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
  },
  {
    id: "laptop-pro-16",
    name: "Laptop Pro 16\"",
    tagline: "Built for the impossible.",
    price: "$2,499",
    category: "laptops",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  },
  {
    id: "laptop-air",
    name: "Laptop Air",
    tagline: "Supercharged performance.",
    price: "$1,099",
    category: "laptops",
    imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  },
  {
    id: "tablet-pro",
    name: "Tablet Pro",
    tagline: "The ultimate tablet experience.",
    price: "$999",
    category: "tablets",
    imageSrc: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  },
  {
    id: "tablet-air",
    name: "Tablet Air",
    tagline: "Supercharged performance.",
    price: "$599",
    category: "tablets",
    imageSrc: "https://images.unsplash.com/photo-1682426526490-667d4912b8de?w=600&q=80",
  },
  {
    id: "tablet-std",
    name: "Tablet 11th Gen",
    tagline: "Colorful. Capable. Charming.",
    price: "$349",
    category: "tablets",
    imageSrc: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80",
  },
  {
    id: "watch-ultra-2",
    name: "Watch Ultra 2",
    tagline: "Adventure awaits.",
    price: "$799",
    category: "watches",
    imageSrc: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
  },
  {
    id: "watch-series-10",
    name: "Watch Series 10",
    tagline: "The future of wellness.",
    price: "$399",
    category: "watches",
    imageSrc: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=600&q=80",
  },
  {
    id: "earbuds-pro-2",
    name: "Earbuds Pro 2",
    tagline: "Sound the way it was meant to be.",
    price: "$249",
    category: "audio",
    imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: "earbuds-std",
    name: "Earbuds 4",
    tagline: "Iconic. Now even better.",
    price: "$129",
    category: "audio",
    imageSrc: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&q=80",
  },
  {
    id: "headphones-max",
    name: "Headphones Max",
    tagline: "Wireless over-ear headphones.",
    price: "$549",
    category: "audio",
    imageSrc: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80",
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard",
    tagline: "Designed for Tablet Pro.",
    price: "$349",
    category: "accessories",
    imageSrc: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
  },
  {
    id: "pencil-pro",
    name: "Pencil Pro",
    tagline: "Pixel-perfect precision.",
    price: "$129",
    category: "accessories",
    imageSrc: "https://images.unsplash.com/photo-1588778841637-8bb1e92be057?w=600&q=80",
  },
]

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "phones", label: "Phones" },
  { id: "laptops", label: "Laptops" },
  { id: "tablets", label: "Tablets" },
  { id: "watches", label: "Watches" },
  { id: "audio", label: "Audio" },
  { id: "accessories", label: "Accessories" },
] as const
