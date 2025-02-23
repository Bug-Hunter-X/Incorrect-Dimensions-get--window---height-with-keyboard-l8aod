This bug occurs when using the `Dimensions` API in React Native to get screen dimensions.  The issue is that `Dimensions.get('window')` returns incorrect dimensions, particularly the height, when the keyboard is visible. This is because the `window` dimensions reflect the entire screen, including the area obscured by the keyboard.  The `Dimensions.get('screen')` call will return the screen dimensions excluding the keyboard.