# iChat Frontend

Real vaqtli chat ilovasi uchun frontend — Next.js 14 (App Router) + TypeScript + Tailwind CSS + Socket.io-client.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda oching: http://localhost:3000

## Muhit o'zgaruvchilari

`.env.local` faylini yarating:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:4000
```

## Loyiha tuzilishi

```
app/
  page.tsx            — Landing page (Hero + 3 feature card + demo)
  register/page.tsx   — Ro'yxatdan o'tish
  login/page.tsx      — Kirish
  chat/page.tsx        — Chat sahifasi (sidebar + xabarlar + input + info panel)
  layout.tsx           — Umumiy layout (Navbar/Footer, shriftlar)
components/
  Navbar.tsx, Footer.tsx, Hero.tsx, FeatureCard.tsx, SiteChrome.tsx
  auth/                — AuthCard, AuthInput, RegisterForm, LoginForm (validatsiya bilan)
  chat/                — Sidebar, ChatHeader, MessageBubble, MessageList, ChatInput, RightPanel
lib/
  api.ts               — axios instance (baseURL, token interceptor)
  socket.ts             — socket.io-client instance
  mockData.ts           — Chat sahifasini backendsiz ko'rish uchun namunaviy ma'lumot
types/index.ts          — User, Message, ChatSummary turlari
middleware.ts           — /chat himoyalangan, token bo'lmasa /login ga yo'naltiradi
```

## Backend bilan ulash

1. `lib/api.ts` dagi `registerUser` / `loginUser` funksiyalari `POST /api/auth/register` va
   `POST /api/auth/login` ga so'rov yuboradi. Backend URL manzilini `.env.local` da sozlang.
2. Muvaffaqiyatli auth'dan so'ng token `localStorage` va cookie ('ichat_token') ga saqlanadi —
   cookie `middleware.ts` uchun, localStorage esa axios so'rovlari uchun ishlatiladi.
3. `app/chat/page.tsx` faylida socket.io ulanishi uchun tayyor (izohga olingan) kod bor —
   backend `message:new` va `message:send` eventlarini qo'shsangiz, izohni oching.
4. Hozircha chat sahifasi `lib/mockData.ts` dagi namunaviy ma'lumotlar bilan ishlaydi —
   buni haqiqiy API chaqiruvi bilan almashtiring (masalan `useEffect` + `api.get('/chats')`).

## Ranglar

| Nom       | Hex       |
|-----------|-----------|
| Primary   | `#0EA5E9` |
| Secondary | `#10B981` |
| Dark      | `#0F172A` |
| Light     | `#F8FAFC` |
| Accent    | `#F97316` |
