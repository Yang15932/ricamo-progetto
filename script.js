document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let current = Number(slider.dataset.start || 0);
  let timer;

  function paint(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    current = index;
  }

  function go(step) {
    const nextIndex = (current + step + slides.length) % slides.length;
    paint(nextIndex);
  }

  function start() {
    stop();
    timer = setInterval(() => go(1), 5000);
  }

  function stop() {
    if (timer) clearInterval(timer);
  }

  prev?.addEventListener("click", () => {
    go(-1);
    start();
  });

  next?.addEventListener("click", () => {
    go(1);
    start();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      paint(index);
      start();
    });
  });

  paint(current);
  start();
});

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("这是静态演示表单。如果你需要，我可以继续帮你接入真实提交功能。");
  });
});
