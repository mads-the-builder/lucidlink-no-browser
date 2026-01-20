export default {
  defaultBrowser: "Google Chrome",
  options: {
    hideIcon: true
  },
  rewrite: [
    {
      match: "app.lucidlink.com/l/*",
      url: (url) => {
        return `lucidlink://direct-link?linkPath=${url.pathname}`;
      }
    }
  ],
  handlers: [
    {
      match: "lucidlink://*",
      browser: "com.lucidlink.app"
    }
  ]
};
