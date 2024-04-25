/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects() {
    return [{
      source: '/about',
        destination: '/',
      permanent: true,
    }]
  },
  images: {
    formats:['image/webp']
  },
};

export default nextConfig;
