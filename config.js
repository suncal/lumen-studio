/* LUMEN Studio — fill these two blocks when going live.
 * Everything else on the site reads from here. */
window.LUMEN_CONFIG = {
  // Cloud engine URL (the deployed Cloudflare Worker from cloud/README.md).
  // Empty string = same-origin (the local engine at http://127.0.0.1:8377).
  CLOUD_API: "https://lumen-cloud.sunnyatlanta20.workers.dev",

  // Checkout links — create one Gumroad product per pack and paste the URLs.
  // For AUTOMATIC key delivery on each Gumroad product:
  //   1. enable "Generate license keys"
  //   2. set the post-purchase redirect to  <site>/success.html?pack=<spark|creator|pro>
  //   3. put the product's product_id into the worker vars (cloud/wrangler.toml)
  // Buyer pays -> pastes their license on success.html -> key minted instantly.
  // "#" keeps the button in "coming soon" mode.
  PAY: {
    spark:   "#",   // $9  / 200 credits
    creator: "#",   // $29 / 800 credits
    pro:     "#",   // $79 / 2,500 credits
  },

  SUPPORT_EMAIL: "sunnyatlanta20@gmail.com",
};
