const pages = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Settings", path: "/settings" },
        { name: "Profile", path: "/profile" },
      ];

      const pageList = document.getElementById("pageList");
      pages.forEach(({ name, path }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = path;
        a.textContent = name;
        li.appendChild(a);
        pageList.appendChild(li);
      });

      const toggleBtn = document.getElementById("toggleSidebar");
      const sidebarWrapper = document.getElementById("devSidebarWrapper");
      const arrow = toggleBtn.querySelector(".arrow");

      toggleBtn.addEventListener("click", () => {
        const isOpen = !sidebarWrapper.classList.contains("hidden");
        sidebarWrapper.classList.toggle("hidden");
        arrow.textContent = isOpen ? "»" : "«";
      });