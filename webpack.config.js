const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "survey_manager/public/js/survey_builder.js"), // Absolute path to avoid resolution issues
    output: {
        filename: "survey_bundle.js",
        path: path.resolve(__dirname, "survey_manager/public/js"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i, // Handling CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i, // Handling SCSS files (if you're using Sass)
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // Handling font files
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            "survey-creator-core": path.resolve(__dirname, "node_modules/survey-creator-core"),
        },
        extensions: ['.js', '.jsx'], // Add '.tsx' or '.ts' if using TypeScript
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000, // Adjust as needed
    }
};
