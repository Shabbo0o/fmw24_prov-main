// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.


async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        const container = document.getElementById("post-container");

        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");

            postCard.innerHTML = `
            <p><b>Name:</b> ${post.title}</p>
            <p><b>Email:</b> ${post.body}</p>
            `;

        container.appendChild(postCard);
        });
    } catch (error) {
    console.error("Error fetching posts:", error);
    }
}

fetchPosts();