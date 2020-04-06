const babelConfig = {
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ]
}

module.exports = babelConfig;