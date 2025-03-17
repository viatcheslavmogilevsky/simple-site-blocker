document.addEventListener('DOMContentLoaded', function() {
  // Load saved blocked sites
  chrome.storage.sync.get(['blockedSites'], function(result) {
    const sites = result.blockedSites || [];
    document.getElementById('blockedSites').value = sites.join('\n');
  });

  // Save button click handler
  document.getElementById('save').addEventListener('click', function() {
    const sites = document.getElementById('blockedSites').value
      .split('\n')
      .map(site => site.trim())
      .filter(site => site !== '');

    chrome.storage.sync.set({
      blockedSites: sites
    }, function() {
      const status = document.getElementById('status');
      status.textContent = 'Sites saved!';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    });
  });
});
