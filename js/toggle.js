document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".menu-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      if (!content) return;

      const isVisible = content.style.display === "block";
      // 切换展开与收起
      content.style.display = isVisible ? "none" : "block";
    });
  });
});
