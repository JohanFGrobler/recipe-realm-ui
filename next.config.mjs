/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects() {
    return [{
      source: '/logout',
        destination: '/',
      permanent: true,
    }]
  },
  images: {
    formats:['image/webp']
  },
};

export default nextConfig;
