var statusCheckbox = document.getElementById('statusCheckbox');

if (statusCheckbox) {
  statusCheckbox.addEventListener('click', changeState);
  function loadData() {
    chrome.storage.sync.get('seizafeStatusStorage', function (data) {
        if (data.seizafeStatusStorage == 'ON') {
          statusCheckbox.checked = true;
        } else {
          statusCheckbox.checked = false;
        }
    });
  }
  loadData();
}