# Maglo App - Next.js Project

This is a modern **Next.js 15+** dashboard application built with **React**, **TypeScript**, **TailwindCSS**, **Zustand**, and **ShadCN UI**. The project demonstrates clean state management, reusable components, and advanced frontend patterns.

---

## Live Demo

You can view the live version of the project here: [Maglo Dashboard Live](https://magio-app.vercel.app/sign-in)

## .env File
NEXT_PUBLIC_API_BASE_URL=https://case.nodelabs.dev/api/
---

## Features

### 1. Routing & Navigation
- **App Router** based structure (`src/app/...`) with automatic redirects.
- `/dashboard` as main page, with sub-routes like `/dashboard/wallet`, `/dashboard/transactions`.
- Custom handling for `404` pages: non-existent pages redirect to Dashboard or show a custom NotFound page.

### 2. State Management
- **Zustand** for global state.
- Separate stores:
  - `useFinancialStore`: Handles all financial-related API data (summary, wallet, working capital, recent transactions, scheduled transfers).
  - `useUserStore`: Manages logged-in user profile.
  - `useAuthStore`: Manages authentication token, login, logout, and refresh.
  - `useLoadingStore`: Centralized loader management for async calls.

### 3. Hooks
- `useFinancialData` and `useUserData` initially used for local fetching.
- Later replaced by Zustand stores for **global state management**, making components independent and reusable.
- Handles `loading` states and errors with `useLoadingStore` integration.

### 4. API Integration
- Centralized API service (`/services`) for:
  - `financialService`
  - `userService`
  - `authService`
- Supports concurrent API calls using `Promise.all` in `fetchAllFinancialData`.

### 5. UI Components
- Built with **ShadCN UI** components, fully themeable.
- Supports **Lottie animations** for loaders/modal feedback.
- Skeleton loaders for table and data fetching states.
- Responsive layout with **TailwindCSS** breakpoints.
- Framer Motion animations for page transitions (fade-in, slide, scale effects).

### 6. Authentication
- **Login Page** integrated with `useAuthStore`.
- Loading spinners and error feedback integrated via store and `sonner` toast notifications.
- Global token management with cookies (7-day expiry).

### 7. Error & Fallback Handling
- Custom **NotFound page** with descriptive messaging and links to return to `/dashboard`.
- Graceful error handling for all API calls with proper fallback messages.

### 8. Best Practices
- Separation of concerns:
  - API logic in `/services`.
  - UI components isolated in `/components`.
  - Global state in `/store`.
  - Page layouts in `/app`.
- Hooks and stores for async management.
- Centralized loader and toast system.
- TypeScript typings for all API responses and stores.
- Prevents memory leaks using mounted checks in hooks.
- Custom error handling, avoiding unmounted state updates.
- Uses `useCallback` in hooks to avoid unnecessary renders.

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mhtrkn/maglo-app.git
cd maglo-app
npm install
npm run dev => localhost:3000
````

## Türkçe Açıklama

## Özellikler

### 1. Yönlendirme & Navigasyon
- **App Router** tabanlı yapı (`src/app/...`) ve otomatik yönlendirmeler.
- `/dashboard` ana sayfa olarak kullanılıyor, alt sayfalar: `/dashboard/wallet`, `/dashboard/transactions`.
- `404` sayfaları için özel yönetim: bulunmayan sayfalar Dashboard’a yönlendirilir veya özel NotFound sayfası gösterilir.

### 2. State Yönetimi
- Global state için **Zustand** kullanıldı.
- Ayrı store’lar:
  - `useFinancialStore`: Finansal API verilerini (summary, wallet, working capital, recent transactions, scheduled transfers) yönetir.
  - `useUserStore`: Kullanıcı profilini yönetir.
  - `useAuthStore`: Auth token, login, logout ve refresh işlemlerini yönetir.
  - `useLoadingStore`: Async çağrılar için merkezi loader yönetimi sağlar.

### 3. Hooklar
- Başlangıçta `useFinancialData` ve `useUserData` lokal veri çekimi için kullanıldı.
- Sonrasında **global state yönetimi** için Zustand store’larıyla değiştirildi; komponentler bağımsız ve tekrar kullanılabilir hale geldi.
- `loading` durumları ve hatalar `useLoadingStore` ile entegre edildi.

### 4. API Entegrasyonu
- Merkezi API servisi (`/services`) ile:
  - `financialService`
  - `userService`
  - `authService`
- `fetchAllFinancialData` ile eş zamanlı API çağrılarını `Promise.all` kullanarak destekler.

### 5. UI Komponentleri
- **ShadCN UI** ile tamamen tema uyumlu komponentler.
- **Lottie animasyonları** ile loader/modal görselleştirmesi.
- Tablo ve veri çekim durumları için skeleton loader’lar.
- **TailwindCSS** breakpoint’leri ile responsive tasarım.
- Framer Motion animasyonları (fade-in, slide, scale efektleri).

### 6. Kimlik Doğrulama
- **Login Sayfası** `useAuthStore` ile entegre.
- Loader spinner ve toast bildirimleri `sonner` ile store üzerinden yönetiliyor.
- Global token yönetimi (cookie, 7 gün geçerli).

### 7. Hata & Fallback Yönetimi
- Özel **NotFound sayfası**, açıklayıcı mesajlar ve `/dashboard`’a dönüş linkleri içerir.
- Tüm API çağrıları için düzgün fallback mesajları ile hatalar yönetilir.

### 8. En İyi Uygulamalar
- Sorumlulukların ayrılması:
  - API mantığı `/services` içinde.
  - UI komponentleri `/components` içinde.
  - Global state `/store` içinde.
  - Sayfa layout’ları `/app` içinde.
- Async yönetimi için hooklar ve store’lar.
- Merkezi loader ve toast sistemi.
- Tüm API cevapları ve store’lar için TypeScript tipleri.
- Hooklarda mounted check ile memory leak önleme.
- Unmounted state güncellemelerini önleyen özel hata yönetimi.
- Gereksiz render’ları önlemek için hooklarda `useCallback` kullanımı.

---

## Başlangıç

1. Depoyu klonlayın:

```bash
git clone https://github.com/mhtrkn/maglo-app.git
cd maglo-app
npm install
npm run dev => localhost:3000
````

## Ek açıklama
```bash
(Normalde uygulama geliştirirken API isteklerini SSR taraflı atıp client tarafında sadece datayı render etmeyi tercih ederim. Bu projeye de böyle başladım fakat SSR tarafında API isteği atarken backendin "refresh-token" i zorunlu tutmasından sebep isteklerimi SSR tarafında atamadım. Bu yüzden client tarafında performanstan ödün vermeden yapılabilecek en hızlı en optimize geliştirmeyi tarafınıza sunuyorum.)
````
