import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

/**
 * CONFIGURATION POUR GITHUB PAGES
 * --------------------------------
 * Si votre URL est https://AbdelkaderTalbi.github.io/portfolio/, alors :
 * repoName = '/portfolio'
 * Si votre URL est https://AbdelkaderTalbi.github.io/, alors :
 * repoName = ''
 */
const repoName = '/portfolio'; 

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Le basePath et l'assetPrefix doivent correspondre pour que le CSS se charge
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? `${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
