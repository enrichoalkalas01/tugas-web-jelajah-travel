// Destination data taken from "assets/img/image and data .docx".
var DESTINATIONS = [
  {
    "slug": "borobudur-temple",
    "name": "Borobudur Temple",
    "location": "Magelang, Central Java",
    "short": "Magelang, Central Java",
    "region": "Java",
    "type": "Culture",
    "category": "Culture & heritage",
    "price": 50000,
    "rating": "4.88",
    "reviews": 5120,
    "photos": [
      {
        "src": "assets/img/borobudur-temple/01.jpg",
        "caption": "Tampak luas Borobudur dari sisi utara"
      },
      {
        "src": "assets/img/borobudur-temple/09.jpg",
        "caption": "Relief batu di kompleks candi"
      }
    ],
    "about": {
      "en": "Borobudur is a major Buddhist monument near Magelang, built in the form of stepped terraces covered with narrative reliefs and stupas. Explore its architecture and surrounding heritage landscape with respect for its living spiritual significance.",
      "id": "Borobudur adalah monumen Buddha besar di dekat Magelang, tersusun sebagai teras bertingkat dengan relief naratif dan stupa. Jelajahi arsitektur serta lanskap warisan di sekitarnya dengan menghormati nilai spiritualnya."
    },
    "highlights": [
      {
        "en": "Terraced stone architecture and relief panels",
        "id": "Arsitektur batu bertingkat dan panel relief"
      },
      {
        "en": "Bell-shaped stupas and Buddha imagery",
        "id": "Stupa berbentuk lonceng dan arca Buddha"
      }
    ]
  },
  {
    "slug": "ubud-tegallalang",
    "name": "Ubud & Tegallalang",
    "location": "Ubud and Tegallalang, Gianyar, Bali",
    "short": "Gianyar, Bali",
    "region": "Bali",
    "type": "Culture",
    "category": "Culture & nature",
    "price": 15000,
    "rating": "4.87",
    "reviews": 4290,
    "photos": [
      {
        "src": "assets/img/ubud-tegallalang/14.jpg",
        "caption": "Sawah terasering Tegallalang"
      },
      {
        "src": "assets/img/ubud-tegallalang/09.jpg",
        "caption": "Tari tradisional Bali di Ubud"
      }
    ],
    "about": {
      "en": "Ubud is known for Balinese arts, craft and cultural experiences. Nearby Tegallalang is a scenic agricultural landscape of stepped rice paddies, where paths and viewpoints reveal the work and water-sharing traditions behind the scenery.",
      "id": "Ubud dikenal dengan seni, kerajinan, dan pengalaman budaya Bali. Tegallalang di dekatnya menghadirkan lanskap pertanian berupa sawah bertingkat; jalur dan titik pandangnya memperlihatkan kerja serta tradisi pengairan di balik pemandangan tersebut."
    },
    "highlights": [
      {
        "en": "Tegallalang rice terraces",
        "id": "Sawah terasering Tegallalang"
      },
      {
        "en": "Ubud art, craft and local markets",
        "id": "Seni, kerajinan, dan pasar lokal Ubud"
      }
    ]
  },
  {
    "slug": "mount-bromo",
    "name": "Mount Bromo",
    "location": "Bromo Tengger Semeru National Park, East Java",
    "short": "Bromo Tengger Semeru, East Java",
    "region": "Java",
    "type": "Mountain",
    "category": "Mountain & volcano",
    "price": 28000,
    "rating": "4.92",
    "reviews": 3310,
    "photos": [
      {
        "src": "assets/img/mount-bromo/01.jpg",
        "caption": "Gunung Batok saat cahaya pagi"
      },
      {
        "src": "assets/img/mount-bromo/14.jpg",
        "caption": "Kaldera Tengger dan Gunung Bromo"
      }
    ],
    "about": {
      "en": "Mount Bromo sits within Bromo Tengger Semeru National Park in East Java. The volcanic cones, caldera and Sea of Sand form a striking highland landscape, while Tengger communities and the temple at the crater's foot add cultural context to the journey.",
      "id": "Gunung Bromo berada di kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur. Kerucut gunung, kaldera, dan Lautan Pasir membentuk lanskap dataran tinggi yang khas; masyarakat Tengger dan pura di kaki kawah memberi konteks budaya pada perjalanan."
    },
    "highlights": [
      {
        "en": "Sunrise viewpoints over the Tengger caldera",
        "id": "Titik pandang matahari terbit di kaldera Tengger"
      },
      {
        "en": "Sea of Sand and volcanic crater",
        "id": "Lautan Pasir dan kawah vulkanik"
      }
    ]
  },
  {
    "slug": "gili-islands",
    "name": "Gili Islands",
    "location": "Northwest coast of Lombok, West Nusa Tenggara",
    "short": "North Lombok, West Nusa Tenggara",
    "region": "Nusa Tenggara",
    "type": "Beach",
    "category": "Beach & island",
    "price": 15000,
    "rating": "4.89",
    "reviews": 2650,
    "photos": [
      {
        "src": "assets/img/gili-islands/01.jpg",
        "caption": "Perahu layar di sekitar Gili Meno"
      },
      {
        "src": "assets/img/gili-islands/07.jpg",
        "caption": "Pesisir dan suasana pulau Gili"
      }
    ],
    "about": {
      "en": "The Gilis lie just off Lombok's northwest coast. Visitors move between the islands for beaches, snorkeling and a slower pace; on land, local transport and village paths are part of the island experience.",
      "id": "Kepulauan Gili berada tidak jauh dari pesisir barat laut Lombok. Pengunjung berpindah antarpulau untuk menikmati pantai, snorkeling, dan suasana santai; jalur desa serta transportasi lokal menjadi bagian dari pengalaman pulau."
    },
    "highlights": [
      {
        "en": "Gili Trawangan, Gili Meno and Gili Air",
        "id": "Gili Trawangan, Gili Meno, dan Gili Air"
      },
      {
        "en": "Snorkeling and shallow reef areas",
        "id": "Snorkeling dan area terumbu dangkal"
      }
    ]
  },
  {
    "slug": "nusa-penida-kelingking",
    "name": "Nusa Penida & Kelingking",
    "location": "Nusa Penida, Klungkung, Bali",
    "short": "Klungkung, Bali",
    "region": "Bali",
    "type": "Beach",
    "category": "Beach & island",
    "price": 25000,
    "rating": "4.96",
    "reviews": 2140,
    "photos": [
      {
        "src": "assets/img/nusa-penida-kelingking/02.jpg",
        "caption": "Tebing Kelingking dari atas"
      },
      {
        "src": "assets/img/nusa-penida-kelingking/08.jpg",
        "caption": "Garis pantai Nusa Penida"
      }
    ],
    "about": {
      "en": "Nusa Penida is an island in Klungkung Regency, reached by sea from Bali. Kelingking's distinctive headland, rugged coastal cliffs and beaches define many visits; routes can be steep, so photographs should show the real terrain and scale.",
      "id": "Nusa Penida adalah pulau di Kabupaten Klungkung yang dicapai melalui laut dari Bali. Tanjung Kelingking yang khas, tebing pantai, dan pantai-pantainya menjadi daya tarik utama; jalurnya dapat curam, jadi foto sebaiknya menampilkan medan dan skalanya dengan tepat."
    },
    "highlights": [
      {
        "en": "Kelingking headland and cliff viewpoint",
        "id": "Tanjung Kelingking dan titik pandang tebing"
      },
      {
        "en": "Atuh and Diamond Beach area",
        "id": "Kawasan Pantai Atuh dan Diamond"
      }
    ]
  },
  {
    "slug": "kawah-ijen",
    "name": "Kawah Ijen",
    "location": "Ijen volcanic complex, Banyuwangi and Bondowoso, East Java",
    "short": "Banyuwangi, East Java",
    "region": "Java",
    "type": "Mountain",
    "category": "Mountain & volcano",
    "price": 85000,
    "rating": "4.93",
    "reviews": 1890,
    "photos": [
      {
        "src": "assets/img/kawah-ijen/02.jpg",
        "caption": "Danau kawah Ijen dari bibir kawah"
      },
      {
        "src": "assets/img/kawah-ijen/04.jpg",
        "caption": "Lanskap belerang dan kawah Ijen"
      }
    ],
    "about": {
      "en": "The Ijen volcanic complex is known for its crater lake and active sulfur landscape. A night approach is sometimes made to witness blue flames, a natural phenomenon visible only under suitable dark conditions; sunrise reveals the crater's scale and color.",
      "id": "Kompleks vulkanik Ijen dikenal dengan danau kawah dan lanskap belerang aktif. Pendakian malam kadang dilakukan untuk melihat api biru, fenomena alam yang hanya tampak dalam kondisi gelap yang sesuai; saat matahari terbit, skala dan warna kawah terlihat jelas."
    },
    "highlights": [
      {
        "en": "Turquoise crater lake viewed from the rim",
        "id": "Danau kawah toska dari bibir kawah"
      },
      {
        "en": "Sulfur landscape and miners at work",
        "id": "Lanskap belerang dan aktivitas penambang"
      }
    ]
  },
  {
    "slug": "labuan-bajo-komodo",
    "name": "Labuan Bajo & Komodo",
    "location": "Labuan Bajo, West Manggarai, East Nusa Tenggara",
    "short": "West Manggarai, East Nusa Tenggara",
    "region": "Nusa Tenggara",
    "type": "Beach",
    "category": "Beach & island",
    "price": 127500,
    "rating": "4.95",
    "reviews": 1720,
    "photos": [
      {
        "src": "assets/img/labuan-bajo-komodo/01.jpg",
        "caption": "Perahu di Pink Beach, Taman Nasional Komodo"
      },
      {
        "src": "assets/img/labuan-bajo-komodo/12.jpg",
        "caption": "Biota laut di perairan Komodo"
      }
    ],
    "about": {
      "en": "Labuan Bajo is the gateway town for boat trips into Komodo National Park. The wider route can include Padar Island, Pink Beach and ranger-led visits to see Komodo dragons in their natural habitat; wildlife viewing should follow park guidance.",
      "id": "Labuan Bajo adalah kota gerbang untuk perjalanan perahu menuju Taman Nasional Komodo. Rute lebih luas dapat mencakup Pulau Padar, Pink Beach, dan kunjungan bersama jagawana untuk melihat komodo di habitat alaminya; pengamatan satwa mengikuti panduan taman nasional."
    },
    "highlights": [
      {
        "en": "Boat journeys between park islands",
        "id": "Perjalanan perahu antarpulau taman nasional"
      },
      {
        "en": "Padar Island viewpoints and Pink Beach",
        "id": "Titik pandang Pulau Padar dan Pink Beach"
      }
    ]
  },
  {
    "slug": "lake-toba",
    "name": "Lake Toba",
    "location": "Lake Toba and Samosir Island, North Sumatra",
    "short": "Samosir, North Sumatra",
    "region": "Sumatra",
    "type": "Nature",
    "category": "Nature & culture",
    "price": 20000,
    "rating": "4.84",
    "reviews": 1180,
    "photos": [
      {
        "src": "assets/img/lake-toba/01.jpg",
        "caption": "Panorama Danau Toba"
      },
      {
        "src": "assets/img/lake-toba/12.jpg",
        "caption": "Lekuk danau dari Pulau Samosir"
      }
    ],
    "about": {
      "en": "Lake Toba fills a giant volcanic caldera in North Sumatra, with Samosir Island at its centre. Travellers come for broad lake views, cool highland air and Batak cultural sites, including traditional architecture and local craft.",
      "id": "Danau Toba mengisi kaldera vulkanik raksasa di Sumatera Utara, dengan Pulau Samosir di tengahnya. Wisatawan datang untuk panorama danau yang luas, udara dataran tinggi yang sejuk, dan situs budaya Batak seperti arsitektur tradisional serta kerajinan lokal."
    },
    "highlights": [
      {
        "en": "Lake viewpoints from Samosir and the mainland",
        "id": "Panorama danau dari Samosir dan daratan utama"
      },
      {
        "en": "Batak architecture and cultural museums",
        "id": "Arsitektur Batak dan museum budaya"
      }
    ]
  },
  {
    "slug": "dieng-plateau",
    "name": "Dieng Plateau",
    "location": "Dieng, Wonosobo and Banjarnegara, Central Java",
    "short": "Wonosobo, Central Java",
    "region": "Java",
    "type": "Mountain",
    "category": "Mountain & nature",
    "price": 25000,
    "rating": "4.80",
    "reviews": 980,
    "photos": [
      {
        "src": "assets/img/dieng-plateau/01.jpg",
        "caption": "Panorama dataran tinggi Dieng"
      },
      {
        "src": "assets/img/dieng-plateau/14.jpg",
        "caption": "Kompleks Candi Arjuna"
      }
    ],
    "about": {
      "en": "Dieng is a high plateau in Central Java where farming villages, volcanic activity and old temple compounds share the landscape. Telaga Warna, Sikidang Crater and the Arjuna temple group are among its best-known stops.",
      "id": "Dieng adalah dataran tinggi di Jawa Tengah, tempat desa pertanian, aktivitas vulkanik, dan kompleks candi lama berada dalam satu lanskap. Telaga Warna, Kawah Sikidang, dan kompleks Candi Arjuna termasuk titik kunjungan yang paling dikenal."
    },
    "highlights": [
      {
        "en": "Arjuna temple group",
        "id": "Kompleks Candi Arjuna"
      },
      {
        "en": "Telaga Warna and highland viewpoints",
        "id": "Telaga Warna dan titik pandang dataran tinggi"
      }
    ]
  },
  {
    "slug": "mount-rinjani",
    "name": "Mount Rinjani",
    "location": "Lombok, West Nusa Tenggara",
    "short": "Lombok, West Nusa Tenggara",
    "region": "Nusa Tenggara",
    "type": "Mountain",
    "category": "Mountain & volcano",
    "price": 150000,
    "rating": "4.90",
    "reviews": 940,
    "photos": [
      {
        "src": "assets/img/mount-rinjani/01.jpg",
        "caption": "Segara Anak di kaldera Rinjani"
      },
      {
        "src": "assets/img/mount-rinjani/03.jpg",
        "caption": "Jalur pendakian Sembalun"
      }
    ],
    "about": {
      "en": "Mount Rinjani dominates Lombok's northern landscape. Trekking routes climb through forest and open slopes toward the crater rim and Segara Anak, a lake inside the caldera. Plan with current park guidance and a licensed local operator.",
      "id": "Gunung Rinjani mendominasi lanskap Lombok bagian utara. Jalur pendakian melewati hutan dan lereng terbuka menuju bibir kaldera dan Danau Segara Anak. Rencanakan perjalanan dengan mengikuti arahan taman nasional terbaru dan operator lokal berizin."
    },
    "highlights": [
      {
        "en": "Crater-rim panoramas",
        "id": "Panorama dari bibir kaldera"
      },
      {
        "en": "Segara Anak lake inside the caldera",
        "id": "Danau Segara Anak di dalam kaldera"
      }
    ]
  },
  {
    "slug": "raja-ampat",
    "name": "Raja Ampat",
    "location": "Raja Ampat, Southwest Papua",
    "short": "Southwest Papua",
    "region": "Papua",
    "type": "Beach",
    "category": "Beach & marine nature",
    "price": 450000,
    "rating": "4.98",
    "reviews": 860,
    "photos": [
      {
        "src": "assets/img/raja-ampat/09.jpg",
        "caption": "Gugusan karst Raja Ampat"
      },
      {
        "src": "assets/img/raja-ampat/01.jpg",
        "caption": "Terumbu karang di Raja Ampat"
      }
    ],
    "about": {
      "en": "Raja Ampat is an island region of Southwest Papua where limestone islets, reefs and village communities sit within a vast marine landscape. Boat trips, snorkeling and diving reveal different parts of the archipelago; choose low-impact operators and respect local conservation rules.",
      "id": "Raja Ampat adalah kawasan kepulauan di Papua Barat Daya, dengan pulau batu kapur, terumbu, dan komunitas kampung dalam bentang laut yang luas. Perjalanan perahu, snorkeling, dan menyelam memperlihatkan sisi kepulauan yang beragam; pilih operator berdampak rendah dan ikuti aturan konservasi setempat."
    },
    "highlights": [
      {
        "en": "Karst island viewpoints such as Piaynemo",
        "id": "Titik pandang pulau karst seperti Piaynemo"
      },
      {
        "en": "Coral reefs and marine life",
        "id": "Terumbu karang dan kehidupan laut"
      }
    ]
  },
  {
    "slug": "citarik-river-rafting",
    "name": "Citarik River Rafting",
    "location": "Citarik River, Sukabumi, West Java",
    "short": "Sukabumi, West Java",
    "region": "Java",
    "type": "Nature",
    "category": "Nature & adventure",
    "price": 225000,
    "rating": "4.82",
    "reviews": 760,
    "photos": [
      {
        "src": "assets/img/citarik-river-rafting/01.jpg",
        "caption": "Sungai Citarik di Sukabumi"
      },
      {
        "src": "assets/img/citarik-river-rafting/02.jpg",
        "caption": "Arung jeram di Sungai Citatih, Sukabumi"
      }
    ],
    "about": {
      "en": "The Citarik River in Sukabumi is a popular setting for guided white-water rafting. A trip follows the river's current through a green landscape and is best represented by real river action, safety equipment and a supervised group experience.",
      "id": "Sungai Citarik di Sukabumi menjadi lokasi populer untuk rafting arung jeram berpemandu. Perjalanan mengikuti arus sungai di tengah lanskap hijau; gambaran yang tepat menampilkan kegiatan di sungai, perlengkapan keselamatan, dan rombongan yang didampingi pemandu."
    },
    "highlights": [
      {
        "en": "Guided rafting on the Citarik River",
        "id": "Rafting berpemandu di Sungai Citarik"
      },
      {
        "en": "Forest and village scenery along the route",
        "id": "Pemandangan hutan dan desa di sepanjang rute"
      }
    ]
  },
  {
    "slug": "bunaken-marine-park",
    "name": "Bunaken Marine Park",
    "location": "Bunaken and Manado Bay, North Sulawesi",
    "short": "Manado, North Sulawesi",
    "region": "Sulawesi",
    "type": "Beach",
    "category": "Beach & marine nature",
    "price": 150000,
    "rating": "4.91",
    "reviews": 610,
    "photos": [
      {
        "src": "assets/img/bunaken-marine-park/01.jpg",
        "caption": "Pemandangan Pulau Bunaken"
      },
      {
        "src": "assets/img/bunaken-marine-park/07.jpg",
        "caption": "Kehidupan laut di Taman Nasional Bunaken"
      }
    ],
    "about": {
      "en": "Bunaken National Park lies in North Sulawesi and protects marine habitats around Bunaken and nearby islands. Snorkeling and diving are the main ways to experience its reef environment; responsible operators help reduce pressure on the coral ecosystem.",
      "id": "Taman Nasional Bunaken berada di Sulawesi Utara dan melindungi habitat laut di sekitar Bunaken serta pulau-pulau terdekat. Snorkeling dan menyelam menjadi cara utama menikmati terumbunya; operator bertanggung jawab membantu mengurangi tekanan pada ekosistem karang."
    },
    "highlights": [
      {
        "en": "Coral walls and reef slopes",
        "id": "Dinding dan lereng terumbu karang"
      },
      {
        "en": "Snorkeling and dive sites near Manado",
        "id": "Lokasi snorkeling dan menyelam dekat Manado"
      }
    ]
  },
  {
    "slug": "tana-toraja",
    "name": "Tana Toraja",
    "location": "Tana Toraja highlands, South Sulawesi",
    "short": "Tana Toraja, South Sulawesi",
    "region": "Sulawesi",
    "type": "Culture",
    "category": "Culture & nature",
    "price": 30000,
    "rating": "4.86",
    "reviews": 520,
    "photos": [
      {
        "src": "assets/img/tana-toraja/04.jpg",
        "caption": "Rumah adat Tongkonan di Toraja"
      },
      {
        "src": "assets/img/tana-toraja/11.jpg",
        "caption": "Deretan rumah tradisional di Kete Kesu"
      }
    ],
    "about": {
      "en": "Tana Toraja in South Sulawesi is known for its distinctive Tongkonan architecture, highland villages and strong local traditions. Visits are most meaningful when guided by local hosts and approached with care for community customs and sacred places.",
      "id": "Tana Toraja di Sulawesi Selatan dikenal dengan arsitektur Tongkonan yang khas, kampung dataran tinggi, dan tradisi lokal yang kuat. Kunjungan akan lebih bermakna bila dipandu warga setempat serta menghormati adat komunitas dan tempat sakral."
    },
    "highlights": [
      {
        "en": "Tongkonan houses and carved details",
        "id": "Rumah Tongkonan dan detail ukirannya"
      },
      {
        "en": "Highland villages and terraced landscapes",
        "id": "Kampung dataran tinggi dan lanskap berteras"
      }
    ]
  }
];
