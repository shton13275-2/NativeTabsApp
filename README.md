# NativeTabsApp

An iOS-only starter app built with Expo, Expo Router, and native system tabs.

## Current setup

- Expo SDK 58
- Expo Router Native Tabs
- TypeScript
- Five native tabs: Home, Search, Favorites, Notifications, and Settings
- System light/dark appearance
- iOS only

The tab bar is provided by the native platform through `expo-router/native-tabs`; it is not a custom HTML/CSS imitation.

## Run locally

Install Node.js and the project dependencies, then run:

```bash
npm install
npx expo install --fix
npm run ios
```

To start the Expo development server without opening a simulator:

```bash
npm start
```

Open the project with a compatible iOS development environment or Expo Go where supported. A native iOS build requires Apple's build toolchain; this repository has not yet been built or device-tested.

## Project structure

```
app/
  _layout.tsx
  index.tsx
  search.tsx
  favorites.tsx
  notifications.tsx
  settings.tsx
components/
  TabPage.tsx
app.json
package.json
tsconfig.json
```
