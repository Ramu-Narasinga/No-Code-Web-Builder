module.exports = {
  apps: [
    {
      name: 'ncwb',
      script: './dist/app.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: '8080'
      }
    }
  ]
};
