module.exports = {
  mode: 'scp',
  entry: './src',
  output: './dist',
  deploy: {
    projectName: 'node',
    rootPath: '/root/webroot',
    connectOptions: {
      host: '1.13.5.52',
      user: 'root'
    }
  }
}