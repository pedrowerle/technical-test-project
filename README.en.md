> 🇧🇷 [Versão em português disponível aqui](README.md)

# 🧪 Test Automation with Playwright — SauceDemo

This project is a technical end-to-end automation test using [Playwright](https://playwright.dev/).  
The goal is to validate the behavior of the **SauceDemo** application, focusing on login, cart operations, product sorting, and the checkout flow.

---

## ✅ Technologies Used

- [Playwright](https://playwright.dev/)
- TypeScript
- Native Playwright Test Runner
- Page Object Model (POM)
- Custom fixtures

---

## 🧠 Tested Features

### 🔐 Login
- Login with valid credentials
- Login with invalid credentials
- Successful logout

### 🛒 Cart
- Add product to cart
- Remove product from cart
- Validate cart item counter in the cart icon
- ⚠️ **Negative Test**: Validate that the system allows proceeding to checkout with an empty cart (unexpected behavior detected)

### 🔃 Sorting
- Sort products by price (from low to high)

### ✅ Checkout
- Validation of required fields in the checkout form
- Validation of subtotal, tax, and final total values on the overview screen

---

## 📁 Project Structure

```
├── pages/                  # Page Object implementations used in tests
├── selectors/              # Selectors separated by page
├── fixtures/               # Custom fixtures
├── tests/                  # Test execution files
├── playwright.config.ts    # Playwright configuration
└── README.md
```

---

## 🧩 Implemented Differentials

- Custom fixtures for context control (e.g., already logged in, already at checkout)
- Clear separation of responsibilities (Page Objects, Selectors, Fixtures, Tests)
- Coverage of negative scenarios and business rule validations
- Manual calculation and verification of values displayed in the interface
- Use of best practices like `.toBeCloseTo()` for accurate monetary comparisons

---
