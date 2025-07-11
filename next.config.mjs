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
