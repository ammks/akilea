const posts = document.querySelectorAll(".top-blog-content");
const filterButtons = document.querySelectorAll(".blog-filter-btn");
const searchInput = document.getElementById("blog-search-input");
const searchBtn = document.getElementById("blog-search-btn");

function filterPosts() {
    const keyword = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector(".blog-filter-btn.active").dataset.filter;

    posts.forEach(post => {
        const title = post.querySelector(".top-blog-content-title").textContent.toLowerCase();
        const category = post.dataset.category;

        const matchKeyword = title.includes(keyword);
        const matchCategory = (activeFilter === "all" || activeFilter === category);

        if (matchKeyword && matchCategory) {
            post.classList.remove("hidden");
        } else {
            post.classList.add("hidden");
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterPosts();
    });
});

searchBtn.addEventListener("click", filterPosts);
searchInput.addEventListener("input", filterPosts);
