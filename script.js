let posts = [];

function addPost() {
  const username = document.getElementById("username").value;
  const image = document.getElementById("image").value;
  const caption = document.getElementById("caption").value;

  if (!username || !image || !caption) {
    alert("Please fill all fields");
    return;
  }

  posts.unshift({
    username,
    image,
    caption,
    likes: 0
  });

  renderPosts();

  document.getElementById("image").value = "";
  document.getElementById("caption").value = "";
}

function likePost(index) {
  posts[index].likes++;
  renderPosts();
}

function renderPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    feed.innerHTML += `
      <div class="post">
        <h3>${post.username}</h3>
        <img src="${post.image}">
        <p>${post.caption}</p>

        <div>❤️ ${post.likes}</div>

        <button class="like-btn" onclick="likePost(${index})">
          Like
        </button>
      </div>
    `;
  });
}
