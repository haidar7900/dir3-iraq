const blacklist = ["phishing.com", "malicious.site", "dangerous.link"];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (blacklist.includes(url.hostname)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

