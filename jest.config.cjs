module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],

  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

  moduleNameMapper: {
    // styles
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",

    // ✅ assets (images, fonts, etc.)
    "\\.(png|jpg|jpeg|gif|webp|avif|svg|eot|otf|ttf|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
}