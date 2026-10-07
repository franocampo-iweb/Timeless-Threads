/*
  Standalone fallback datasets.
  These mirror data/products.json and data/customers.json so the website can
  be opened directly from the file system (file://) without Live Server.
  When hosted through http/https, products.js and customers.js still use
  fetch() GET requests to the JSON files to demonstrate the required data integration.
*/
window.TIMELESS_DATA = {
  products: [
    {
      id: 1,
      name: "Classic Logo Tee",
      slug: "classic-logo",
      tagline: "Timeless Style, Always",
      description: "A clean everyday essential featuring the Timeless Threads identity. Simple, versatile, and easy to pair with any outfit.",
      category: "Essentials",
      price: 599,
      availability: "In Stock",
      image: "assets/images/classic-logo.png",
      featured: true
    },
    {
      id: 2,
      name: "Mountain Mist Tee",
      slug: "mountain-mist",
      tagline: "Higher Views, Calmer Minds",
      description: "A nature-inspired graphic tee with soft mountain scenery made for relaxed everyday styling.",
      category: "Nature Collection",
      price: 749,
      availability: "Limited Stock",
      image: "assets/images/mountain-mist.png",
      featured: true
    },
    {
      id: 3,
      name: "Ocean Wave Tee",
      slug: "ocean-wave",
      tagline: "Bigger Dreams, Deeper Waves",
      description: "A bold black graphic tee inspired by movement, flow, and the timeless energy of the ocean.",
      category: "Graphic Collection",
      price: 799,
      availability: "Limited Edition",
      image: "assets/images/ocean-wave.png",
      featured: true
    },
    {
      id: 4,
      name: "Botanical Line Tee",
      slug: "botanical-line",
      tagline: "Grow Gently",
      description: "A soft neutral tee featuring a minimal botanical illustration for an understated, natural look.",
      category: "Minimal Collection",
      price: 699,
      availability: "In Stock",
      image: "assets/images/botanical-line.png",
      featured: false
    },
    {
      id: 5,
      name: "Forest Moon Tee",
      slug: "forest-moon",
      tagline: "More Nature, Less Noise",
      description: "A muted forest-green design combining mountains, trees, and moonlight for a calm outdoor-inspired aesthetic.",
      category: "Nature Collection",
      price: 749,
      availability: "Limited Stock",
      image: "assets/images/forest-moon.png",
      featured: false
    }
  ],
  customers: [
    {id: 1001, name: "Avery Cruz", email: "avery.cruz@example.com", city: "Mabalacat City", segment: "Student", status: "Subscriber"},
    {id: 1002, name: "Jordan Reyes", email: "jordan.reyes@example.com", city: "Angeles City", segment: "Young Professional", status: "Subscriber"},
    {id: 1003, name: "Sam Mendoza", email: "sam.mendoza@example.com", city: "San Fernando", segment: "Student", status: "Subscriber"},
    {id: 1004, name: "Taylor Santos", email: "taylor.santos@example.com", city: "Mabalacat City", segment: "Young Professional", status: "Subscriber"},
    {id: 1005, name: "Casey Lim", email: "casey.lim@example.com", city: "Angeles City", segment: "Student", status: "Subscriber"}
  ]
};
