var postsContent = `
    <section id="posts">
        <h2>Vaše závody</h2>
        <p>Zde budou zobrazeny všechny vaše závody.</p>
        <select id="filter" name="filter">
        <option value="name">Jména</option>
        <option value="date">Data</option>
        <option value="place">Místa</option>
        <option value="position">Umístění</option>
      </select>
        <button id="filterButton">Filtrovat</button>
    </section>

    <main id="postsMain">

    </main>
`;
document.getElementById('main-content').innerHTML = postsContent;
// Parse the local storage data and display it in the posts section
function displayPosts() {
    var postsHTML = '';
    for (var i = 0; i < localStorage.length; i++) {
        var key =  localStorage.key(i);
        var post = JSON.parse(localStorage.getItem(key));
        postsHTML += `
        <section class="post">
            <h2>${post.name}</h2>
            <p class="date">${post.date}</p>
            <p><strong>Place:</strong> ${post.place}</p>
            <p><strong>Position:</strong> ${post.position}</p>
            <p><strong>Feedback:</strong> ${post.feedback}</p>
            <button class="delete-button" onclick="deletePost('${key}')">Delete</button>

        </section>
    `;
    }
   
    document.getElementById('postsMain').innerHTML = postsHTML;

}
displayPosts();

//delete post
function deletePost(key) {
    localStorage.removeItem(key);
    displayPosts();
}
