window.addEventListener("load", () => {
    // Slight delay helps wait for layout/render
    setTimeout(() => {
      const items = document.querySelectorAll(".chat-item");
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
  
      items.forEach((item) => observer.observe(item));
    }, 500);
  });
  