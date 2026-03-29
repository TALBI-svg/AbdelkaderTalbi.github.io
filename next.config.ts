import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

/**
 * CONFIGURATION POUR GITHUB PAGES
 * --------------------------------
 * 1. Si votre dépôt est 'AbdelkaderTalbi.github.io', laissez repoName = ''
 * 2. Si votre dépôt est 'mon-projet', mettez repoName = '/mon-projet'
 */
const repoName = ''; // <--- MODIFIEZ ICI (ex: '/portfolio' ou '')

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Le basePath est suffisant pour que Next.js gère les assets et les routes
  basePath: isProd ? repoName : '',
  // assetPrefix n'est généralement pas nécessaire si basePath est bien configuré
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
