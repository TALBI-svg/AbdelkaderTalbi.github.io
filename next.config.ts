import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
// Replace 'portfolio' with your actual GitHub repository name if it's different
const repoName = 'portfolio'; 

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Required for GitHub Pages static export
  trailingSlash: true,
  // If deploying to a Project Site (e.g., username.github.io/repo/), set basePath
  // If deploying to a User Site (e.g., username.github.io/), leave basePath empty
  basePath: isProd ? `/${repoName}` : '',
  // assetPrefix is crucial for CSS/JS files on GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
