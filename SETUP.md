# 設定指南

## 🔧 本地開發設定

### 步驟 1：複製配置文件

```bash
cp config.sample.js config.js
```

### 步驟 2：編輯配置文件

打開 `config.js` 並編輯以下內容：

```javascript
const CONFIG = {
    // 將此處替換為您的實際 Google Maps API Key
    GOOGLE_MAPS_API_KEY: 'AIzaSyC4R6AN7SmxxdKVQjQjQOBXOOXXXXXXXXX',
    
    // 其他設定可保持預設值
    MAP_CONFIG: {
        center: { lat: 25.0330, lng: 121.5654 },
        zoom: 12,
        mapTypeId: 'roadmap'
    },
    
    APP_CONFIG: {
        title: '台北捷運夜市地圖',
        debug: false,
        language: 'zh-TW'
    }
};
```

### 步驟 3：啟動本地服務器

使用以下任一方法：

**方法 A：VS Code Live Server**
1. 安裝 Live Server 擴展
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

**方法 B：Python 簡易服務器**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**方法 C：Node.js serve**
```bash
npx serve .
```

## 🌐 GitHub Pages 部署設定

### 方法 1：使用 GitHub Actions（推薦）

1. **設定 GitHub Secret**
   - 前往倉庫頁面
   - 點擊 Settings → Secrets and variables → Actions
   - 點擊 "New repository secret"
   - Name: `GOOGLE_MAPS_API_KEY`
   - Secret: 您的 Google Maps API Key
   - 點擊 "Add secret"

2. **啟用 GitHub Pages**
   - 前往 Settings → Pages
   - Source 選擇 "GitHub Actions"

3. **推送代碼**
   ```bash
   git add .
   git commit -m "Add night market map"
   git push origin main
   ```

### 方法 2：純靜態部署

如果不想使用 GitHub Actions：

1. **編輯 env-loader.js**
   ```javascript
   // 找到這一行並替換
   GOOGLE_MAPS_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
   ```

2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Add API key for static deployment"
   git push origin main
   ```

3. **啟用 GitHub Pages**
   - Settings → Pages
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 "main"

## 🔑 獲取 Google Maps API Key

### 步驟 1：前往 Google Cloud Console
訪問：https://console.cloud.google.com/

### 步驟 2：創建或選擇項目
- 如果沒有項目，點擊 "Create Project"
- 輸入項目名稱，例如 "taipei-night-markets"

### 步驟 3：啟用 Maps JavaScript API
1. 在左側選單中找到 "APIs & Services" → "Library"
2. 搜尋 "Maps JavaScript API"
3. 點擊並啟用

### 步驟 4：創建 API Key
1. 前往 "APIs & Services" → "Credentials"
2. 點擊 "Create Credentials" → "API key"
3. 複製生成的 API Key

### 步驟 5：設定 API Key 限制（建議）
1. 點擊剛創建的 API Key
2. 在 "Application restrictions" 中選擇 "HTTP referrers"
3. 添加您的網域，例如：
   - `localhost:*`（本地開發）
   - `*.github.io/*`（GitHub Pages）
   - `yourdomain.com/*`（自訂網域）

## 🚨 常見問題

### Q: 地圖無法載入
**A:** 檢查以下項目：
- API Key 是否正確
- 是否已啟用 Maps JavaScript API
- 檢查瀏覽器控制台的錯誤訊息

### Q: API Key 限制錯誤
**A:** 確認 API Key 設定中的網域限制包含您的網站網域

### Q: 本地開發時無法載入
**A:** 確認：
- `config.js` 文件存在且格式正確
- API Key 已正確填入
- 使用 HTTP 服務器而非直接開啟 HTML 文件

### Q: GitHub Pages 部署失敗
**A:** 檢查：
- GitHub Secret 名稱是否為 `GOOGLE_MAPS_API_KEY`
- GitHub Actions 工作流程是否正確執行
- 查看 Actions 頁面的錯誤日誌

## 📞 支援

如果遇到問題，請：
1. 檢查瀏覽器控制台的錯誤訊息
2. 確認 API Key 設定正確
3. 查看 GitHub Issues 或創建新的 Issue
