const lines = ["Python Developer", "Learning Kotlin & Android", "Freelancer"];
let l = 0, c = 0, del = false;
const el = document.getElementById("typing");

function type() {
  const text = lines[l];
  el.textContent = text.substring(0, c) + "|";
  if (!del && c < text.length) c++;
  else if (del && c > 0) c--;
  else if (!del) { del = true; return setTimeout(type, 1200); }
  else { del = false; l = (l + 1) % lines.length; }
  setTimeout(type, del ? 50 : 100);
}
type();

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      e.target.querySelectorAll("[data-w]").forEach(b => {
        b.style.width = b.dataset.w + "%";
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(s => io.observe(s));
