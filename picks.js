// ============================================================
//  PICKS — Add, remove, or edit products here
//  Each object is one card on the page.
//
//  Fields:
//    cat      — category label (e.g. "Mouse", "Keyboard")
//    badge    — "ceo" | "hot" | "new" | "" (leave empty for none)
//    badgeText— text shown on the badge
//    image    — path to image file in /images/ folder, OR "" for emoji fallback
//    emoji    — fallback emoji if no image
//    name     — product name
//    stars    — number 1–5
//    desc     — short description
//    priceNow — current price string, e.g. "$16.99"
//    priceOld — original price string, e.g. "$24.99"
//    discount — discount string, e.g. "-32%"  (leave "" to hide)
//    link     — Amazon affiliate URL
// ============================================================

const picks = [
  {
    cat: "Mouse",
    badge: "ceo",
    badgeText: "CEO'S CHOICE",
    image: "images/mouse.png",
    emoji: "🖱️",
    name: "Redragon M719 Antonium",
    stars: 5,
    desc: "10,000 DPI, 7 programmable buttons, RGB. Pro-grade sensor without the pro price tag.",
    priceNow: "$16.99",
    priceOld: "$24.99",
    discount: "-32%",
    link: "https://amzn.to/4c5kBNg"
  },
  {
    cat: "Keyboard",
    badge: "hot",
    badgeText: "🔥 BEST SELLER",
    image: "images/teclado.png",
    emoji: "⌨️",
    name: "Redragon K552 Mechanical",
    stars: 5,
    desc: "Compact TKL, tactile Blue switches, splash-proof. The #1 rated mechanical keyboard under $40 on Amazon.",
    priceNow: "$36.99",
    priceOld: "$55.00",
    discount: "-33%",
    link: "https://amzn.to/4c5V8nc"
  },
  {
    cat: "Headset",
    badge: "ceo",
    badgeText: "CEO'S CHOICE",
    image: "images/headset.png",
    emoji: "🎧",
    name: "PRO WIRELESS GAMING HEADSET",
    stars: 5,
    desc: "Experience total freedom with triple-mode connectivity and an industry-leading 100-hour battery. Pro-grade 7.1 Virtual Surround Sound and noise-canceling mic for elite gaming performance without the wires.",
    priceNow: "$35.98",
    priceOld: "$49.99",
    discount: "-28%",
    link: "https://amzn.to/4mjCnkU"
  },
  {
    cat: "Accessories",
    badge: "best",
    badgeText: "BEST SELLER",
    image: "images/mousepad.png",
    emoji: "🖱️",
    name: "RGB EXTENDED GAMING MOUSE PAD",
    stars: 5,
    desc: "Massive 31.5 x 12 inch surface with 14 stunning lighting modes. Non-slip rubber base and waterproof coating for the ultimate pro setup.",
    priceNow: "$14.99",
    priceOld: "$16.99",
    discount: "-12%",
    link: "https://amzn.to/3NZ6xx5"
  },
  
  // Add more picks below — copy and paste a block above, then edit the values.
  // Example:
  // ,{
  //   cat: "Headset",
  //   badge: "new",
  //   badgeText: "NEW",
  //   image: "images/hyperx-stinger.jpg",
  //   emoji: "🎧",
  //   name: "HyperX Cloud Stinger",
  //   stars: 4,
  //   desc: "Ultra-light, 90° rotating ear cups. Gaming-grade audio for any budget.",
  //   priceNow: "$29.99",
  //   priceOld: "$49.99",
  //   discount: "-40%",
  //   link: "https://amzn.to/XXXXXXX"
  // }
];
