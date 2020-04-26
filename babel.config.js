const babelConfig = {
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: [
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ['import', {
            libraryName: '@material-ui',
            style: true
        }]
    ],
}

module.exports = babelConfig;