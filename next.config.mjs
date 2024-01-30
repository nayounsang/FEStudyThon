/** @type {import('next').NextConfig} */
const imageHostLinks = [
  "opengraph.githubassets.com",
  "img1.daumcdn.net",
  "velog.velcdn.com",
];
const nextConfig = {
  images: {
    remotePatterns: imageHostLinks.map((e) => ({
      protocol: "https",
      hostname: e,
      port: "",
      pathname: "/**",
    })),
  },
};

export default nextConfig;
