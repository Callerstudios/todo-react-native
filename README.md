# 🚀 Frontend Wizards — Stage 3b: Advanced Todo List with Theme Switcher

## 🎥 Demo & APK Links

📱 **APK Download:** [Download APK](https://drive.google.com/file/d/19kUFG6mzq2RmHlK1g1OoKSXu7_CkjjKy/view?usp=drive_link)  
🎬 **Demo Video:** [Watch Demo](https://drive.google.com/file/d/159Rxa6J9-02TnFDmI1slJkaTCDO9rVz1/view?usp=sharing)

Welcome to **Stage 3b!**  
Time to build a sophisticated Todo List application with theme switching and real-time backend integration using **Convex** 🎉

---

## 📝 Project Overview

In this stage, you’ll:

- 🧱 Create a **pixel-perfect Todo app** from the provided Figma design  
- 🌗 Implement **light/dark theme switching**  
- ⚡ Handle all **CRUD operations** using **Convex** for real-time updates  

---

## 🎨 Figma Design  
👉 [View Design](https://www.figma.com/design/NRbd5hcrQcAa1LBbctUhf9/todo-app?node-id=0-1&p=f&m=dev)

---

## 📚 Study Materials

- [React Native Docs](https://reactnative.dev/docs/getting-started)  
- [Convex for React Native](https://docs.convex.dev/quickstart/react-native)  
- [State Management](https://reactnative.dev/docs/state)  
- [Navigation (React Navigation)](https://reactnavigation.org/)  
- [Styled Components & Theming](https://styled-components.com/docs/basics#react-native)  
- [Expo Docs](https://docs.expo.dev/)  
- [Expo Router](https://docs.expo.dev/router/introduction/)  
- [Create First App with Expo](https://docs.expo.dev/tutorial/create-your-first-app/)  

---

## 🧩 Requirements

- Use **React Native (Expo recommended)**
- Implement the **Figma design** pixel-perfectly
- Support **both light and dark themes** with smooth transitions

---

## ⚙️ Core Features

### 🎨 Theme Switcher
- Light and dark themes  
- Smooth transition animations  
- Persist theme preference across app restarts  
- Theme affects all UI elements (backgrounds, text, buttons, etc.)

### ✅ Todo CRUD Operations (Using Convex)
- **Create:** Add todos (title, description, due date)  
- **Read:** Fetch and display todos in real-time  
- **Update:** Edit todos or toggle complete/incomplete  
- **Delete:** Remove todos (swipe-to-delete or buttons)

### 📱 UI/UX Features
- Search and filter todos  
- Empty states & loading indicators  
- Drag and sort functionality  

---

## ✅ Acceptance Criteria

- Pixel-perfect implementation  
- Smooth theme switching with persistent preferences  
- Full CRUD functionality (real-time via Convex)  
- Proper error handling for network & validation  
- Responsive on all screen sizes  
- Clean, modular code structure  
- Accessibility compliance (contrast, screen reader support)

---

## 🧰 Tech Stack

- **React Native (Expo)**
- **Convex Backend**
- **Styled Components**
- **React Navigation**
- **Expo Router**

---

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/todoapp.git
cd todoapp
```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```
### 3. Setup Environment Variables

Create a .env file in the root directory with:
``` bash
EXPO_PUBLIC_CONVEX_URL=https://YOUR-CONVEX-DEPLOYMENT.convex.cloud

```
### 4. Run Development Server
```bash
npx expo start
```
### 5. Build APK (Optional)
```bash
eas build -p android --profile preview
```
## 🗝️ Convex Setup Steps

**1. Install Convex CLI** 
```bash 
npm install -g convex
```

**2. Log in & initialize Convex**  
```bash
npx convex dev
```

**3. Deploy to production when ready**  
```bash
npx convex deploy
```

**4. Copy your Convex deployment URL and place it in your `.env` file.**

---

## 📦 Build Commands

| Command | Description |
|----------|--------------|
| `npx expo start` | Run the app in development mode |
| `npx expo run:android` | Build and install the app on an Android device |
| `npx expo export` | Export static build |
| `eas build -p android` | Build an APK via Expo Application Services |

---

## 🎥 Demo & APK Links

📱 **APK Download:** [Download APK](https://drive.google.com/file/d/19kUFG6mzq2RmHlK1g1OoKSXu7_CkjjKy/view?usp=drive_link)  
🎬 **Demo Video:** [Watch Demo](https://drive.google.com/file/d/159Rxa6J9-02TnFDmI1slJkaTCDO9rVz1/view?usp=sharing)

---

## 🧾 Submission Checklist

- [x] CRUD operations fully functional  
- [x] Theme switcher works correctly  
- [x] Real-time updates functional  
- [x] Code clean and documented  
- [x] Proper README instructions included  
- [x] APK and demo video submitted  

---

## 💪 Author

**Frontend Wizard — Stage 3b Task**  
Created by Beekay
