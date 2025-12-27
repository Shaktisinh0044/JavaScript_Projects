# 🧾 Stock Management System

A simple and responsive web application to manage store items like item name, quantity, price, and category using **HTML**, **Bootstrap 5**, and **Vanilla JavaScript**.

🔗 **[Live Preview](https://shaktisinh0044.github.io/JavaScript_Projects/Stock_Management_System/)**  


---

## ✨ Features

1. 📝 **Form Validation** – Prevents blank entries using JS `if` conditions.
2. 📊 **Dynamic Table Generation** – Adds new entries to the table in real-time.
3. 🗂️ **Category Selector** – Dropdown with product types like Dairy, Bakery, Beverages, etc.
4. 💰 **Numeric Inputs** – Accepts price and quantity with `<input type="number">`.
5. 🗑️ **Delete Item** – Remove items with confirmation alert using a custom JS `deleteitem()` function.
6. 🔢 **Auto-Incrementing S. No.** – Automatically numbers each new item.
7. 🎨 **Bootstrap UI** – Uses Bootstrap 5 layout and components for styling.
8. 🌙 **Dark Mode Look** – Black background and light text via custom CSS.
9. 🔗 **Font Awesome Icon** – GitHub icon added with an external link.
10. 🧠 **Pure JavaScript** – Lightweight app without any frameworks.

---

## 🧠 JavaScript Functions Breakdown

- `additems()`:  
  - Reads input values.
  - Validates empty fields.
  - Inserts new row in the table with serial number.
  - Clears input fields after submission.

- `deleteitem(e)`:  
  - Confirms with user before hiding the selected row using `style.display = "none"`.

---

## 🗃 Folder Structure

Stock_Management_System/
├── index.html # Main structure
├── script.js # JS logic for add/delete
├── README.md # Project description
└── Bootstrap CDN # For styles and responsiveness



---

## 📚 What I Learned

- ✅ DOM manipulation using `document.querySelector`, `insertRow`, `insertCell`.
- ✅ HTML5 semantic tags and input types.
- ✅ Bootstrap grid system and form-floating UI.
- ✅ How to make a responsive & interactive web UI.
- ✅ Clean structuring of projects for deployment with GitHub Pages.

---

## 👤 Author

**Shaktisinh Parmar**  
📍 Ahmedabad, India  
💼 GitHub: [@Shaktisinh0044](https://github.com/Shaktisinh0044)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify with credit.


