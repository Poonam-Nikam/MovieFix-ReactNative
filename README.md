# Movie App React Native

This is a React Native application for browsing movies with search, scroll functionality, and genre filters.

## Installation

### Prerequisites

- Node.js (version >= 12.0.0)
- npm (version >= 6.0.0) or yarn (version >= 1.0.0)
- Expo CLI (if using Expo for React Native development)

### Steps
* Node.js: Make sure you have Node.js installed. You can download it from nodejs.org.

* npm or Yarn: npm is installed with Node.js by default. Alternatively, you can use Yarn for package management. Install Yarn from yarnpkg.com if preferred.

* Java Development Kit (JDK): Required for Android development. Download and install JDK from adoptopenjdk.net or oracle.com/java.

* Android Studio: Required for Android development. Download Android Studio from developer.android.com/studio and follow the installation instructions.


### Configuring Android Studio

Open Android Studio:

Launch Android Studio from your applications folder or desktop shortcut.
Set Up Android SDK:

When Android Studio opens, it will prompt you to set up Android SDK components.
Follow the on-screen instructions to install the necessary SDK components and accept the licenses.
Configure Android Virtual Device (AVD):

To run your React Native application on an Android emulator, you need to set up an Android Virtual Device (AVD).
Open Android Studio and click on Configure > AVD Manager.
Click Create Virtual Device, then choose a device definition and click Next.
Select a system image with the API level required by your React Native project and click Next.
Give your AVD a name and click Finish to create it.
Additional Configuration
Environment Variables:

Ensure that Android SDK and platform tools are added to your system's PATH environment variable for command-line access.
Verify Installation:

Open a terminal and run sdkmanager --version to verify the Android SDK installation.
Run adb --version to verify the Android Debug Bridge (ADB) installation.

1. **Clone the repository**

 1. ```bash
   git clone https://github.com/Poonam-Nikam/MovieFix-ReactNative

  2. Go To Your Project

  3. Npm Install

  4. npm start

  5.npx react-native run-android

# If using Expo CLI
expo start

# If using React Native CLI
npx react-native run-android
# or
npx react-native run-ios

## Features

- Search for movies by title.
- Filter movies by genre.
- Infinite scrolling to load more movies.

##Requirements Covered

* Covered
Search functionality.
Scroll functionality.
Genre filter buttons UI.

* Not Covered
Authentication (if applicable).
Backend integration details (if applicable).
































This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.




# React Native Movie Search

A React Native application to search for movies based on a search string. The app includes a SearchBar component for user input and displays movie results.

## Requirements Covered

- Implemented SearchBar component for movie search functionality.
- Implement Home Component
- Implemented menubar of filter according genre


## Requirements Not Covered

- Advanced filtering or sorting of search results.
- Detailed movie information pages.
- Persistent storage of search history.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio or Xcode (for Android or iOS development)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/react-native-movie-search.git
    cd react-native-movie-search
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the Metro bundler**:
    ```bash
    npx react-native start
    ```

4. **Run the application**:
    - For iOS:
        ```bash
        npx react-native run-ios
        ```
    - For Android:
        ```bash
        npx react-native run-android
        ```

### Usage

1. Open the app on your emulator or physical device.
2. Use the search bar at the top to type in a movie name.
3. View the search results below the search bar.




### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




