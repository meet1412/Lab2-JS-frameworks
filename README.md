# Assignment-2

## Overview

This assignment demonstrates the usage of four JavaScript functions that perform distinct tasks such as logging personal details, converting units, calculating factorials, and computing the future value of investments. The provided code imports these functions from an external utility file and executes them with sample inputs.

## Files

- **`main.js`** - This file imports and calls the functions.
- **`utilityJavascriptFile.js`** - Contains the actual implementations of the functions.

## Functions

### 1. `First_Function(name, currentAge, birthYear)`
- **Description**: Logs a personalized greeting and displays the user's current age and birth year.
- **Parameters**:
  - `name` (String): The name of the user.
  - `currentAge` (Number): The user's current age.
  - `birthYear` (Number): The year the user was born.
- **Example**:
    ```javascript
    First_Function("Meet Patel", 14, 2003);
    ```

### 2. `Second_Function(meters)`
- **Description**: Converts a distance from meters to feet.
- **Parameters**:
  - `meters` (Number): The distance in meters to be converted.
- **Returns**: The equivalent distance in feet.
- **Example**:
    ```javascript
    const feet = Second_Function(25); // Converts 25 meters to feet
    ```

### 3. `Third_Function(n)`
- **Description**: Calculates the factorial of a given number `n`.
- **Parameters**:
  - `n` (Number): The number for which the factorial is calculated.
- **Returns**: A string containing the factorial of `n`.
- **Example**:
    ```javascript
    const result = Third_Function(5); // Calculates factorial of 5
    ```

### 4. `Fourth_Function(monthlyInvestment, yearlyRate, noOfYears)`
- **Description**: Computes and logs the future value of a monthly investment over a certain number of years.
- **Parameters**:
  - `monthlyInvestment` (Number): The amount invested monthly.
  - `yearlyRate` (Number): The annual interest rate in percentage.
  - `noOfYears` (Number): The number of years for which the investment will be made.
- **Example**:
    ```javascript
    Fourth_Function(500, 5, 3); // Calculates the future value for 3 years of monthly investments
    ```

## How to Run the Code

1. Run the following command to execute the code:
    ```bash
    node main.js
    ```
