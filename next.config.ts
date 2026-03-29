import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
// If your repository is named AbdelkaderTalbi.github.io, it is a User Site and served at root (basePath = '')
// If your repository is named 'portfolio', it is a Project Site and served at /portfolio/ (basePath = '/portfolio')
const repoName = 'portfolio'; 
const isUserSite = repoName.endsWith('.github.io');

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  // Use empty string for User Site, or repo name for Project Site
  basePath: isProd && !isUserSite ? `/${repoName}` : '',
  // assetPrefix should be used with caution as basePath usually handles it
  assetPrefix: isProd && !isUserSite ? `/${repoName}` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && !isUserSite ? `/${repoName}` : '',
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
