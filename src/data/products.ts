import { Zap, Shield, Truck, Hammer, Disc, Box, Cog, Activity } from "lucide-react";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: any;
}

export interface Accessory {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Wheel Excavator" | "Crawler Excavator" | "Mini Excavator" | "Wheel Crawler" | "Grabloader";
  image: string;
  link?: string;
  brochureLink?: string;
  shortDesc: string;
  description: string;
  specs: ProductSpecification[];
  features: ProductFeature[];
}

export const accessories: Accessory[] = [
  {
    id: "auger",
    name: "EXCAVATOR TATSUO WITH AUGER",
    image: "https://tatsuo.co.id/img/bor1.webp",
    description: "Ideal untuk pengeboran tanah, pemasangan tiang pancang, dan proyek fondasi."
  },
  {
    id: "breaker",
    name: "EXCAVATOR TATSUO WITH BREAKER",
    image: "https://tatsuo.co.id/img/breaker.webp",
    description: "Solusi penghancur beton dan batuan keras dengan daya hentak tinggi."
  },
  {
    id: "grapple",
    name: "EXCAVATOR TATSUO WITH GRAPPLE",
    image: "https://tatsuo.co.id/img/grapple.webp",
    description: "Efisiensi tinggi untuk memuat kayu, tebu, besi tua, dan material curah lainnya."
  }
];

