/* clean-urls.js
   URL-only patch.
   Does not change page rendering, data, styles, or navigation logic.
   Existing *.html pages load normally first; then only the visible URL is cleaned.
*/
(() => {
    const allowed = new Set([
        "index",
        "news",
        "research",
        "members",
        "publications",
        "awards",
        "contact"
    ]);

    function cleanVisibleUrl() {
        const path = window.location.pathname;
        const match = path.match(/^\/([^\/]+)\.html$/);

        if (!match) return;

        const page = match[1];
        if (!allowed.has(page)) return;

        const cleanPath = page === "index" ? "/" : `/${page}`;
        const cleanUrl = cleanPath + window.location.search + window.location.hash;

        history.replaceState(history.state, "", cleanUrl);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", cleanVisibleUrl);
    } else {
        cleanVisibleUrl();
    }
})();
