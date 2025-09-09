import { saveUser, getUsers } from "./db.js";

function handleSubmit() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please enter username and password!");
    return;
  }

  saveUser(username, password);

  // Clear the inputs
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Expose to HTML
window.handleSubmit = handleSubmit;

// Optional: show current users in console
console.log("📂 All users in DB:", getUsers());