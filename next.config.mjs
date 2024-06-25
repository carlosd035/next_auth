/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {                                 
                hostname: "lh3.googleusercontent.com", /* em producao teria de sair, apenas eu poderia acessar a imagem (por um Ur)*/
            }
        ],
    },
};

export default nextConfig;
