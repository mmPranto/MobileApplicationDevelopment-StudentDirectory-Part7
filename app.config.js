// app.config.js
export default ({ config }) => ({
  ...config,
  name: "StudentDirectory",
  slug: "StudentDirectory",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/myApp.jpeg",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/images/splash-icon.jpeg",
    resizeMode: "contain",
    backgroundColor: "#0D1F4E"
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.Pranto.StudentDirectory"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/ada.jpeg",
      backgroundColor: "#0D1F4E"
    },
    package: "com.Pranto.StudentDirectory"
  },
  web: {
    favicon: "./assets/images/favicon.jpeg"
  },
  extra: {
    eas: {
      projectId: "7399e919-bc74-4255-b3b1-eba48878e96e"
    },
    apiUrl:
      process.env.EXPO_PUBLIC_ENV === "production"
        ? "https://api.yourapp.com"
        : "http://localhost:3000"
  }
});