# Movie Explorer App

A modern React Native app to browse and favorite movies, built with TypeScript, Redux Toolkit, and React Navigation.

## Features
- Browse a grid of popular movies
- Search movies by title
- View detailed info for each movie
- Add/remove favorites (persisted)
- Dark mode UI
- Bottom tab navigation (Home, Favorites, Profile)

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone git@github.com:kiranb9555/rn0.80.git
   cd  rn0.80
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Link vector icons (if needed):**
   - For React Native 0.60+, auto-linking should work. If icons do not show, ensure the following for Android:
     - In `android/app/build.gradle`, ensure:
       ```gradle
       apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
       ```
   - Then rebuild:
     ```sh
     npm run android
     ```
      if still not working undo changes and npx react-native-asset

4. **Start Metro bundler:**
   ```sh
   npm start
   ```

5. **Run on Android:**
   ```sh
   npx react-native run-android
   ```

## Third-Party Libraries Used

- **@react-navigation/native, @react-navigation/bottom-tabs, @react-navigation/native-stack**
  - For navigation and bottom tab bar.
- **react-native-vector-icons**
  - For beautiful, scalable icons in the tab bar and UI.
- **@reduxjs/toolkit, react-redux**
  - For state management (movies, favorites).
- **redux-persist**
  - To persist favorite movies across app restarts.
- **@react-native-async-storage/async-storage**
  - Storage backend for redux-persist.
- **TypeScript**
  - For type safety and maintainable code.

## Screenshots


<img width="720" height="1640" alt="1000000641" src="https://github.com/user-attachments/assets/731ed3fb-5cda-4d9a-9ff4-9e52fefebe7a" />
<img width="720" height="1640" alt="1000000642" src="https://github.com/user-attachments/assets/7bbf3b34-efa8-4751-b4e0-97aeb127680d" />

---

## Design Inspiration
- Inspired by modern streaming apps (e.g., Netflix, Disney+)
- UI/UX focuses on simplicity, dark mode, and easy navigation

---

## Notes
- No Expo, pure React Native CLI
- Android build tested with `npx react-native run-android`
- For any issues, please open an issue or contact the maintainer
