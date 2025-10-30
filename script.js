document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const buttons = document.querySelectorAll(".btn.primary");
  const copyBtn = document.getElementById("copyBtn");
  const yearEl = document.getElementById("year");
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-list");

  // Set current year
  yearEl.textContent = new Date().getFullYear();

  // Conversion Functions
  const toUpperCase = (text) => text.toUpperCase();
  const toLowerCase = (text) => text.toLowerCase();
  const toTitleCase = (text) =>
    text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  const toSentenceCase = (text) => {
    const lower = text.toLowerCase();
    return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  };

  // Button Events
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = textInput.value;
      const action = btn.dataset.action;

      switch (action) {
        case "upper":
          textInput.value = toUpperCase(text);
          break;
        case "lower":
          textInput.value = toLowerCase(text);
          break;
        case "title":
          textInput.value = toTitleCase(text);
          break;
        case "sentence":
          textInput.value = toSentenceCase(text);
          break;
      }
    });
  });

  // Copy Text
  copyBtn.addEventListener("click", () => {
    if (textInput.value.trim() !== "") {
      navigator.clipboard.writeText(textInput.value);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy Text"), 1500);
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.style.display === "flex";
    navList.style.display = isOpen ? "none" : "flex";
  });

  // Close menu on mobile link click
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 900) navList.style.display = "none";
    });
  });
});
