const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = (env) => {
    const isDev = env.MODE === "development";
    return {
        entry: path.resolve(__dirname, "src", 'index.js'),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash:8].js",
            clean: true,
            assetModuleFilename: "assets/[name].[contenthash:8][ext]",
        },
        mode: env.MODE || 'development',
        devtool: isDev ? "source-map" : undefined,
        resolve: {
            alias: {
                "src": path.resolve(__dirname, "src/"),
                "public": path.resolve(__dirname, "../public/"),
            }
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    use: {
                        loader: "html-loader",
                    },
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss?$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    // localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                                    localIdentName: "[local]",
                                }
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: ["postcss-preset-env"],
                                },
                            },
                        },
                        "sass-loader"
                    ]
                },
                {
                    test: /\.woff2?$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "fonts/[name].[ext]",
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|webp|svg)$/i,
                    type: "asset/resource",
                    use: [
                        {
                            loader: "image-webpack-loader",
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: true,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html"),
            }),
        ],
        devServer: {
            watchFiles: path.join(__dirname, 'src'),
            port: 3004,
            open: true,
            hot: true
        }
    }
}