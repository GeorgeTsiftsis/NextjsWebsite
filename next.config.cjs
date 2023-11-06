// const { parsed: myEnv } = require("dotenv").config();
// import withOptimizedImages from "next-optimized-images";

// export default withOptimizedImages({
//   reactStrictMode: true,
//   images: {
//     // remotePatterns: [ {
//     //   protocol: 'https',
//       domains: ["firebasestorage.googleapis.com"],
//       // pathname: '**',

  
//     // }]
//   },
//   build: {

//     commonjsOptions: { include: [] },
//   }
// });
// module.exports = { images: { domains: ['firebasestorage.googleapis.com'], formats: ['image/avif', 'image/webp'], }, }


module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "firebasestorage.googleapis.com",
        port: '',
        pathname: '/u/0/project/initialise-6d68a/storage/initialise-6d68a.appspot.com/files',
      },
    ],
  },
}
