document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
  this.reset();
});

function searchCourses() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let items = document.querySelectorAll("#courseList li");

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// إظهار الإشعار بعد 5 ثواني
window.onload = function() {
  setTimeout(() => {
    document.getElementById("promoPopup").style.display = "block";
  }, 5000);
}

// إغلاق الإشعار
function closePopup() {
  document.getElementById("promoPopup").style.display = "none";
}

// إعداد الوقت النهائي للعرض (مثال: 3 أيام من الآن)
let offerEnd = new Date();
offerEnd.setDate(offerEnd.getDate() + 3); // 3 أيام من الآن

function updateCountdown() {
  let now = new Date().getTime();
  let distance = offerEnd - now;

  if (distance <= 0) {
    document.getElementById("countdown").textContent = "انتهى العرض!";
    clearInterval(countdownInterval);
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent = 
    `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}

// تحديث العداد كل ثانية
let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // لتحديث الفورم عند التحميل

let selectedRating = 0;

// ⭐ اختيار النجوم
document.querySelectorAll('.rating span').forEach(star => {
  star.addEventListener('click', function () {
    selectedRating = this.getAttribute('data-star');
    document.querySelectorAll('.rating span').forEach(s => s.classList.remove('active'));
    this.classList.add('active');
    let next = this.nextElementSibling;
    while (next) {
      next.classList.add('active');
      next = next.nextElementSibling;
    }
  });
});

// 📝 إرسال المراجعة
function submitReview() {
  let reviewText = document.getElementById("reviewText").value;
  if (selectedRating === 0 || reviewText.trim() === "") {
    alert("رجاءً اختر تقييم واكتب مراجعة.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `⭐ ${selectedRating} - ${reviewText}`;
  document.getElementById("reviewList").appendChild(li);

  // تفريغ الحقول
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  document.querySelectorAll('.rating span').forEach(s => s.classList.remove('active'));
}
