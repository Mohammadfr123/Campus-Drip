# How to Upload Your Own Images & Products

To customize the gallery and products with your own high-quality imagery, follow these steps:

### 1. Upload Your Images
1.  On the left-hand side of AI Studio, look for the **File Explorer**.
2.  Locate the `public/` folder.
3.  Click the **plus icon (+)** or **right-click** and select **Upload Files**.
4.  Upload your `.jpg`, `.png`, or `.webp` files here.
    *   *Tip: Use descriptive names like `hoodie-black.jpg`, `logo.png`, etc.*

### 2. Update the Product Gallery
All products are defined in `/src/data.ts`.
You can open this file and update the `image` paths to point to your new files:
```ts
// Example update in src/data.ts
{
  id: 1,
  name: "Signature ALCHE Hoodie",
  image: "/hoodie-black.jpg", // Change this to your uploaded file name
  ...
}
```

### 3. Update Logos or Backgrounds
*   **Logo**: Upload your logo as `logo.png` into the `public/` folder. The app will automatically pick it up.
*   **Hero Sections**: You can ask me to update specific sections (like the Vision section or the Street Style grid) by giving me the name of the file you uploaded.

### 4. Need Help?
Once you have uploaded the files, just send me a message like:
> "I've uploaded `vibe.jpg` and `new_hoodie.png`, please use them in the Hero gallery and the first product card."

I will then handle the code updates for you instantly!
