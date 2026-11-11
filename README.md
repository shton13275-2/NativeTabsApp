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

## GitHub Actions

The `iOS Project Checks` workflow runs on pushes to `setup/expo-native-tabs`, pull requests targeting `main`, and manual dispatch.

It currently:
- Installs Node.js dependencies
- Checks the resolved Expo configuration
- Runs Expo Doctor
- Exports the iOS JavaScript bundle

**Important:** These checks do not compile the native iOS application, create an IPA, or verify behavior on a physical iPhone. A cloud native build will be configured separately with EAS Build.

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
.github/
  workflows/
    ios-check.yml
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
