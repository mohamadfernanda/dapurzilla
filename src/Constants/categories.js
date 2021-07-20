export const categories = {
  'Aksesoris Dapur': [
    'Alat Pemotong Serbaguna',
    'Capit Makanan',
    'Celemek',
    'Chopper',
    'Grinder',
    'Gunting Dapur',
    'Korek Kompor',
    'Parutan',
    'Peeler',
    'Pelindung Tangan',
    'Pengasah Pisau',
    'Pisau Dapur',
    'Pisau Set',
    'Talenan',
    'Tatakan Gas',
    'Termometer Makanan &',
    'Minuman',
    'Timer Masak'
  ],
  'Alat Masak Khusus': [
    'Coffee & Tea Maker',
    'Cotton Candy Maker',
    'Donut Maker',
    'Ice Cream & Yoghurt Maker',
    'Mesin Es Serut',
    'Noodle & Pasta Maker',
    'Pancake Maker',
    'Popcorn Maker',
    'Sushi Maker & Roll',
    'Waffle Maker'
  ],
  'Bekal': [
    'Botol Minum',
    'Cetakan Bento',
    'Cup Bento',
    'Kotak Makan',
    'Lunch Box Set',
    'Rantang',
    'Tas Bekal',
    'Tas Botol',
    'Termos Air'
  ],
  'Elektronik Dapur': [
    'Blender',
    'Juicer',
    'Kompor Listrik',
    'Kulkas',
    'Microwave',
    'Mixer',
    'Oven',
    'Rice Cooker',
    'Slow Cooker',
    'Toaster'
  ],
  'Penyimpanan Makanan': [
    'Alumunium Foil',
    'Box Telur',
    'Cooler Box',
    'Food Display',
    'Food Warmer',
    'Ice Bucket',
    'Plastic Wrap',
    'Sealer Makanan',
    'Tempat Buah & Sayur',
    'Tempat Bumbu',
    'Tempat Roti',
    'Tempat Saos & Kecap',
    'Toples Makanan'
  ],
  'Peralatan Dapur': [
    'Alat Pembuka Botol',
    'Alat Pembuka Kaleng',
    'Dispenser Air',
    'Pompa Galon',
    'Rak Dapur',
    'Rak Piring',
    'Regulator & Penghemat Gas',
    'Sarung Galon',
    'Sarung Kulkas',
    'Timbangan Dapur',
    'Water Purifier'
  ],
  'Peralatan Makan & Minum': [
    'Cangkir',
    'Gelas & Mug',
    'Gelas Wine',
    'Nampan',
    'Peralatan Makan Set',
    'Peralatan Minum Set',
    'Piring Makan',
    'Piring & Mangkok Saji',
    'Pitcher Minuman',
    'Sedotan',
    'Sendok & Garpu Makan',
    'Sendok Bebek',
    'Sendok & Garpu Dessert',
    'Sendok & Garpu Makan',
    'Sumpit',
    'Tempat Gelas & Piring',
    'Tudung Saji',
    'Tutup Gelas & Piring'
  ],
  'Peralatan Masak': [
    'Cetakan Es & Pudding',
    'Deep Fryer',
    'Gelas Takar',
    'Gilingan Daging',
    'Griller',
    'Kompor',
    'Panci',
    'Saringan Masak',
    'Sendok Takar',
    'Spatula & Sutil',
    'Steamer',
    'Teko & Pemanas Air',
    'Wajan'
  ],
  'Peralatan Cuci Piring': [
    'Dish Dryer',
    'Sabut',
    'Saringan Cuci Piring',
    'Sikat Cuci Botol',
    'Sponge Cuci Piring'
  ],
  'Ruang Makan': [
    'Kursi Bar',
    'Kursi Makan Outdoor',
    'Kursi Ruang Makan',
    'Meja Bar',
    'Meja Makan Outdoor',
    'Meja Ruang Makan'
  ]
}

export const getAllCategories = () => {
  let flattenCategories = []
  Object.keys(categories).forEach(key =>
    flattenCategories = [...flattenCategories, ...categories[key]]
  )
  return flattenCategories;
}

export const getCategoriesByTopics = (topics) => {
  let flattenCategories = []
  topics.forEach(topic =>
    flattenCategories = [...flattenCategories, ...categories[topic]]
  )
  return flattenCategories;
}