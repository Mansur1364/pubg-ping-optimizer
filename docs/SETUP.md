# 📖 راهنمای نصب و راه‌اندازی

## الزامات سیستمی

- **Node.js** 14+ (برای Backend)
- **npm** یا **yarn** (مدیریت بسته)
- **MongoDB** (پایگاه داده)
- **Git** (کنترل نسخه)

## مرحله 1: دانلود پروژه

```bash
git clone https://github.com/Mansur1364/pubg-ping-optimizer.git
cd pubg-ping-optimizer
```

## مرحله 2: نصب MongoDB

### Windows/Mac/Linux
```bash
# دانلود از: https://www.mongodb.com/try/download/community
# یا استفاده از Homebrew (Mac)
brew install mongodb-community

# شروع MongoDB
mongod
```

## مرحله 3: تنظیم Backend

```bash
cd backend

# نصب وابستگی‌ها
npm install

# ایجاد فایل .env
echo 'JWT_SECRET=your-super-secret-key-123' > .env
echo 'MONGODB_URI=mongodb://localhost:27017/pubg-optimizer' >> .env
echo 'PORT=5000' >> .env

# اجرای سرور
npm run dev
```

**خروجی موفق:**
```
✅ MongoDB متصل شد
🚀 سرور در پورت 5000 اجرا می‌شود
✅ API آماده است!
```

## مرحله 4: تنظیم Mobile

```bash
cd ../mobile

# نصب وابستگی‌ها
npm install
```

### اجرا برای iOS
```bash
npm run ios
```

### اجرا برای Android
```bash
npm run android
```

## مرحله 5: تست API

### ثبت‌نام کاربر جدید
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "mansur",
    "email": "mansur@example.com",
    "password": "password123"
  }'
```

### ورود
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "mansur@example.com",
    "password": "password123"
  }'
```

### دریافت سرورها
```bash
curl http://localhost:5000/api/servers
```

### بررسی پینگ
```bash
curl -X POST http://localhost:5000/api/ping \
  -H "Content-Type: application/json" \
  -d '{"server": "Asia-Seoul"}'
```

## 📱 استفاده از برنامه

### صفحه پینگ
1. اپلیکیشن را باز کنید
2. روی "پینگ" تپ کنید
3. سرور را انتخاب کنید
4. پینگ به‌صورت خودکار بررسی می‌شود

### صفحه ساعت
1. روی "ساعت" تپ کنید
2. ساعت محلی در بالا نمایش داده می‌شود
3. تمام مناطق زمانی در زیر دیده می‌شوند

### صفحه تنظیمات
1. روی "تنظیمات" تپ کنید
2. اطلاعات حساب کاربری را ببینید
3. تنظیمات برنامه را مدیریت کنید

## 🔧 حل مشکلات

### خطا: MongoDB متصل نشد
```bash
# مطمئن شوید MongoDB اجرا می‌شود
mongod

# یا اگر از Docker استفاده می‌کنید
docker run -d -p 27017:27017 mongo
```

### خطا: Port 5000 در حال استفاده است
```bash
# Port مختلف را مشخص کنید
PORT=5001 npm run dev
```

### خطا: وابستگی‌ها نصب نشدند
```bash
# پاک کردن و نوباره نصب
rm -rf node_modules package-lock.json
npm install
```

## 📚 منابع بیشتر

- [مستندات React Native](https://reactnative.dev/)
- [مستندات Express.js](https://expressjs.com/)
- [مستندات MongoDB](https://docs.mongodb.com/)
- [JWT Authentication](https://jwt.io/)

## 💬 پشتیبانی

اگر مشکلی دارید:
1. [Issues](https://github.com/Mansur1364/pubg-ping-optimizer/issues) را بررسی کنید
2. Issue جدید ایجاد کنید
3. توضیح دقیقی از مشکل دهید

---

**موفق باشید! 🎮🚀**