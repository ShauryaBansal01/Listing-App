# Kribb - Real Estate Listings App

Welcome to **Kribb**, a modern, cross-platform mobile application for browsing and managing real estate listings. Built with the latest React Native ecosystem tools, it offers a seamless native experience on both iOS and Android.

## 🚀 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (v0.81) & [Expo](https://expo.dev/) (SDK 54)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (v6) for file-based native routing and deep linking.
- **Styling**: [NativeWind](https://www.nativewind.dev/) (v4) utilizing TailwindCSS for highly customizable, utility-first styling.
- **Authentication**: [Clerk](https://clerk.com/) for secure, scalable user identity and session management.
- **Backend & Database**: [Supabase](https://supabase.com/) for PostgreSQL database, secure edge functions, and real-time data sync.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for lightweight, fast, and scalable global state.

## 🌟 Key Features

* **Cross-Platform Tab Navigation**: Utilizing `@react-navigation/bottom-tabs` wrapped by Expo Router for a fluid, native feel.
* **Role-Based Access Control**: Admins have exclusive access to a "Create Property" form directly from the tab bar, synced dynamically via Supabase.
* **Real-time Sync**: User profiles and admin statuses are securely synchronized between Clerk Authentication and the Supabase PostgreSQL database on login.
* **Modern UI/UX**: Designed with sleek, modern UI patterns powered by NativeWind and beautiful iconography from Ionicons.
* **Property Management**: Users can search, filter, view, and save real estate properties.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js and npm installed. You will also need an emulator (Android Studio / Xcode) or a physical device with the Expo Go app.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/ShauryaBansal01/Listing-App.git
   cd Listing-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root of your project and add your API keys:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Run the Application**:
   Start the Expo Metro Bundler:
   ```bash
   npx expo start
   ```
   Press `a` to open in Android, `i` to open in iOS, or scan the QR code with your mobile device.

## 📁 Project Structure

* `/app`: Contains all file-based routing components (`(root)/(tabs)`).
* `/components`: Reusable UI components like `PropertyCard`, `FilterModal`, and `FeaturedCard`.
* `/hooks`: Custom React hooks (e.g., `useSupabase`, `useUserSync`, `useSavedProperty`).
* `/lib`: Core configuration files and utility functions.
* `/store`: Zustand global state slices (`userStore`, `filterStore`).
* `/types`: TypeScript type definitions and interfaces.

## 🛡️ Security & Roles
The application automatically syncs authenticated Clerk users with a `users` table in Supabase. The "Add Property" feature uses this synced data to verify if the `is_admin` flag is `true`. Standard users cannot access or see the creation routes.
