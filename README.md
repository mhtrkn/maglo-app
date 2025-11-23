# Maglo App

Maglo-App, React, TypeScript, TailwindCSS, Zustand ve ShadCN UI kullanılarak geliştirilmiş modern bir Next.js 15+ dashboard uygulamasıdır.
Proje; temiz state yönetimini, yeniden kullanılabilir bileşenleri ve gelişmiş frontend pattern’larını göstermektedir.

---

## Canlı Demo
Projenin canlı versiyonunu yanda yer alan linkten inceleyebilirsiniz: [Maglo Dashboard Live](https://magio-app.vercel.app/)

## .env
NEXT_PUBLIC_API_BASE_URL=https://case.nodelabs.dev/api/
---

## Başlangıç

1. Depoyu klonlayın:

```bash
git clone https://github.com/mhtrkn/maglo-app.git
cd maglo-app
npm install
npm run dev => localhost:3000
````

## Türkçe Açıklama
```bash
Normalde uygulama geliştirirken API isteklerini SSR taraflı atıp client tarafında sadece datayı render etmeyi tercih ederim.
Bu projeye de böyle başladım fakat SSR tarafında API isteği atarken backendin "refresh-token" i zorunlu tutmasından sebep
API istekleri kabul görmüyordu. Bu yüzden client tarafında performanstan ödün vermeden yapılabilecek en hızlı,
en optimize geliştirmeyi tarafınıza sunuyorum. Şimdi sırasıyla neyi neden seçtiğimi anlatayım.

Nextjs: Genelde admin panelleri için reactın daha çok tercih edildiği bir gerçek. Buna rağmen nextjs tercih etme sebebim
hem genel anlamda nextjs ile proje geliştirirken daha hızlı ve aşina olmamdan sebep (kişisel tercih ve konfor alanı) hemde
reactta yapması zaman alan bir takım işlemlerin nextjs de aşırı hızlı ve optimize çalışmasından sebep nextjs ile devam ettim.

Zustand: Global state management olarak zustandı tercih ettim çünkü geliştirmiş olduğum proje küçük çaplı bir proje bundan
sebep optimizasyonu en üst düzeyde tutmak adına projeyi şişirmemek adına zustandı tercih ettim. Hem hiçbir store provider
gibi işlemlere gerek duymaması hemde kullanım kolaylığı tercih etmemde önemli ölçüde rol aldı. Ek olarak kaldı ki dediğim
gibi çok büyük çaplı bir proje olmadığından sebep aslında hiç state management kullanmadan bile benzer etkiyi alabilirdik.

Shadcn/UI: Tailwind + Nextjs kombinasyonuna en çok yakışan UI kütüphanelerinden bir tanesi olduğu için tercih ettim.
Yapacağınız her geliştirmeyi aslında custom component üzerinde yapıyormuşsunuz gibi olması, UX açısından pozitif bir etki
bırakması ve re-usable yada moduler component-based tabanlı mimariye uyumu ile tercih sebebim oldu.

Vercel: Gerek CI/CD gerekse Nextjs ile olan tek tuş ile deploy etme özelliği.. Gerçekten kendimi geliştirmek adına
yaptığım tüm projelerde de aktif olarak kullanıyorum.

Yup: Tahmin ediyorum ki form validation işlemlerinde bunu kullanmayan herhalde yoktur. Satırlar süren kodları iki üç
satırda yapabildiğiniz, okunaklılık ve performans açısından çok üst düzey bir kütüphane bu yüzdende tercih sebebim oldu.

Axios: API isteklerini detaylı ve error handling gibi işlemleri yaparken ki geniş işlem aralığı sebebi ile tercih ettim.

Framer-motion, Recharts, Sonner ve Lottie gibi kütüphaneleri de animasyonları ve UX deneyimini arttırmak için kullandım.
````

## Özellikler

### 1. Yönlendirme & Navigasyon
- **App Router** tabanlı yapı (`src/app/...`) ve otomatik yönlendirmeler.
- `/dashboard` ana sayfa olarak kullanılıyor, alt sayfalar: `/dashboard/my-wallets`, `/dashboard/transactions`...
- `404` sayfaları için özel yönetim: bulunmayan sayfalar Dashboard’a yönlendirilir veya özel NotFound sayfası gösterilir.

### 2. State Yönetimi
- Global state için **Zustand** kullanıldı.
- Ayrı store’lar:
  - `useFinancialStore`: Finansal API verilerini (summary, wallet, working capital, recent transactions, scheduled transfers) yönetir.
  - `useUserStore`: Kullanıcı profilini yönetir.
  - `useAuthStore`: Auth token, login, logout ve refresh işlemlerini yönetir.
  - `useLoadingStore`: Async çağrılar için merkezi loader yönetimi sağlar.

### 3. API Entegrasyonu
- Merkezi API servisi (`/services`) ile:
  - `financialService`
  - `userService`
  - `authService`
- `fetchAllFinancialData` ile eş zamanlı API çağrılarını `Promise.all` kullanarak destekler.

### 4. UI Komponentleri
- **ShadCN UI** ile tamamen tema uyumlu komponentler.
- **Lottie animasyonları** ile loader/modal görselleştirmesi.
- Tablo ve veri çekim durumları için skeleton loader’lar.
- **TailwindCSS** breakpoint’leri ile responsive tasarım.
- Framer Motion animasyonları (fade-in, slide, scale efektleri).

### 5. Kimlik Doğrulama
- **Login Sayfası** `useAuthStore` ile entegre.
- Loader spinner ve toast bildirimleri `sonner` ile store üzerinden yönetiliyor.
- Global token yönetimi (cookie, 7 gün geçerli).

### 6. Hata & Fallback Yönetimi
- Özel **NotFound sayfası**, açıklayıcı mesajlar ve `/dashboard`’a dönüş linkleri içerir.
- Tüm API çağrıları için düzgün fallback mesajları ile hatalar yönetilir.

### 7. En İyi Uygulamalar
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
