export default {
  defaultBrowser: "Safari",
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
