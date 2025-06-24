// 配置文件範例
// 複製此文件為 config.js 並填入您的實際設定值

const CONFIG = {
    // Google Maps API Key
    // 1. 前往 https://console.cloud.google.com/
    // 2. 創建或選擇項目
    // 3. 啟用 Maps JavaScript API
    // 4. 創建 API Key
    // 5. 設定 API Key 限制（建議）
    GOOGLE_MAPS_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE',
    
    // 地圖設定
    MAP_CONFIG: {
        // 預設地圖中心點（台北市）
        center: {
            lat: 25.0330,
            lng: 121.5654
        },
        // 預設縮放等級
        zoom: 12,
        // 地圖樣式（可選）
        mapTypeId: 'roadmap' // roadmap, satellite, hybrid, terrain
    },
    
    // 應用程式設定
    APP_CONFIG: {
        // 應用程式標題
        title: '台北捷運夜市地圖',
        // 是否顯示除錯資訊
        debug: false,
        // 語言設定
        language: 'zh-TW'
    }
};

// 環境檢查
if (CONFIG.GOOGLE_MAPS_API_KEY === 'YOUR_ACTUAL_API_KEY_HERE') {
    console.warn('⚠️ 請設定您的 Google Maps API Key');
    console.log('📝 步驟：');
    console.log('1. 複製 config.sample.js 為 config.js');
    console.log('2. 編輯 config.js 並填入您的 API Key');
    console.log('3. 確保 config.js 已加入 .gitignore');
}
