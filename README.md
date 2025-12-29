# ScoutAI - Soccer Training & Injury Prevention Mobile App

![ScoutAI Logo](src/assets/logo.png)

A comprehensive AI-powered mobile application for semi-pro soccer players, combining personalized training drills, advanced injury prevention analytics, nutrition tracking, and real-time performance analysis.

## 🎯 Features

### Free Tier (100% Ad-Free)
✅ **AI-Generated Training Drills**
- Position-specific drills (GK, Defender, Midfielder, Forward)
- Customized by fitness level
- Video demonstrations included
- Adaptive difficulty based on performance

✅ **Advanced Injury Prevention**
- Real-time injury risk assessment (0-100 score)
- Position-specific injury predictions
- Acute:Chronic workload ratio analysis
- Fatigue threshold prediction
- Sleep quality impact on recovery

✅ **Health Metrics Integration**
- Training load tracking
- Heart rate variability monitoring
- Sleep tracking (duration, stages, disturbances)
- Resting heart rate monitoring
- GPS data integration

✅ **Personalized Recovery**
- AI-generated recovery plans
- Position-specific warm-up routines
- Adaptive cool-down routines
- Rest day recommendations
- Injury prevention exercises

✅ **Nutrition & Nutrition Tracking**
- Meal logging with macro tracking
- Calorie calculator
- Nutrient deficiency detection
- Recovery nutrition planning
- Anti-inflammatory food suggestions

✅ **Basic Scouting Tips**
- Technique guides
- Position-specific tips
- Tactical basics

### Premium Tier ($4.99/month)
✨ **Advanced Match Simulations**
- Game scenario training
- Decision-making drills
- Tactical pattern recognition

✨ **Tactical Breakdowns**
- Formation analysis
- Player positioning guides
- Game strategy insights

✨ **Advanced Analytics**
- Detailed performance dashboard
- Weekly progress reports
- Comparative metrics
- Training vs. Recovery balance

### Pro Tier ($9.99/month)
👑 **Live AI Coaching Chat**
- GPT-4 powered personalized coaching
- Real-time feedback on uploads
- Custom training plans
- Injury prevention consultations

👑 **Exclusive Transfer Alerts**
- Player movement monitoring
- Opportunity notifications
- Network insights

👑 **Priority Support**
- Direct email support
- Video coaching sessions
- Advanced video analysis

---

## 🏗️ Architecture

### Tech Stack

**Frontend**
```
React Native + Expo
TypeScript
React Navigation
Firebase SDK
Zustand (State Management)
Async Storage
```

**Backend**
```
Node.js + Express
Firebase (Firestore, Auth, Functions)
Stripe (Payments)
OpenAI API (Coaching)
```

**ML/AI**
```
Python + FastAPI
TensorFlow (Injury Prediction)
scikit-learn (Risk Modeling)
MediaPipe (Video Analysis)
OpenAI GPT-4
```

**Database**
```
Firestore (NoSQL)
Real-time Sync
Offline Support
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm/yarn
- Expo CLI
- Firebase account
- Stripe account (for payments)

### Installation

```bash
# Clone repository
git clone https://github.com/kinjal/scoutai.git
cd scoutai

# Install dependencies
npm install

# Install Expo CLI
npm install -g eas-cli

# Start development server
npm start
```

### Environment Variables

Create `.env` file:

```env
FIREBASE_API_KEY=your_firebase_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_DB_URL=your_firebase_db_url
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PREMIUM_PRICE_ID=price_xxx
STRIPE_PRO_PRICE_ID=price_yyy
OPENAI_API_KEY=your_openai_key
```

### Run on Device

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

---

## 📁 Project Structure

```
scoutai/
├── src/
│   ├── screens/              # Screen components
│   │   ├── auth/             # Login, SignUp
│   │   ├── home/             # Dashboard
│   │   ├── training/         # AI drills
│   │   ├── injury/           # Risk assessment
│   │   ├── nutrition/        # Meal tracking
│   │   ├── analytics/        # Performance metrics
│   │   └── settings/         # Profile, subscription
│   ├── components/           # Reusable components
│   ├── services/             # API services
│   │   ├── AuthService.ts
│   │   ├── TrainingService.ts
│   │   ├── InjuryPreventionService.ts
│   │   ├── NutritionService.ts
│   │   └── APIClient.ts
│   ├── context/              # Context providers
│   │   ├── AuthContext.tsx
│   │   ├── SubscriptionContext.tsx
│   │   └── WearableContext.tsx
│   ├── navigation/           # Navigation setup
│   ├── models/               # TypeScript interfaces
│   ├── utils/                # Helper functions
│   ├── assets/               # Images, icons
│   └── App.tsx               # Entry point
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── training.ts
│   │   │   ├── injury.ts
│   │   │   ├── nutrition.ts
│   │   │   └── subscription.ts
│   │   └── index.ts
│   └── package.json
├── ml-models/
│   ├── InjuryRiskModel.md    # ML model documentation
│   └── models/               # Trained models
├── docs/
│   ├── APP_BLUEPRINT.md      # Complete blueprint
│   ├── API.md                # API documentation
│   └── DEPLOYMENT.md         # Deployment guide
├── app.json                  # Expo config
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🔐 Security

