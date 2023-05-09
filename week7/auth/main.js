document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    
    fetch("users.json")
      .then(response => response.json())
      .then(data => {
        var users = data.users;

        var matchedUser = users.find(user => user.username === username && user.password === password);
        console.log(matchedUser)
  
        if (matchedUser) {
            document.getElementById("status").textContent = "Login successful!";
        } else {
            document.getElementById("status").textContent = "Invalid username or password.";
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });