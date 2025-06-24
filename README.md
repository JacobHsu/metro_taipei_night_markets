# 台北捷運夜市地圖

一個互動式的台北捷運夜市地圖，顯示各大夜市的位置和對應的捷運站。

## 🚀 快速開始

### 本地開發

1. **複製配置文件**
   ```bash
   cp config.sample.js config.js
   ```

2. **設定 Google Maps API Key**
   - 編輯 `config.js` 文件
   - 將 `YOUR_ACTUAL_API_KEY_HERE` 替換為您的實際 API Key

3. **啟動本地服務器**
   - 使用 VS Code Live Server 擴展
   - 或任何其他靜態文件服務器

### 獲取 Google Maps API Key

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 創建或選擇項目
3. 啟用 **Maps JavaScript API**
4. 創建 **API Key**
5. 設定 API Key 限制（建議限制為特定網域）

## 📁 文件結構

```
metro_taipei_night_markets/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 部署配置
├── config.sample.js        # 配置文件範例
├── config.js              # 實際配置文件（不提交到 Git）
├── env-loader.js          # 環境變數載入器
├── index.html             # 主要 HTML 文件
├── .gitignore             # Git 忽略文件
└── README.md              # 說明文件
```

## 🌐 部署到 GitHub Pages

### 方法 1：使用 GitHub Actions（推薦）

1. **設定 GitHub Secret**
   - 前往倉庫 Settings → Secrets and variables → Actions
   - 新增 Secret：`GOOGLE_MAPS_API_KEY`
   - 值為您的 Google Maps API Key

2. **推送代碼**
   ```bash
   git add .
   git commit -m "Add night market map"
   git push origin main
   ```

3. **啟用 GitHub Pages**
   - 前往 Settings → Pages
   - Source 選擇 "GitHub Actions"

### 方法 2：純靜態部署

如果您不想使用 GitHub Actions，可以：

1. 直接編輯 `env-loader.js`
2. 將 API Key 硬編碼（不推薦用於公開倉庫）
3. 推送到 GitHub Pages

## 🗺️ 功能特色

- **互動式地圖**：使用 Google Maps API
- **夜市標記**：顯示 22 個台北知名夜市
- **捷運線色彩**：標記顯示對應的捷運線顏色
- **點擊導航**：點擊夜市標記可開啟 Google Maps 導航
- **響應式設計**：適配各種螢幕尺寸

## 🎨 自訂設定

編輯 `config.js` 可以調整：

- **地圖中心點和縮放等級**
- **地圖樣式**（roadmap, satellite, hybrid, terrain）
- **應用程式標題**
- **除錯模式**

## 🔧 開發說明

### 添加新夜市

在 `index.html` 的 `nightMarkets` 陣列中添加：

```javascript
{
    name: "夜市名稱",
    coords: { lat: 緯度, lng: 經度 },
    station: "捷運站名 (線路代碼)"
}
```

### 捷運線顏色

支援的捷運線代碼和顏色：
- `G`: 松山新店線（綠色）
- `R`: 淡水信義線（紅色）
- `BL`: 板南線（藍色）
- `O`: 中和新蘆線（橘色）
- `BR`: 文湖線（棕色）
- `Y`: 環狀線（黃色）

## 📝 注意事項

- **不要提交 `config.js`** 到版本控制系統
- **設定 API Key 使用限制** 以避免濫用
- **定期檢查 API 使用量** 避免超出免費額度

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License
