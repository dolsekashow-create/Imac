import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // يسمح بفتح سيرفر التطوير من نفس الجهاز بأي اسم مضيف
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.4'],
}

export default nextConfig
