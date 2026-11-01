/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Gera /privacidade/index.html, que a hospedagem estática (Hostinger) serve em /privacidade/.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
