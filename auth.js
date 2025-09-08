// تسجيل مستخدم جديد
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // حفظ بيانات المستخدم في localStorage
  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
  window.location.href = "login.html";
});

// تسجيل الدخول
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("مرحبًا " + user.name + " 👋");
    window.location.href = "index.html"; // بعد الدخول يرجع للصفحة الرئيسية
  } else {
    alert("خطأ في البريد الإلكتروني أو كلمة المرور!");
  }
});
