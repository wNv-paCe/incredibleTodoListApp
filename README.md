# Incredible Todo List App - React Native Setup

## System Requirements

The development environment for the **Incredible Todo List App** is set up on the following system:

- **Operating System**: macOS 15.0
- **CPU**: M3 Pro
- **RAM**: 36 GB

This system exceeds the minimum requirements for React Native development, ensuring a smooth development process.

## Installation Instructions

### 1. Install Node.js

Node.js is required to run a React Native project.

- Visit the [Node.js official website](https://nodejs.org).
- Download and install the latest **LTS** version.
- After installation, open a terminal and run the following commands to verify the installation:
  ```bash
  node -v
  npm -v
  ```
  You should see the version numbers of Node.js and npm, confirming the installation.

### 2. Install Expo CLI

Expo CLI is the tool used to create and manage React Native projects in a simplified way.

- Open a terminal and run the following command to install Expo CLI globally:

  ```bash
  npm install -g expo-cli
  ```

- After installation, verify that Expo CLI is installed successfully by running:

  ```bash
  expo --version
  ```

  This command will display the installed version of Expo CLI, confirming a successful installation.

### 3. Install Android Studio (for Android development)

Although Expo simplifies many steps, Android Studio is required to run the app on an Android emulator.

- Visit the [Android Studio official website](https://developer.android.com/studio).
- Download and install Android Studio by following the instructions for your operating system.
- After installation, open Android Studio and complete the default setup.
  You need to install the Android SDK and set up a virtual device for testing.

- To install the required SDK, go to:

  `More Actions` -> `SDK Manager`

  Ensure that Android SDK version 10 (Q) is installed.

- After installing the SDK, set up an Android Virtual Device (AVD) by going to:

  `More Actions` -> `Virtual Device Manager`

  Create a virtual device, select a system image (API level 30 or higher), and start the emulator.

## Configuration Steps

### 1. Configure Environment Variables for Android Development

To build and run Android apps using React Native, you need to configure some environment variables.

#### On macOS:

- Open your terminal and edit the `~/.zshrc` file (since you are using zsh shell):

  ```bash
  nano ~/.zshrc
  ```

- Add the following lines to configure ANDROID_HOME and include platform-tools in your PATH:

  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

- Save the file and run this command to apply the changes:

  ```bash
  source ~/.zshrc
  ```

### 2. Verify Android SDK Setup

To ensure that the Android SDK is correctly configured for Android development with React Native, you need to verify the installation of `adb` (Android Debug Bridge).

- Open a terminal and run the following command to check if `adb` is properly installed and configured:

  ```bash
  adb --version
  ```

- You should see the version information of adb if the Android SDK is correctly set up. If the command returns an error, ensure that the ANDROID_HOME environment variable is correctly configured, and that the platform-tools path is included in your PATH environment variable.
- If everything is configured correctly, you can now use Android devices or emulators to run your React Native projects.

### 3. Install Expo Go on Physical Devices (Optional)

To test your React Native app on a physical device without using an emulator, you can install the **Expo Go** app.

- For Android devices, download **Expo Go** from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
- For iOS devices, download **Expo Go** from the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).

Once installed:

- Run the following command to start your project:

  ```bash
  expo start
  ```

- This will open the Expo Developer Tools in your browser. You will see a QR code.
- Open the Expo Go app on your phone and use the built-in scanner to scan the QR code from the Developer Tools.
- Your app will then load and run on your physical device.

Using Expo Go allows you to instantly preview changes in your app on your phone without needing to rebuild or restart the project.

## Project Creation

### 1. Create a New React Native Project Using `create-expo-app`

To create a new React Native project using the latest version of `create-expo-app`, follow these steps:

- Open a terminal and run the following command:

  ```bash
  npx create-expo-app@latest --template
  ```

- After running this command, you will be prompted to input the project name. Enter IncredibleTodoListApp as your project name.
- Next, you will be prompted to choose a template. For this project, select the blank template to start with a basic setup.

### 2. Navigating into the Project Directory

Once the project is created, navigate into the project directory:

```bash
cd IncredibleTodoListApp
```

### 3. Installing Dependencies

After creating the project, all necessary dependencies will be installed automatically by create-expo-app. However, you can verify the installation by running:

```bash
npm install
```

This ensures that any additional dependencies or updates are installed.

## Running the Project

### Running the Project in an Android Device Simulator

To run your React Native project using Expo on an Android emulator, follow these steps:

### 1. Start the Android Emulator

Before running your project, make sure the Android emulator is set up and running:

- Open **Android Studio**.
- Navigate to `More Actions` -> `Virtual Device Manager`.
- In the **AVD Manager** window, select the Android Virtual Device (AVD) you want to use, and click **Start**. If you haven't set up an emulator, create one by clicking on **Create Virtual Device** and following the setup instructions.

### 2. Start the Expo Development Server

Once your Android emulator is running, navigate to your project directory and start the Expo development server:

- Open a terminal and run:

  ```bash
  expo start
  ```

- This will open the Expo Developer Tools in your web browser, and a QR code will be displayed.

### 3. Run the App on the Android Emulator

- In the Expo Developer Tools that opened in your browser, look for the option Run on Android device/emulator and click on it.
- If the Android emulator is already running, Expo will automatically install the app on the emulator and launch it.

### 4. Troubleshooting

- Emulator Not Starting: Ensure that the emulator is properly set up in Android Studio and that you have selected a system image with the correct API level (preferably API level 30 or higher).
- Device Not Connected: If Expo does not detect the running emulator, try restarting both the emulator and Expo, and ensure that Android Studio is properly configured.