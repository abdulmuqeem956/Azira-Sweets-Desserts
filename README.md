# Azira Sweets & Desserts — Website Guide

All files live in ONE folder. No subfolders. Upload them all together, side by side.

Files:
- `index.html` (the page), `style.css` (looks), `script.js` (prices, names, buttons)
- `logo.png` (light mode) and `logo-dark.png` (dark mode, same logo with black letters turned cream)
- Your 5 dessert photos (add these yourself, see below)

## 1. Logo
Already added. To change it, replace `logo.png` and `logo-dark.png` and keep the same names.

## 2. Dessert photos
Save your photos in the SAME folder as `index.html`, with these exact names:
`bottle-gourd-dessert.jpg`, `apricot-dessert.jpg`, `kaddu-ka-halwa.jpg`, `carrot-halwa.jpg`, `beetroot-halwa.jpg`.
Until you add them, cards show a soft "Add photo" panel. Tip: 1600x1200 pixels, under 300 KB each.

## 3. Change prices
Open `script.js`. At the top find `CONFIG`. Each dessert has:
`prices: { "250g": "₹130", "500g": "₹200" }`
Change the text in quotes. Replace `₹[ADD PRICE]` with real prices.

## 4. Change dessert names
Same place. Change `name: "..."`. If you rename a photo, change `image: "..."` too.

## 5. Change phone number
In `script.js` change `phone` and `whatsapp` (WhatsApp needs 91 in front, no + or spaces). Then in `index.html` search for `9100767096` and replace it.

## 6. Add Instagram
In `script.js`: `instagram: "https://instagram.com/yourname"`. "Coming soon" turns into a link.

## 7. Change brand colours
Top of `style.css`: `--bur` (burgundy), `--cream`, `--gold`. Moving background colours: `--b1` to `--b4`.

## 8. Gradient strength
`style.css`, change `--glow` (0 to 1).

## 9. Animation speed
`style.css`, change `--slow` (1 normal, 2 twice as slow, 0.5 faster).

## 10. See the website
Double-click `index.html`.

## 11. Publish on GitHub Pages (free)
1. Create a new repository on github.com.
2. Click "Add file" > "Upload files". Drag in ALL the files (no folders needed).
3. Commit changes.
4. Go to Settings > Pages. Under "Branch" choose `main` and `/ (root)`, then Save.
5. After a minute your site is live at the link shown there.
(Netlify Drop also works: drag the files to app.netlify.com/drop.)

## Other edits
- Reviews: in `index.html` search `REPLACE WITH REAL CUSTOMER REVIEW` (3 places).
- FAQ answers and occasions: in `script.js`. Fill in the minimum order answer.
- Google title and description: top of `index.html`.
