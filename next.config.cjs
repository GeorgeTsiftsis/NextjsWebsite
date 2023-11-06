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

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "firebasestorage.googleapis.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
