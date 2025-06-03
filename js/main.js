document.addEventListener("DOMContentLoaded", () => {
  // Dialog functionality for project images//
  const projects = document.querySelectorAll(".projects__item");
  const dialog = document.getElementById("project-dialog");
  const dialogImg = document.getElementById("project-dialog-img");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const img = project.querySelector(".projects__img");
      if (img) {
        dialogImg.src = img.src;
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          // Fallback for browsers that don't support <dialog>
          dialog.setAttribute("open", "");
        }
      }
    });
  });

  // Close the dialog when it's clicked anywhere
  dialog.addEventListener("click", () => {
    dialog.close();
  });
});

// Popover toggle functionality
const popoverButtons = document.querySelectorAll("[popover]");
popoverButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const popoverId = btn.getAttribute("popover");
    const popoverEl = document.getElementById(popoverId);
    if (popoverEl) {
      if (popoverEl.hasAttribute("hidden")) {
        popoverEl.removeAttribute("hidden");
      } else {
        popoverEl.setAttribute("hidden", "");
      }
      const rect = btn.getBoundingClientRect();
      popoverEl.style.position = "absolute";
      popoverEl.style.top = `${rect.bottom + window.scrollY}px`;
      popoverEl.style.left = `${rect.left + window.scrollX}px`;
    }
  });
});

// Hide popovers when clicking outside
document.addEventListener("click", (e) => {
  popoverButtons.forEach((btn) => {
    const popoverId = btn.getAttribute("popover");
    const popoverEl = document.getElementById(popoverId);
    if (popoverEl && !btn.contains(e.target) && !popoverEl.contains(e.target)) {
      popoverEl.setAttribute("hidden", "");
    }
  });
});
