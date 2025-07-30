# Probo - Prediction Market Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.12.0-green)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-orange)](https://clerk.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)

## 📖 Overview

Probo is a modern prediction market platform built with Next.js 15, TypeScript, and Prisma. It allows users to create markets, make predictions, and trade on outcomes using a sophisticated pricing mechanism. The platform features real-time updates, admin controls, and a beautiful responsive UI.

## 🚀 Features

### Core Functionality

- **Prediction Markets**: Create and participate in prediction markets
- **Real-time Trading**: Dynamic pricing using automated market maker (AMM) algorithm
- **User Authentication**: Secure authentication with Clerk
- **Admin Dashboard**: Comprehensive admin interface for market management
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI
- **Real-time Updates**: Live market data and trading information

### User Features

- **Market Browsing**: View all available prediction markets
- **Trading Interface**: Intuitive trading cards with Yes/No options
- **Balance Management**: Track and manage trading balance
- **Trade History**: View past trades and predictions
- **Live Market Status**: Real-time market status and countdown timers

### Admin Features

- **Market Creation**: Create new prediction markets with custom questions
- **Market Management**: View, edit, and close markets
- **Trade Monitoring**: Monitor all trades and user activities
- **User Management**: View user balances and trading history
- **Analytics Dashboard**: Comprehensive market analytics

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Caching**: Redis (Upstash)
- **State Management**: Zustand
- **Animations**: Framer Motion, GSAP
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation

### Database Schema

```prisma
model User {
  id       String  @id @unique @default(uuid())
  clerkId  String  @unique
  name     String
  username String? @unique
  email    String
  balance  Int
  trades   Trade[]
}

model Market {
  id          String       @id @unique @default(uuid())
  Question    String
  description String
  yesCount    Int
  noCount     Int
  yesreserve  Int
  noreserve   Int
  category    String
  status      MARKETSTATUS @default(OPEN)
  endsAt      DateTime
  startedon   DateTime     @default(now())
  predections Trade[]
}

model Trade {
  id           String    @id @unique @default(uuid())
  UserID       String
  user         User      @relation(fields: [UserID], references: [id])
  TradeType    TRADETYPE
  tradeAmount  Float
  sharesbought Int
  orderType    ORDERTYPE @default(BUY)
  time         DateTime
  predictionId String
  prediction   Market    @relation(fields: [predictionId], references: [id])
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Redis instance (Upstash recommended)
- Clerk account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd probo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/probo"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Redis (Upstash)
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token

   # Admin Configuration
   ADMIN=admin_email@example.com
   ADMIN_KEY=admin_user_id
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # (Optional) Seed database
   npx prisma db seed
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
probo/
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin route group
│   │   ├── dashboard/            # Admin dashboard
│   │   │   ├── [id]/            # Individual market view
│   │   │   └── MarketDetails.tsx
│   │   └── MarketCreate/        # Market creation interface
│   ├── api/                      # API routes
│   │   ├── market/              # Market CRUD operations
│   │   ├── trade/               # Trading operations
│   │   └── user/                # User management
│   ├── StartTradingNow/         # Trading interface
│   ├── Predictions/             # Predictions page
│   └── store/                   # State management
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   └── LandingPage.tsx          # Landing page components
├── lib/                         # Utility libraries
│   ├── prisma.ts               # Prisma client
│   ├── redis.ts                # Redis client
│   └── utils.ts                # Utility functions
├── prisma/                      # Database schema and migrations
└── public/                      # Static assets
```

## 🔧 API Endpoints

### Markets

- `GET /api/market` - Get all markets
- `POST /api/market` - Create new market (admin only)
- `GET /api/market/[id]` - Get specific market details
- `PATCH /api/market/[id]` - Update market (admin only)

### Trading

- `POST /api/trade/[id]` - Create new trade
- `GET /api/trade/[id]` - Get trade details
- `GET /api/trade/[id]/count` - Get trade counts

### Users

- `GET /api/user` - Get user information
- `PATCH /api/user` - Update user data

## 🎯 Key Features Explained

### Prediction Market Mechanics

The platform uses an Automated Market Maker (AMM) algorithm for pricing:

1. **Initial State**: Each market starts with 100 shares each for Yes/No
2. **Pricing Formula**: Uses constant product formula (k = yes_reserve × no_reserve)
3. **Dynamic Pricing**: Prices change based on trading volume and direction
4. **Liquidity**: Maintains liquidity through reserve management

### Trading Flow

1. User selects a market to trade on
2. Chooses Yes/No prediction
3. Specifies trade amount
4. System calculates shares and updates reserves
5. Trade is recorded and user balance is updated

### Admin Controls

- **Market Creation**: Admins can create markets with custom questions
- **Market Management**: View, edit, and close markets
- **User Monitoring**: Track user activities and balances
- **Analytics**: Comprehensive market and trading analytics

## 🎨 UI/UX Features

### Design System

- **Modern Interface**: Clean, modern design with dark/light theme support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Reusable components built with Radix UI
- **Animations**: Smooth animations with Framer Motion and GSAP

### User Experience

- **Intuitive Navigation**: Clear navigation and user flows
- **Real-time Updates**: Live market data and status updates
- **Loading States**: Proper loading indicators and error handling
- **Toast Notifications**: User feedback for actions and errors

## 🔒 Security & Authentication

### Authentication

- **Clerk Integration**: Secure authentication with Clerk
- **Role-based Access**: Admin and user role management
- **Protected Routes**: Middleware protection for sensitive routes
- **Session Management**: Secure session handling

### Data Protection

- **Input Validation**: Zod schema validation
- **SQL Injection Prevention**: Prisma ORM protection
- **Rate Limiting**: API rate limiting (configurable)
- **Environment Variables**: Secure configuration management

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all environment variables are properly configured for production:

- Database connection string
- Clerk production keys
- Redis production credentials
- Admin configuration

### Recommended Hosting

- **Vercel**: Optimized for Next.js deployment
- **Railway**: Easy PostgreSQL and Redis hosting
- **PlanetScale**: Managed MySQL/PostgreSQL
- **Upstash**: Managed Redis service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Write meaningful commit descriptions
- Test thoroughly before submitting PRs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

## 🔮 Roadmap

### Planned Features

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Social features and sharing
- [ ] Integration with external data sources
- [ ] Advanced trading features
- [ ] Multi-language support
- [ ] Advanced admin tools

### Performance Improvements

- [ ] Database query optimization
- [ ] Caching strategies
- [ ] CDN integration
- [ ] Image optimization

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
