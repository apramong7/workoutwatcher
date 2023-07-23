# WorkoutWatcher - Yoga Posture Correction App

WorkoutWatcher is a mobile app developed with React Native, designed as part of our capstone project for our final year in the Mechatronics Engineering program at the University of Waterloo. The app complements a smart pressure-sensitive yoga mat that utilizes a grid of copper tape and Velostat to sense pressure and position.

## Features

- Read data from pressure-sensitive yoga mat stored in Firestore database.
- User account creation and authentication system.
- Menu of yoga poses for users to select.
- Real-time posture and pressure correction guidance for performing yoga correctly.

## How It Works

1. The smart yoga mat captures pressure data via the grid of copper tape and Velostat.
2. Raspberry Pi reads and sends the data to Firestore database.
3. Users log in to the WorkoutWatcher app and select a yoga pose from the menu.
4. Upon stepping on the yoga mat, the app retrieves the data from Firestore.
5. The app processes the data and provides real-time feedback to correct posture and pressure during yoga.

## Installation

1. Clone this repository.
2. Install dependencies using npm or yarn.
3. Set up Firebase Firestore configuration in the app.
4. Run the app on your mobile device using React Native commands.

## Authors

- Ana Ramon (https://github.com/AnaPaulaRamon) - University of Waterloo
