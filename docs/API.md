# 📡 مستندات API

## پایه URL
```
http://localhost:5000/api
```

## احراز هویت

### ثبت‌نام (Register)
```http
POST /auth/register
Content-Type: application/json

{
  "username": "mansur",
  "email": "mansur@example.com",
  "password": "password123",
  "phone": "09123456789"
}
```

**پاسخ موفق (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "mansur",
    "email": "mansur@example.com"
  }
}
```

---

### ورود (Login)
```http
POST /auth/login
Content-Type: application/json

{
  "email": "mansur@example.com",
  "password": "password123"
}
```

**پاسخ موفق (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "mansur",
    "email": "mansur@example.com",
    "region": "Asia-Seoul"
  }
}
```

---

### دریافت پروفایل (Get Profile)
```http
GET /auth/profile
Authorization: Bearer {token}
```

**پاسخ موفق (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "mansur",
  "email": "mansur@example.com",
  "region": "Asia-Seoul",
  "preferences": {
    "autoConnect": false,
    "notifications": true,
    "theme": "dark"
  },
  "stats": {
    "totalSessions": 42,
    "averagePing": 52,
    "bestServer": "Asia-Seoul"
  }
}
```

---

### به‌روز‌رسانی ترجیحات (Update Preferences)
```http
PUT /auth/preferences
Authorization: Bearer {token}
Content-Type: application/json

{
  "preferences": {
    "autoConnect": true,
    "notifications": false,
    "theme": "light"
  }
}
```

---

### به‌روز‌رسانی آمار (Update Stats)
```http
PUT /auth/stats
Authorization: Bearer {token}
Content-Type: application/json

{
  "totalSessions": 43,
  "averagePing": 51,
  "bestServer": "Asia-Shanghai"
}
```

---

## سرورها

### دریافت لیست سرورها (Get Servers)
```http
GET /servers
```

**پاسخ (200):**
```json
[
  {
    "server": "Asia-Seoul",
    "region": "کوریای جنوبی",
    "ping": 45,
    "status": "good"
  },
  {
    "server": "Asia-Shanghai",
    "region": "چین",
    "ping": 55,
    "status": "good"
  }
]
```

---

### بررسی پینگ (Check Ping)
```http
POST /ping
Content-Type: application/json

{
  "server": "Asia-Seoul"
}
```

**پاسخ (200):**
```json
{
  "server": "Asia-Seoul",
  "ping": 45,
  "status": "good",
  "timestamp": "2026-09-01T09:45:00Z"
}
```

---

## وضعیت سرور

### Health Check
```http
GET /health
```

**پاسخ (200):**
```json
{
  "status": "✅ سرور فعال است",
  "timestamp": "2026-09-01T09:45:00Z"
}
```

---

## کدهای خطا

| کد | توضیح |
|-----|-------|
| 200 | درخواست موفق |
| 201 | منبع ایجاد شد |
| 400 | درخواست نامعتبر |
| 401 | احراز هویت ناکام |
| 404 | منبع یافت نشد |
| 500 | خطای سرور |

---

## نکات مهم

✅ **token** را در header `Authorization: Bearer {token}` ارسال کنید

✅ تمام درخواست‌ها باید `Content-Type: application/json` باشند

✅ token مدت اعتبار 7 روز دارد

✅ رمز عبور با bcrypt رمزگذاری می‌شود