/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The starter ships with trusted, locally-generated SVG placeholders in
    // /public/images. Allowing SVG here lets next/image optimize them exactly
    // like the real .jpg photos that will replace them later. All images are
    // first-party static files, so this is safe.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
