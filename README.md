# Low Budget Gaming

Affiliate site linking to Amazon gaming deals.

## How to add/edit products

Open **`picks.js`** and add a new object to the `picks` array. Each product has these fields:

```js
{
  cat: "Mouse",           // Category label shown on the card
  badge: "ceo",           // "ceo" | "hot" | "new" | "" (no badge)
  badgeText: "CEO'S CHOICE",
  image: "images/my-photo.jpg",  // Path to image, or "" to use emoji
  emoji: "🖱️",            // Fallback if no image
  name: "Product Name",
  stars: 5,               // 1–5
  desc: "Short description of the product.",
  priceNow: "$16.99",
  priceOld: "$24.99",     // Leave "" to hide
  discount: "-32%",       // Leave "" to hide
  link: "https://amzn.to/XXXXXXX"
}
```

## How to add a product photo

1. Put the image file inside the `/images/` folder (create it if it doesn't exist).
2. Set `image: "images/your-file.jpg"` on the pick.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. No build step needed — it's plain HTML/CSS/JS.
4. Done. Vercel auto-deploys on every push to `main`.
