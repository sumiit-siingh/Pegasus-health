/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // This object gives Next.js permission to use images from placehold.co
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Also adding this for the other placeholder
      },
      {
        protocol: "https",
        hostname: "akm-img-a-in.tosshub.com", // Also adding this for the other placeholder
      },
      {
        protocol: "https",
        hostname: "vychmc.com", // Also adding this for the other placeholder
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // Also adding this for the other placeholder
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com", // Also adding this for the other placeholder
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Also adding this for the other placeholder
      },
    ],
  },

  async headers() {
    // ... your headers function
    return [
      {
        source: "/:path*",
        headers: [
          // ... your security headers
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
