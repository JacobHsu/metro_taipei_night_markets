// 環境變數載入器
// 這個文件會嘗試從不同來源載入配置

let GOOGLE_MAPS_API_KEY = '';
let APP_CONFIG = {};

// 方法 1: 嘗試從 config.js 載入（本地開發推薦）
try {
    // 檢查是否存在 CONFIG 全域變數（從 config.js 載入）
    if (typeof window !== 'undefined' && window.CONFIG) {
        GOOGLE_MAPS_API_KEY = window.CONFIG.GOOGLE_MAPS_API_KEY;
        APP_CONFIG = window.CONFIG.APP_CONFIG || {};
        console.log('✅ 從 config.js 載入配置');
    }
} catch (e) {
    console.log('📝 未找到 config.js，嘗試其他方法');
}

// 方法 2: 嘗試從環境變數載入（GitHub Actions 部署時）
if (!GOOGLE_MAPS_API_KEY && typeof process !== 'undefined' && process.env && process.env.GOOGLE_MAPS_API_KEY) {
    GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    console.log('✅ 從環境變數載入 API Key');
}

// 方法 3: 從 URL 參數載入（測試用）
if (!GOOGLE_MAPS_API_KEY) {
    const urlParams = new URLSearchParams(window.location.search);
    const apiKeyFromUrl = urlParams.get('apikey');
    if (apiKeyFromUrl) {
        GOOGLE_MAPS_API_KEY = apiKeyFromUrl;
        console.log('✅ 從 URL 參數載入 API Key');
    }
}

// 方法 4: 使用預設值（開發時的後備方案）
if (!GOOGLE_MAPS_API_KEY) {
    GOOGLE_MAPS_API_KEY = 'YOUR_LOCAL_DEV_API_KEY';
    console.log('⚠️ 使用預設 API Key');
}

// 導出最終配置
const CONFIG = {
    GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,

    // 地圖配置
    MAP_CONFIG: APP_CONFIG.MAP_CONFIG || {
        center: { lat: 25.0330, lng: 121.5654 },
        zoom: 12,
        mapTypeId: 'roadmap'
    },

    // 應用程式配置
    APP_CONFIG: APP_CONFIG || {
        title: '台北捷運夜市地圖',
        debug: false,
        language: 'zh-TW'
    }
};

// 檢查 API Key 是否已正確設定
if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_LOCAL_DEV_API_KEY') {
    console.warn('⚠️ Google Maps API Key 未正確設定');
    console.log('📝 設定步驟：');
    console.log('1. 複製 config.sample.js 為 config.js');
    console.log('2. 編輯 config.js 並填入您的 API Key');
    console.log('3. 或在 URL 中加入 ?apikey=YOUR_API_KEY');
    console.log('4. 如何獲取 API Key: https://developers.google.com/maps/documentation/javascript/get-api-key');
}
