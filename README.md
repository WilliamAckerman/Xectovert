# Xectovert

## Conversions to Octal and Hexadecimal

Created by William Ackerman

Current Version: 1.0

[Link to documentation](https://docs.google.com/document/d/1y1j3nbtbRxNOzJOHChmOQYru0EVX8lZGckcYtJq6fwc/edit?usp=drive_link)

# Table of Contents:
1. Description
2. Installation/Setup
    - 2.1. Prerequisites
    - 2.2. Installation Instructions
        - 2.2.1. Cloning the Repository
        - 2.2.2. Installing Node Modules
        - 2.2.3. Starting the Server
3. Usage
    - 3.1. Converting to Octal
    - 3.2. Converting to Hexadecimal
4. Testing
5. Technologies/Dependencies
6. Contributing Guidelines
7. License
8. Authors/Acknowledgements
    - 8.1. Developers
    - 8.2. External Resources
9. Contact Information

## 1. Description:
Xectovert is a web application that allows a user to enter a number, then convert it to either octal or hexadecimal format.

## 2. Installation/Setup:
It is recommended to have the Live Server VS Code extension installed. When opening this project in Visual Studio Code, click the "Live Server" option at the bottom-right of the screen to launch Xectovert on localhost.

### 2.1 Prerequisites:

- Visual Studio Code: https://code.visualstudio.com/
- Live Server VS Code extension

### 2.2 Installation Instructions:

#### 2.2.1. Cloning the repository:
To do this, use Git Bash and type `git clone https://github.com/WilliamAckerman/Xectovert.git`, then press [ENTER].

#### 2.2.2. Installing node modules:
To install the node_modules folder, type `npm install` into the command line. This will download the files necessary to use this application.

#### 2.2.3. Starting the server:
1. In order to start the server, first have the Live Server extension installed.
2. Click "Live Server" near the bottom-right corner of the screen.
3. A window should open. If you wish to use Xectovert in another browser, simply copy and paste the link into the search bar.

## 3. Usage:
By using Xectovert, one can type in a number they wish to convert to either octal or hexadecimal format, depending on which radio button is currently clicked. When a number has been typed in and a format has been selected, the user can click the "CONVERT" button to see the result of their conversion.

### 3.1 Converting to Octal:
To convert a number to octal format, type a number into the number input field. Then, ensure the radio button to convert to octal format is currently checked. If it is not checked, click the button in order to check it. The radio button to convert a number to octal format is checked by default. When you have typed a number into the number input field and have the radio button to convert to octal format checked, click the "CONVERT" button to see the result of the conversion.

### 3.2 Converting to Hexadecimal:
To convert a number to hexadecimal format, type a number into the number input field. Then, ensure the radio button to convert to hexadecimal is currently checked. If it is not checked, click the button in order to check it. When you have typed a number into the number input field and have the radio button to convert to hexadecimal format checked, click the "CONVERT" button to see the result of the conversion.

## 4. Testing:
To test all of the test files, simply type into the command line `npx jest`. This will run tests for all of the test files.

To run a specific test file, type into the command line `npx jest \_\_tests\_\_/`, then the name of the specific file you would like to test.

## 5. Technologies/Dependencies:

### 5.1. ChatGPT
ChatGPT was used to aid in the development of Xectovert. One notable use of ChatGPT was in generating code for the test files.

### 5.2. CSS
CSS is used to provide styling for Xectovert's user interface.

The following files incorporate CSS:
- footer.css
- style.css

### 5.3. HTML
HTML is used to provide the structure for Xectovert.

The following file incorporates HTML:
- index.html

### 5.4. JavaScript
JavaScript is used to provide conversion functionality to Xectovert.

The following file incorporates JavaScript:
- script.js

### 5.5. Jest
Jest to used for unit testing. The \_\_tests\_\_ folder stores the files for unit testing.

The following files in the \_\_tests\_\_ folder incorporate Jest:
- both_formats.test.js
- hexadecimal_letters_only.test.js
- hexadecimal_no_letters.test.js
- hexadecimal.test.js
- octal.test.js

## 6. Contributing Guidelines:
You are welcome to contribute to this project. Please refer to this project's [Contributing Guidelines](CONTRIBUTING.md) for more information.

## 7. License:
This project uses the MIT License. For more information, please refer to the [LICENSE](LICENSE) file for this project.

## 8. Authors/Acknowledgements:

### 8.1 Developers:
- William Ackerman

### 8.2 External Resources:
- ChatGPT
- Google Gemini
- VS Code Live Server extension
- Jest
- Responsive Test Tool: https://responsivetesttool.com/

## 9. Contact Information:
Creator: William Ackerman
- GitHub: https://github.com/WilliamAckerman
- Email: williamjohnackerman@gmail.com
- LinkedIn: https://www.linkedin.com/in/william-ackerman-6a4005290/
- Phone: (+1) 516-252-8285