### Authentication
- Firebase Authentication
- JWT token-based API access
- Secure token storage

### Data Privacy
- GDPR compliant
- End-to-end encrypted sensitive data
- HTTPS-only communication
- No third-party ad tracking

### Payment Security
- PCI DSS compliant
- Stripe Secure Payment Intent
- Webhook signature verification
- Encrypted payment tokens

---

## 📊 ML Models

### Injury Risk Prediction
- **Accuracy**: 85%+ on test set
- **Input**: Training load, sleep, HRV, fatigue, past injuries
- **Output**: Risk level (low/moderate/high/critical) + specific injuries
- **Update Frequency**: Real-time scoring, monthly model retraining

### Fatigue Threshold Prediction
- **Personalized**: Individual baseline + tolerance
- **Range**: 70-100 (player-specific)
- **Updates**: Weekly based on training history

### Training Drill Generation
- **Database**: 500+ drills across positions/levels
- **Personalization**: Position, fitness level, focus areas
- **Recommendation**: Top 5 most relevant drills

---

## 💳 Monetization

| Feature | Free | Premium | Pro |
|---------|------|---------|-----|
| AI Training Drills | ✓ | ✓ | ✓ |
| Injury Prevention | ✓ | ✓ | ✓ |
| Nutrition Tracking | ✓ | ✓ | ✓ |
| Sleep Monitoring | ✓ | ✓ | ✓ |
| Match Simulations | ✗ | ✓ | ✓ |
| Tactical Breakdowns | ✗ | ✓ | ✓ |
| Live AI Coaching | ✗ | ✗ | ✓ |
| Transfer Alerts | ✗ | ✗ | ✓ |
| Priority Support | ✗ | ✗ | ✓ |
| **Price** | Free | $4.99/mo | $9.99/mo |

---

## 🔌 Wearable Integrations

Supported devices:
- Apple Watch (HealthKit)
- Fitbit
- Garmin
- Oura Ring
- Whoop
- Withings

Data synced:
- Heart rate (real-time, resting, variability)
- Sleep metrics (duration, stages, quality)
- Activity (steps, distance, calories)
- GPS data
- Recovery scores

---

## 📱 Responsive Design

- **iOS**: iPhone 12-15 Pro, iPad
- **Android**: Samsung Galaxy, OnePlus, Pixel devices
- **Tablet Support**: Full iPad & Android tablet optimization
- **Accessibility**: WCAG 2.1 AA compliant

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage
```

---

## 📖 API Documentation

### Base URL
```
https://scoutai-api.herokuapp.com/api
```

### Authentication
All requests require Firebase ID token:
```
Authorization: Bearer {token}
```

### Key Endpoints

**Training**
- `POST /training/generate-drills` - Generate AI drills
- `GET /training/drills` - List drills
- `POST /training/sessions` - Log session
- `GET /training/history` - Training history

**Injury Prevention**
- `POST /injury/assess` - Risk assessment
- `POST /injury/recovery-plan` - Generate plan
- `POST /injury/warmup-routine` - Warm-up routine
- `GET /injury/fatigue-threshold` - Fatigue threshold

**Nutrition**
- `POST /nutrition/log-meal` - Log meal
- `POST /nutrition/analyze` - Analyze nutrition
- `GET /nutrition/anti-inflammatory` - Food suggestions

**Subscription**
- `POST /subscription/upgrade` - Upgrade tier
- `POST /subscription/cancel` - Cancel subscription

---

## 🚀 Deployment

### Frontend (Expo)
```bash
# Build for App Store
eas build --platform ios --auto-submit

# Build for Play Store
eas build --platform android --auto-submit
```

### Backend (Firebase)
```bash
# Deploy functions
firebase deploy --only functions

# Deploy Firestore rules
firebase deploy --only firestore:rules
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📝 License

This project is proprietary. All rights reserved.

---

## 💬 Support

- **Email**: support@scoutai.com
- **Discord**: [Join Community](https://discord.gg/scoutai)
- **Docs**: [docs.scoutai.com](https://docs.scoutai.com)
- **Status**: [status.scoutai.com](https://status.scoutai.com)

---

## 👥 Team

- **Lead Developer**: Kinjal
- **ML Engineer**: AI Research Team
- **Product Manager**: Soccer Performance Specialist
- **Designer**: UX/UI Design Lead

---

## 🎓 Learning Resources

- [React Native Docs](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)
- [Firebase Guide](https://firebase.google.com/docs)
- [ML Model Training](https://www.tensorflow.org)
- [Soccer Analytics](https://www.statssbomb.com)

---

**ScoutAI v1.0.0** | Built with ⚽ for Soccer Players | © 2025
