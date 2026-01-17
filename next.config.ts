/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Разрешаем билд даже с ошибками типов
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорируем ошибки линтера при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;