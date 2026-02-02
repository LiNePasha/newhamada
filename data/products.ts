export interface Product {
  id: string;
  category: string;
  image: string;
  capacity: string;
  productCode: string;
}

export const productsData: Product[] = [
  { id: "1", category: "عبوات", image: "/images/products/156469.png", capacity: "1 لتر مضلع", productCode: "13" },
  { id: "2", category: "عبوات", image: "/images/products/18.png", capacity: "250 مل", productCode: "18" },
  { id: "3", category: "عبوات", image: "/images/products/IMG_1188.png", capacity: "900 مل", productCode: "09" },
  { id: "4", category: "عبوات", image: "/images/products/IMG_1192.png", capacity: "750 مل", productCode: "08" },
  { id: "5", category: "عبوات", image: "/images/products/IMG_1220-1.png", capacity: "2 لتر", productCode: "02" },
  { id: "6", category: "عبوات", image: "/images/products/IMG_1226-1.png", capacity: "4 لتر", productCode: "04" },
  { id: "7", category: "عبوات", image: "/images/products/IMG_1227.png", capacity: "3.6 لتر", productCode: "03" },
  { id: "8", category: "عبوات", image: "/images/products/IMG_1228.png", capacity: "5 لتر", productCode: "05" },
  { id: "9", category: "عبوات", image: "/images/products/IMG_1229.png", capacity: "10 لتر", productCode: "01" },
  { id: "10", category: "عبوات", image: "/images/products/IMG_12942.png", capacity: "5 لتر", productCode: "05" },
  { id: "11", category: "عبوات", image: "/images/products/IMG_1296.png", capacity: "20 لتر", productCode: "06" },
  { id: "12", category: "عبوات", image: "/images/products/IMG_1682.png", capacity: "25 لتر", productCode: "07" },
  { id: "13", category: "عبوات", image: "/images/products/IMG_1683.png", capacity: "25 لتر", productCode: "07" },
  { id: "14", category: "عبوات", image: "/images/products/IMG_1853.png", capacity: "900 مل مضلع", productCode: "12" },
  { id: "15", category: "عبوات", image: "/images/products/IMG_1855.png", capacity: "900 مل مربعة", productCode: "11" },
  { id: "16", category: "عبوات", image: "/images/products/IMG_1856.png", capacity: "1 لتر سادة", productCode: "12" },
  { id: "17", category: "عبوات", image: "/images/products/IMG_1858.png", capacity: "لتر نصف", productCode: "14" }
];

export const categories = [
  "جميع المنتجات",
  "عبوات صغيرة",
  "عبوات متوسطة",
  "عبوات كبيرة",
  "عبوات صناعية",
  "عبوات خاصة"
];
