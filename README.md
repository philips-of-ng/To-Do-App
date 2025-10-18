# 📝 React Todo App

A simple yet modern **Todo List application** built with **React**.  
This project demonstrates key JavaScript and React concepts — including **FormData**, **JSON handling**, **Promises**, and **async/await** — in a practical and interactive way.

---

## 🚀 Features

- ✏️ Add new todos using a form powered by **FormData**
- ✅ Mark tasks as complete or incomplete
- ❌ Delete todos
- 💾 Automatically saves todos using **localStorage** and **JSON**
- ⏳ Simulates API requests using **Promises** and **async/await**
- ⚡ Clean and responsive React component structure

---

## 🧠 Concepts Demonstrated

| Concept | Description | Where It Appears |
|----------|--------------|------------------|
| **FormData** | Used to extract form input values in a structured way | `TodoForm.js` |
| **JSON** | Used to store and retrieve todos from localStorage | `TodoWrapper.js` |
| **Promises** | Used in a mock API function (`fakeApiCall`) to simulate network requests | `TodoWrapper.js` |
| **async/await** | Used to handle asynchronous logic for adding and deleting todos | `TodoWrapper.js` |

---

## 🏗️ Project Structure

```
src/
│
├── components/
│   ├── TodoWrapper.js     # Main logic, state management, async handling
│   ├── TodoForm.js        # Handles form input using FormData
│   └── Todo.js            # Renders individual todo items
│
├── App.js
├── index.js
└── styles.css
```

---

## ⚙️ How It Works

1. **Adding a Todo**
   - User enters a task and submits the form.
   - `FormData` extracts the input value.
   - The app simulates saving to a backend using `fakeApiCall()` (a Promise).
   - The todo is stored locally in `localStorage` using `JSON.stringify()`.

2. **Deleting a Todo**
   - When a user deletes a task, another simulated async function (`fakeApiCall`) runs before updating the list.

3. **Persistence**
   - Todos are stored in the browser’s **localStorage**, so they remain even after refreshing.

---

## 🧰 Technologies Used

- **React** (with Hooks)
- **JavaScript (ES6+)**
- **FontAwesome Icons**
- **localStorage API**
- **Promises** and **async/await**

---

## 🧪 Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

---

## 💡 Future Improvements

- ✏️ Add edit functionality for todos  
- 🌐 Connect to a real backend API  
- 🎨 Improve design with animations or Tailwind CSS  
- 🔔 Add notifications for task completion  

---

## 👤 Author

**Philips Edun**  
Frontend Developer & React Learner  
Built with ❤️ while learning advanced JavaScript and React concepts.

---

## 🪄 License

This project is open source and available under the [MIT License](LICENSE).
