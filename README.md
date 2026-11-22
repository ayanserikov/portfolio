<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ayan Serikov | Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav>
    <span class="logo">&lt;Ayan/&gt;</span>
    <div class="links">
      <a href="#about">Haqimda</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Loyihalar</a>
      <a href="#contact">Aloqa</a>
    </div>
  </nav>

  <section class="hero">
    <h1>Salom, men <span>Ayan</span> 👋</h1>
    <p id="typing"></p>
    <a href="#projects" class="btn">Loyihalarim</a>
  </section>

  <section id="about" class="reveal">
    <h2>Men haqimda</h2>
    <p>Men O'zbekistondan dasturchiman. Hozir Kotlin va Android
    ishlab chiqishni o'rganyapman, Python va veb texnologiyalar
    bilan loyihalar yarataman.</p>
  </section>

  <section id="skills" class="reveal">
    <h2>Texnologiyalar</h2>
    <div class="skill"><span>Python</span><div class="bar"><div data-w="75"></div></div></div>
    <div class="skill"><span>JavaScript</span><div class="bar"><div data-w="60"></div></div></div>
    <div class="skill"><span>HTML / CSS</span><div class="bar"><div data-w="70"></div></div></div>
    <div class="skill"><span>Kotlin</span><div class="bar"><div data-w="40"></div></div></div>
  </section>

  <section id="projects" class="reveal">
    <h2>Loyihalar</h2>
    <div class="cards">
      <a class="card" href="https://github.com/ayanserikov537-cyber/python-todo" target="_blank">
        <h3>📝 Python To-Do</h3>
        <p>Konsol vazifalar ro'yxati ilovasi.</p>
      </a>
      <div class="card">
        <h3>🤖 Telegram bot</h3>
        <p>Tez orada...</p>
      </div>
      <div class="card">
        <h3>📱 Android ilova</h3>
        <p>Tez orada...</p>
      </div>
    </div>
  </section>

  <section id="contact" class="reveal">
    <h2>Aloqa</h2>
    <p>Buyurtma yoki hamkorlik uchun yozing:</p>
    <a class="btn" href="https://github.com/ayanserikov537-cyber" target="_blank">GitHub</a>
  </section>

  <footer>© 2026 Ayan Serikov</footer>
  <script src="script.js"></script>
</body>
</html>
