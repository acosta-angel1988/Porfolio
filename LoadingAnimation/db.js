// db.js

// Save a user to "database"
export function saveUser(username, password) {
  // Get existing users from LocalStorage or start with empty array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  users.push({ username, password });

  // Save back to LocalStorage
  localStorage.setItem("users", JSON.stringify(users));

  console.log("✅ User saved:", { username, password });
  console.log("📂 Current DB:", users);

  return users;
}

// Get all users from "database"
export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Clear all users
export function clearDB() {
  localStorage.removeItem("users");
  console.log("🗑️ Database cleared");
}
