# 🎮 PUBG Ping Optimizer + 🕐 Digital Clock

یک برنامه موبایلی جامع برای بهینه‌سازی پینگ PUBG و نمایش ساعت جهانی

## ✨ ویژگی‌های اصلی

### 📊 بخش پینگ
- ✅ نمایش پینگ لحظه‌ای
- ✅ لیست سرورهای PUBG
- ✅ بررسی پینگ برای هر سرور
- ✅ رنگ‌بندی وضعیت (سبز/زرد/قرمز)
- ✅ سفارش بهترین سرور

### 🕐 بخش ساعت
- ✅ ساعت دیجیتالی (HH:MM:SS)
- ✅ نمایش 16 منطقه زمانی
- ✅ به‌روز‌رسانی هر ثانیه
- ✅ پرچم‌های کشورها
- ✅ نمایش تاریخ فارسی

### ⚙️ بخش تنظیمات
- ✅ اطلاعات حساب کاربری
- ✅ تنظیمات برنامه
- ✅ اطلاعات نسخه

### 🔐 احراز هویت
- ✅ ثبت‌نام و ورود کاربر
- ✅ رمزگذاری رمز عبور (bcrypt)
- ✅ توکن JWT
- ✅ ذخیره‌سازی پروفایل

## 📱 مناطق زمانی

```
🇮🇷 تهران       🇦🇪 دوبی         🇵🇰 کراچی        🇺🇿 تاشکند
🇰🇷 سئول       🇨🇳 شانگهای      🇹🇼 تایپه        🇹🇭 بانکوک
🇸🇬 سنگاپور     🇭🇰 هنگ کنگ     🇯🇵 توکیو        🇬🇧 لندن
🇫🇷 پاریس       🇺🇸 نیویورک      🇺🇸 لس آنجلس    🇦🇺 سیدنی
```

## 🏗️ ساختار پروژه

```
pubg-ping-optimizer/
├── mobile/                    # React Native
│   ├── App.tsx               # Navigation و Tabs
│   ├── screens/
│   │   └── ClockScreen.tsx   # صفحه ساعت
│   └── package.json
├── backend/                   # Node.js API
│   ├── server.js             # Express سرور
│   ├── models/
│   │   └── User.js           # Schema کاربر
│   ├── controllers/
│   │   └── authController.js # Login/Register
│   ├── routes/
│   │   └── authRoutes.js     # Routes
│   ├── middleware/
│   │   └── auth.js           # JWT Middleware
│   └── package.json
├── docs/
│   └── SETUP.md              # راهنمای نصب
├── .gitignore
└── README.md
```

## 🛠️ تکنولوژی‌های استفاده‌شده

### Frontend
- **React Native** - توسعه موبایل
- **TypeScript** - برنامه‌نویسی ایمن
- **Axios** - درخواست‌های HTTP

### Backend
- **Node.js** - سرور
- **Express** - فریم‌ورک وب
- **MongoDB** - پایگاه داده
- **JWT** - احراز هویت
- **bcryptjs** - رمزگذاری

## 🚀 شروع سریع

### نصب وابستگی‌ها

```bash
# Backend
cd backend
npm install

# Mobile
cd ../mobile
npm install
```

### اجرای سرور

```bash
cd backend
npm run dev
```

سرور در `http://localhost:5000` اجرا می‌شود

### اجرای برنامه موبایلی

```bash
# iOS
npm run ios

# Android
npm run android
```

## 📡 API Endpoints

### احراز هویت
```
POST   /api/auth/register    - ثبت‌نام
POST   /api/auth/login       - ورود
GET    /api/auth/profile     - دریافت پروفایل
PUT    /api/auth/preferences - ترجیحات
PUT    /api/auth/stats       - آمار کاربر
```

### Ping
```
GET    /api/servers          - دریافت سرورها
POST   /api/ping             - بررسی پینگ
GET    /api/recommendations  - سفارش سرورها
GET    /api/health           - وضعیت سرور
```

## 📊 ساختار پایگاه داده

### کاربر (User)
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  phone: String,
  region: String,
  preferences: {
    autoConnect: Boolean,
    notifications: Boolean,
    theme: 'dark' | 'light'
  },
  stats: {
    totalSessions: Number,
    averagePing: Number,
    bestServer: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 طراحی رابط کاربری

- **تم**: تاریک (Dark Mode)
- **رنگ اصلی**: آبی (#2196F3)
- **فونت**: سیستمی و Monospace
- **Tab Navigation**: 3 بخش اصلی

## 📝 نکات مهم

⚠️ **متغیرهای محیطی مورد نیاز:**
```
.env
JWT_SECRET=your-secret-key
MONGODB_URI=mongodb://localhost:27017/pubg-optimizer
PORT=5000
```

## 🔒 امنیت

- ✅ رمزگذاری رمز عبور با bcrypt
- ✅ توکن JWT برای احراز هویت
- ✅ CORS فعال شده
- ✅ تایید ورودی

## 📈 نقشه راه آینده

- [ ] VPN Integration
- [ ] Push Notifications
- [ ] Analytics Dashboard
- [ ] Multiplayer Gaming Features
- [ ] Cloud Deployment

## 👨‍💻 توسعه‌دهنده

**Mansur1364**
- GitHub: [@Mansur1364](https://github.com/Mansur1364)
- Repository: [pubg-ping-optimizer](https://github.com/Mansur1364/pubg-ping-optimizer)

## 📄 لایسنس

MIT License - آزادانه استفاده کنید!

---

**ساخت شده با ❤️ برای بازی‌کنندگان PUBG**
