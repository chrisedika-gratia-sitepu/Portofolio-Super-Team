(function () {
    var root = document.documentElement;

    function initialTheme() {
        return "light";
    }

    function apply(theme) {
        root.setAttribute("data-theme", theme);
        var btn = document.getElementById("dm-toggle");
        if (btn) {
            var isDark = theme === "dark";
            btn.textContent = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19";
            btn.setAttribute("aria-pressed", String(isDark));
            btn.setAttribute("aria-label", isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
            btn.title = btn.getAttribute("aria-label");
        }
    }

    apply(initialTheme());

    function init() {
        var btn = document.createElement("button");
        btn.id = "dm-toggle";
        btn.type = "button";
        document.body.appendChild(btn);
        apply(root.getAttribute("data-theme") || "light");

        btn.addEventListener("click", function() {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark"
            root.classList.add("dm-animate");
            apply(next);
            save(next);
        })
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();