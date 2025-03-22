This project automates product search and add-to-cart actions using Playwright. 
It ensures a seamless end-to-end testing process for e-commerce applications.

URL: https://automationexercise.com/

🚀 Features

Automated product search

Adding products to the cart

Headless and headed execution

Cross-browser testing (Chromium, Firefox, WebKit)

Detailed reports & screenshots

📌 Prerequisites

Node.js (>= 16.x)

npm or yarn

📦 Installation

Clone the repository:

git clone https://github.com/litamouri/Playwright-Automation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

▶️ Running Tests

Run all tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run tests in a specific browser:

npx playwright test --browser=chromium

📝 Test Structure

tests/1.searchProducts.spec.js & tests/2.addToCart.spec.js → Contains test cases for searching and adding items to the cart.

playwright.config.js → Configuration settings for test execution.

📊 Reporting

Generate and view reports:

npx playwright show-report 

<img width="992" alt="Screenshot 2025-03-23 at 3 07 09 AM" src="https://github.com/user-attachments/assets/1dee6c2f-a6ef-4ea3-a939-d7595d795de9" />

<img width="1048" alt="Screenshot 2025-03-23 at 2 57 26 AM" src="https://github.com/user-attachments/assets/fe21289c-dc6b-4a2a-a70b-b1a016cfebee" />






🛠️ Debugging

Use Playwright’s UI mode for debugging:

npx playwright test --ui

