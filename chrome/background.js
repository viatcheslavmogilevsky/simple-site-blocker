chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if(details.frameId == 0) {
    chrome.storage.sync.get(['blockedSites'], function(result) {
      const blockedSites = result.blockedSites || [];
      const url = new URL(details.url);

      const matched = blockedSites.filter(site => url.hostname.includes(site));
      for (const matched_element of matched) {
        const regex = new RegExp(`(^|\\\.)${matched_element}$`);
        if (regex.test(url.hostname)) {
          chrome.tabs.update(details.tabId, {
            url: chrome.runtime.getURL('blocked.html?via='+encodeURI(matched_element))
          });
          break;
        }
      }
    });
  }
});
