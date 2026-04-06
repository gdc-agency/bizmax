module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos', // Output directory for video files
            },
          },
        ],
      },
    ],
  },
};
