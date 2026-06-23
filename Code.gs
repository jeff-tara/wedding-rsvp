// 鄧兆琮 & 温棠如 婚禮 RSVP — Google Apps Script
// 貼入 Apps Script 編輯器後部署為「網頁應用程式」

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data['姓名']       || '',
    data['電話']       || '',
    data['與新人關係'] || '',
    data['出席狀態']   || '',
    data['出席人數']   || '',
    data['同行者']     || '',
    data['兒童座椅']   || '',
    data['飲食需求']   || '',
    data['飲食備註']   || '',
    data['交通方式']   || '',
    data['接送地點']   || '',
    data['祝福語']     || '',
    data['備註']       || '',
    data['填寫時間']   || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 手動測試用（可忽略）
function doGet() {
  return ContentService.createTextOutput('RSVP endpoint is live.');
}
