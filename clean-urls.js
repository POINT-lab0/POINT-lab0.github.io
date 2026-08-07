/* clean-urls.js
   Clean URL helper for GitHub Pages / custom domain.
   Keeps existing site logic intact while showing folder-style URLs.
*/
(() => {
    const routes = {
        "/index.html": "/",
        "/news.html": "/news/",
        "/research.html": "/research/",
        "/members.html": "/members/",
        "/publications.html": "/publications/",
        "/awards.html": "/awards/",
        "/contact.html": "/contact/"
    };

    function cleanCurrentAddress() {
        const cleanPath = routes[window.location.pathname];
        if (!cleanPath) return;

        const target = cleanPath + window.location.search + window.location.hash;
        window.history.replaceState(window.history.state, "", target);
    }

    function cleanHref(rawHref) {
        if (!rawHref) return null;
        if (
            rawHref.startsWith("#") ||
            rawHref.startsWith("mailto:") ||
            rawHref.startsWith("tel:") ||
            rawHref.startsWith("javascript:")
        ) return null;

        try {
            const url = new URL(rawHref, document.baseURI);
            if (url.origin !== window.location.origin) return null;

            const cleanPath = routes[url.pathname];
            if (!cleanPath) return null;

            return cleanPath + url.search + url.hash;
        } catch (_) {
            return null;
        }
    }

    function rewriteLinks(root = document) {
        root.querySelectorAll("a[href]").forEach(link => {
            const cleaned = cleanHref(link.getAttribute("href"));
            if (cleaned) link.setAttribute("href", cleaned);
        });
    }

    function normalize(path) {
        if (!path || path === "/") return "/";
        return path.replace(/\/+$/, "");
    }

    function updateActiveMenu() {
        const current = normalize(window.location.pathname);

        document.querySelectorAll(".nav-item").forEach(item => {
            try {
                const target = normalize(new URL(item.getAttribute("href"), document.baseURI).pathname);
                item.classList.toggle("active", target === current);
            } catch (_) {
                item.classList.remove("active");
            }
        });
    }

    function apply() {
        cleanCurrentAddress();
        rewriteLinks();
        updateActiveMenu();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", apply);
    } else {
        apply();
    }

    // script.js creates header/news links dynamically, so keep those clean too.
    const observer = new MutationObserver(() => {
        rewriteLinks();
        updateActiveMenu();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
