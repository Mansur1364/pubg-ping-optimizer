# Setup Guide 🚀

## Prerequisites
- Node.js (v14+)
- npm or yarn
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS)

## Backend Setup

### 1. Navigate to backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
cat > .env << EOF
PORT=5000
NODE_ENV=development
EOF
```

### 4. Start the server
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## Mobile Setup

### 1. Navigate to mobile directory
```bash
cd mobile
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run on Android
```bash
npm run android
```

### 4. Run on iOS
```bash
npm run ios
```

## API Endpoints

### Get all servers
```
GET /api/servers
```

### Check ping for specific server
```
POST /api/ping
Body: { "server": "Asia-Seoul" }
```

### Get recommended servers
```
GET /api/recommendations
```

### Health check
```
GET /api/health
```

## Testing

### Backend
```bash
cd backend
npm test
```

### Mobile
```bash
cd mobile
npm test
```
