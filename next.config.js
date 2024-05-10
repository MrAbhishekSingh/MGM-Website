// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle APK files
        config.module.rules.push({
            test: /\.(apk)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/images/', // This is where the files will be moved to after being processed
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};
