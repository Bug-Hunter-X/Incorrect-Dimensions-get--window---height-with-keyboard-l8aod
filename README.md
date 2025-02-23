# React Native Dimensions Bug: Inaccurate Height with Keyboard

This repository demonstrates a common issue in React Native applications where using `Dimensions.get('window')` to obtain screen dimensions returns an incorrect height when the soft keyboard is visible.  The provided solution illustrates a reliable method to handle this scenario.

## Problem

The `Dimensions` API in React Native, specifically `Dimensions.get('window')`, returns the dimensions of the application window.  When the keyboard is displayed, this window's height does not reflect the visible screen area because the keyboard obscures a portion of the screen.  This often leads to layout issues and incorrect rendering.

## Solution

The solution uses the `Keyboard` API to listen for keyboard events and updates the screen dimensions accordingly. By using `Dimensions.get('screen')` we obtain screen dimensions that are independent of the keyboard.

## Usage

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the application using your preferred React Native development environment.