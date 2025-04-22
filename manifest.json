function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('aside button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id + '-btn').classList.add('active');
}

function analyzeUrl() {
  const input = document.getElementById('scanUrl').value;
  const result = document.getElementById('scanResult');
  const fill = document.getElementById('riskFill');
  if (!input) return result.innerText = 'يرجى إدخال رابط للفحص';
  result.innerText = 'جاري التحليل...';
  let score = 0;
  if (!input.startsWith('https')) score++;
  if (input.includes('login') || input.includes('verify')) score++;
  if (input.length > 80) score++;
  if (input.match(/\d+\.\d+\.\d+\.\d+/)) score++;
  const risk = Math.min(score * 25, 100);
  setTimeout(() => {
    result.innerText = `تحليل الموقع:
    - HTTPS: ${input.startsWith('https') ? 'نعم' : 'لا'}
    - يحتوي IP: ${/\d+\.\d+\.\d+\.\d+/.test(input) ? 'نعم' : 'لا'}
    - كلمات خطرة: ${score}
    - درجة الخطورة: ${risk}%`;
    fill.style.width = risk + '%';
  }, 1500);
}

function askAI() {
  const q = document.getElementById('aiInput').value.toLowerCase();
  const a = document.getElementById('aiResponse');
  if (q.includes('xss')) a.innerText = 'XSS هي ثغرة تُستغل لحقن سكريبت داخل صفحات المواقع. المصدر: OWASP.';
  else if (q.includes('sql')) a.innerText = 'SQLi تسمح للمهاجم بتنفيذ استعلامات ضارة عبر المدخلات. المصدر: OWASP.';
  else if (q.includes('csrf')) a.innerText = 'CSRF تُنفذ عمليات غير مصرح بها باسم المستخدم. المصدر: OWASP.';
  else a.innerText = 'يرجى توضيح السؤال أكثر أو استخدام مصطلحات مثل XSS, SQLi, IDOR.';
}

function generatePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let pass = '';
  for (let i = 0; i < 16; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById('generatedPass').innerText = 'كلمة مرور قوية: ' + pass;
}

window.onload = () => showSection('home');
