var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "browser", // or "node"
    sources: [
        "lib/mylib.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}

// Add more configuration groups as needed