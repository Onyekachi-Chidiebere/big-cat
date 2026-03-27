import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home.html", destination: "/", permanent: true },
      { source: "/bigcat-security.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/who-we-are", destination: "/about", permanent: true },
      { source: "/what-we-do.html", destination: "/what-we-do", permanent: true },
      {
        source: "/security-guards.html",
        destination: "/security-guards",
        permanent: true,
      },
      {
        source: "/event-security.html",
        destination: "/event-security",
        permanent: true,
      },
      {
        source: "/door-supervisors.html",
        destination: "/door-supervisors",
        permanent: true,
      },
      {
        source: "/threat-intelligence.html",
        destination: "/threat-intelligence",
        permanent: true,
      },
      { source: "/work-for-us.html", destination: "/work-for-us", permanent: true },
    ];
  },
};

export default nextConfig;
