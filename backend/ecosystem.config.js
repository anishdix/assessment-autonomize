// module.exports = {
//   apps: [
//     {
//       name: 'assignment-backend',
//       script: './src/index.js',
//       instances: 1,
//       autorestart: true,
//       watch: false,
//       max_memory_restart: '1G',
//       env: {
//         NODE_ENV: 'development',
//         PORT: 3000,
//         MONGODB_URL: 'your-mongodb-url-here'
//       },
//       env_production: {
//         NODE_ENV: 'production',
//         PORT: process.env.PORT || 3000,
//         MONGODB_URL: process.env.MONGODB_URL 
//       }
//     }
//   ]
// };
