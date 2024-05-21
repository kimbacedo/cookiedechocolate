export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowPorcentagem = window.innerHeight * 0.85;

    sections[0].classList.add("ativo");

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top - windowPorcentagem;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}
