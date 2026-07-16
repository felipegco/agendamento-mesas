/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site 100% estático (pasta "out") — não precisa de servidor Node
  // nem de banco de dados. É só isso que você vai hospedar.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
