document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "weather.html";
      } else {
        document.getElementById("error-message").textContent =
          "Ошибка авторизации. Проверьте данные!";
      }
    } catch (error) {
      document.getElementById("error-message").textContent =
        "Ошибка сети. Попробуйте снова!";
    }
  });