export const products: Product[] = [
  {
    id: "jp120-9",
    name: "WHEEL CRAWLER JP120-9",
    slug: "wheel-crawler-excavator-jp120-9",
    category: "Wheel Crawler",
    image: "https://tatsuo.co.id/img/EX1209.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/jp120.pdf",
    shortDesc: "Kombinasi roda dan rantai kelas 12 ton untuk fleksibilitas maksimal.",
    description: "Tatsuo JP120-9 adalah excavator hybrid revolusioner yang menggabungkan mobilitas wheel excavator dengan stabilitas crawler. Cocok untuk proyek infrastruktur yang menuntut perpindahan cepat antar lokasi namun tetap tangguh di medan berlumpur.",
    specs: [
      { label: "Operating Weight", value: "12,000 kg" },
      { label: "Engine", value: "Yanmar / Isuzu (Japan)" },
      { label: "Bucket Capacity", value: "0.45 m³" }
    ],
    features: [
        { title: "Dual Mobility", description: "Bisa berjalan cepat di aspal dan stabil di lumpur.", icon: Cog },
        { title: "High Power", description: "Engine turbo diesel bertenaga besar untuk beban kerja berat.", icon: Zap }
    ]
  },
  {
    id: "jp80-9",
    name: "WHEEL CRAWLER JP80-9",
    slug: "wheel-crawler-excavator-jp80-9",
    category: "Wheel Crawler",
    image: "https://tatsuo.co.id/img/JP809.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP80-9-compressed.pdf",
    shortDesc: "Excavator hybrid 8 ton terpopuler untuk segala medan.",
    description: "Solusi all-in-one untuk kontraktor cerdas. Satu unit bisa menangani berbagai kondisi lahan tanpa perlu mobilisasi trailer tambahan untuk jarak dekat.",
    specs: [
      { label: "Operating Weight", value: "8,200 kg" },
      { label: "Engine", value: "Yanmar 4TNV98" },
      { label: "System", value: "Wheel & Crawler" }
    ],
    features: [
        { title: "Efisiensi Tinggi", description: "Hemat biaya mobilisasi dan bahan bakar.", icon: Disc },
        { title: "Versatile", description: "Cocok untuk perkebunan, konstruksi jalan, dan irigasi.", icon: Activity }
    ]
  },
  {
    id: "jp80ls-9",
    name: "WHEEL JP80LS-9",
    slug: "wheel-excavator-jp80ls-9",
    category: "Wheel Excavator",
    image: "https://tatsuo.co.id/img/JP8OLS.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP80ls-compressed.pdf",
    shortDesc: "Varian wheel excavator dengan spesialisasi logging.",
    description: "Dirancang khusus untuk industri kehutanan dan perkebunan tebu. Dilengkapi dengan grapple bawaan dan kaki-kaki kokoh untuk handling material yang cepat.",
    specs: [
      { label: "Operating Weight", value: "8,000 kg" },
      { label: "Attachment", value: "Log Grapple" },
      { label: "Engine", value: "Yanmar Japan" }
    ],
    features: [
        { title: "Grapple Ready", description: "Siap kerja untuk loading tebu atau kayu.", icon: Hammer },
        { title: "Fast Cycle", description: "Siklus kerja cepat untuk produktivitas tinggi.", icon: Zap }
    ]
  },
  {
    id: "jp80l-9",
    name: "WHEEL JP80L-9",
    slug: "wheel-excavator-jp80l-9",
    category: "Wheel Excavator",
    image: "https://tatsuo.co.id/img/JP80L.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP80L-9-dikompresi.pdf",
    shortDesc: "Wheel excavator standar 8 ton yang lincah dan bertenaga.",
    description: "Pilihan tepat untuk pekerjaan perkotaan dan pemeliharaan jalan. Ban karet tidak merusak aspal dan memiliki kecepatan travel yang tinggi.",
    specs: [
      { label: "Operating Weight", value: "7,800 kg" },
      { label: "Travel Speed", value: "25 km/h" },
      { label: "Bucket", value: "0.3 m³" }
    ],
    features: [
        { title: "High Speed", description: "Perpindahan lokasi cepat tanpa lowbed.", icon: Truck },
        { title: "Comfort Cabin", description: "Kabin operator nyaman dan kedap suara.", icon: Box }
    ]
  },
  {
    id: "jp75-8",
    name: "CRAWLER JP75-8",
    slug: "crawler-excavator-jp75-8",
    category: "Crawler Excavator",
    image: "https://tatsuo.co.id/img/JP758.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/jp75-8-V2.pdf",
    shortDesc: "Crawler 7.5 ton tangguh untuk medan ekstrim.",
    description: "Si Penjelajah Tangguh. Didesain dengan track shoe lebar untuk ground pressure rendah, sangat ideal untuk lahan gambut atau rawa.",
    specs: [
      { label: "Operating Weight", value: "7,500 kg" },
      { label: "Track Width", value: "500 mm" },
      { label: "Engine", value: "Yanmar Turbo" }
    ],
    features: [
        { title: "Swamp Master", description: "Jagoan di lahan basah dan lunak.", icon: Shield },
        { title: "Low Maintenance", description: "Komponen undercarriage awet dan mudah dirawat.", icon: Cog }
    ]
  },
  {
    id: "jp78pro-9",
    name: "WHEEL CRAWLER JP78PRO-9",
    slug: "wheel-crawler-jp78pro-9",
    category: "Wheel Crawler",
    image: "https://tatsuo.co.id/img/jp78.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP78PRO-9.pdf",
    shortDesc: "Versi profesional dengan peningkatan performa hidrolik.",
    description: "Upgrade dari seri standar dengan pompa hidrolik flow tinggi untuk attachment yang membutuhkan tenaga ekstra seperti breaker besar.",
    specs: [
      { label: "Class", value: "Pro Series" },
      { label: "Hydraulics", value: "High Flow Pump" },
      { label: "Cabin", value: "ROPS/FOPS" }
    ],
    features: [
        { title: "Pro Performance", description: "Tenaga lebih besar untuk pekerjaan berat.", icon: Zap },
        { title: "Durability", description: "Struktur diperkuat untuk masa pakai lebih lama.", icon: Shield }
    ]
  },
  {
    id: "jp120l-9",
    name: "WHEEL JP120L-9",
    slug: "wheel-excavator-jp120l-9",
    category: "Wheel Excavator",
    image: "https://tatsuo.co.id/img/120L.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP120L-new.pdf",
    shortDesc: "Big Wheel Excavator 12 Ton.",
    description: "Kapasitas besar dengan mobilitas roda. Solusi untuk quarry, batching plant, atau loading material volume besar.",
    specs: [
      { label: "Weight", value: "12 Ton" },
      { label: "Bucket", value: "0.5 m³" }
    ],
    features: []
  },
  {
    id: "jp60-8",
    name: "CRAWLER JP60-8",
    slug: "crawler-excavator-jp60-8",
    category: "Crawler Excavator",
    image: "https://tatsuo.co.id/img/jp609.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/jp60-8_NEW_.pdf",
    shortDesc: "Compact crawler 6 ton yang lincah.",
    description: "Ukuran pas untuk proyek perumahan atau saluran irigasi menengah. Hemat bahan bakar namun tetap bertenaga.",
    specs: [
      { label: "Weight", value: "6,000 kg" },
      { label: "Engine", value: "Yanmar 4TNV94" }
    ],
    features: []
  },
  {
    id: "jp12-8",
    name: "MINI EXCAVATOR JP12-8",
    slug: "mini-crawler-excavator-jp12-8",
    category: "Mini Excavator",
    image: "https://tatsuo.co.id/img/jp12.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/jp12-compressed.pdf",
    shortDesc: "Mini 1.2 ton, jagoan gang sempit.",
    description: "Solusi penggalian di area sangat terbatas. Bisa masuk pintu rumah atau gang kecil.",
    specs: [
      { label: "Weight", value: "1,200 kg" },
      { label: "Width", value: "900 mm" }
    ],
    features: []
  },
  {
    id: "jp20-8",
    name: "MINI EXCAVATOR JP20-8",
    slug: "mini-crawler-excavator-jp20-8",
    category: "Mini Excavator",
    image: "https://tatsuo.co.id/img/JP20.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/JP20-8rochur.pdf",
    shortDesc: "Mini 2 ton dengan jangkauan lebih luas.",
    description: "Upgrade size dari JP12, memberikan kedalaman gali lebih baik namun tetap kompak.",
    specs: [
      { label: "Weight", value: "2,000 kg" },
      { label: "Bucket", value: "0.07 m³" }
    ],
    features: []
  },
  {
    id: "jp40-8",
    name: "MINI EXCAVATOR JP40-8",
    slug: "mini-excavator-jp40-8",
    category: "Mini Excavator",
    image: "https://tatsuo.co.id/img/jp40.webp",
    brochureLink: "https://tatsuo.co.id/excavator/wp-content/uploads/2025/08/jp40-9.pdf",
    shortDesc: "Mini excavator 4 ton heavy duty.",
    description: "Kecil-kecil cabe rawit. Mampu melakukan pekerjaan berat di area terbatas.",
    specs: [
      { label: "Weight", value: "4,000 kg" },
      { label: "Engine", value: "Kubota / Yanmar" }
    ],
    features: []
  },
  {
    id: "grabloader",
    name: "GRABLOADER TATSUO",
    slug: "grabloader-tatsuo",
    category: "Grabloader",
    image: "https://tatsuo.co.id/img/gl.webp",
    shortDesc: "Spesialis loading material tebu dan sampah.",
    description: "Material handler efisien dengan grapple rotasi 360 derajat.",
    specs: [
      { label: "Type", value: "Wheel Loader / Grab" },
      { label: "Reach", value: "Extended Boom" }
    ],
    features: []
  }
];

export const productCategories = Array.from(new Set(products.map(p => p.category)));
