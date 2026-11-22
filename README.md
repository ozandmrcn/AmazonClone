# AmazonClone

A portfolio-focused **Amazon UI clone** built with **Expo**, **React Native**, **TypeScript**, and **React Navigation**. It recreates two core mobile screens — a richly composed home feed and a product results list — with a fully typed component, data, and navigation layer. The app is frontend-only: all content comes from typed local mock fixtures and bundled images, so no backend, API keys, or environment variables are required.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" /> Project Overview

AmazonClone currently provides:

- **Two-screen stack navigation:** Home and Products, wired through shared, type-checked route constants.
- **Home feed:** a gradient search bar with scan and voice actions, a delivery-location strip, a horizontal category strip, an auto-playing banner carousel, payment shortcuts with recent-search cards, a featured deal, and a two-column brand grid.
- **Products screen:** a scrollable results list with product images, ratings, pricing with strikethrough values, cashback notes, Prime branding, and delivery dates.
- **Local mock data:** typed fixtures in `src/data` stand in for an API, and every image is bundled in `src/assets`, so the UI works offline.
- **Safe-area-aware layout:** the root component respects notches and status bars through `react-native-safe-area-context`.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Hammer and Wrench" width="25" height="25" /> Features

- **Typed domain models:** `src/models` centralizes `Product`, `CategoryItem`, `CarouselSlide`, `RecentSearchItem`, `ServiceCardProps`, and `RootStackParamList` behind a barrel export.
- **Consistent component API:** every component is typed as `FC` or `FC<Props>` with explicit prop interfaces.
- **Type-safe routes:** `SCREENS` is declared `as const` and checked against `RootStackParamList`, so invalid route names fail at compile time.
- **Reusable rating helper:** `getRating` builds a keyed five-star row, clamps out-of-range values, and renders half stars for fractional ratings.
- **Typed static assets:** local image imports are declared in `src/models/images.d.ts` and consumed as `ImageSourcePropType` throughout the UI.
- **Strict TypeScript:** `tsconfig.json` extends `expo/tsconfig.base` with `strict: true`.
- **Developer checks:** TypeScript checking, ESLint, and Expo Doctor are configured and passing.
- **Cross-platform:** runs on Android, iOS, and the web through Expo.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" /> Technologies Used

- **Expo** SDK ~58.0.26 (toolchain and app configuration)
- **React Native** 0.88.1 (mobile framework)
- **React** 19.3.0 (UI library)
- **TypeScript** 6.0.3 (language)
- **React Navigation** — `@react-navigation/native` and `@react-navigation/native-stack`
- **expo-linear-gradient** (gradient headers)
- **expo-font** and **@expo/vector-icons** (icon sets and font loading)
- **react-native-swiper** (auto-playing carousel)
- **react-native-safe-area-context** and **react-native-screens** (native layout)
- **ESLint**, **eslint-config-expo**, and **Prettier** (linting and formatting)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Gear" width="25" height="25" /> Setup & Installation

You need **Node.js >= 22.13.0** (the Expo SDK 58 minimum) and either Expo Go or a platform toolchain (Android Studio / an emulator, or Xcode / a simulator on macOS).

```bash
# Clone the repository
git clone https://github.com/ozandmrcn/AmazonClone.git

# Navigate into the project folder
cd AmazonClone

# Install dependencies
npm install

# Start Metro in one terminal
npm start

# In another terminal, launch a platform
npm run android   # Android emulator / device
npm run ios       # iOS simulator (macOS only)
npm run web       # Browser preview
```

> ℹ️ **Note:** This project has no environment variables or `.env` file. All data is local mock data and all images are bundled with the app, so an internet connection is not needed to see the UI.

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Key.png" alt="Key" width="25" height="25" /> Scripts

| Script               | Description                                    |
| -------------------- | ---------------------------------------------- |
| `npm start`          | Start the Metro bundler                        |
| `npm run android`    | Build and run the app on Android               |
| `npm run ios`        | Build and run the app on iOS (macOS only)      |
| `npm run web`        | Run the app in a browser                       |
| `npm run typecheck`  | Run TypeScript without emitting output         |
| `npm run lint`       | Run ESLint across the project                  |

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" /> Project Structure

```text
AmazonClone
├── assets/                 # Expo launcher icons and splash assets
├── src/
│   ├── assets/             # Local images used by the UI
│   ├── components/         # Header, SubHeader, Categories, Carousel, Services,
│   │                       # ServiceCard, Deals and Brands
│   ├── data/               # Typed mock fixtures for categories, slides, products and searches
│   ├── models/             # Shared type definitions and image module declarations
│   ├── navigation/         # Root native stack navigator
│   ├── screens/            # HomeScreen and ProductsScreen
│   └── utils/              # Route constants and the rating helper
├── app.json                # Expo app configuration
├── App.tsx                 # Root component with NavigationContainer
├── index.ts                # Application entry point
├── tsconfig.json
└── README.md
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> Preview

Screenshots are coming soon. In the meantime, run `npm start` to explore the home feed and product results screen locally.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width="25" height="25" /> Notes

- `src/data` contains typed mock fixtures; replace them with API calls when adding a backend.
- Navigation intentionally uses React Navigation instead of file-based routing; route names are centralized in `src/utils/router.ts` and typed in `src/models/Navigation.ts`.
- Bundled images live in `src/assets`; `src/models/images.d.ts` makes static image imports type-safe.
- There is no automated test suite yet. Static correctness is covered by `npm run typecheck`, `npm run lint`, and `npx expo-doctor`.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Gear" width="25" height="25" /> License

Released under the [MIT License](./LICENSE).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/E-Mail.png" alt="E-Mail" width="25" height="25" /> Contact

For any questions or feedback, feel free to contact:  
**Ozan Demircan** – [ozandmrcn47@gmail.com](mailto:ozandmrcn47@gmail.com)
