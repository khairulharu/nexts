/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [
               {
                    hostname: 'aceternity.com',
               },
               {
                    hostname: 'images.unsplash.com',
               },
               {
                    hostname: 'assets.aceternity.com',
               },
               {
                    hostname: 'cdn.pixabay.com',
               }
          ],
     },
};

export default nextConfig;
