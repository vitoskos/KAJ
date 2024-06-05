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
    let posts = Object.keys(localStorage).map(key => ({key: key, post: JSON.parse(localStorage.getItem(key))}));

    var postsHTML = '';
    for (var i = 0; i < posts.length; i++) {
        var key =  localStorage.key(i);
        var post = posts[i].post;
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

//add event listener to the filter button
document.getElementById('filterButton').addEventListener('click', function() {
    const filterCriteria = document.getElementById('filter').value;
    const postsMain = document.getElementById('postsMain');
    let posts = Object.keys(localStorage).map(key => ({key: key, post: JSON.parse(localStorage.getItem(key))}));

    posts.sort((a, b) => {
        if (!a.post || !b.post) return 0;  // Přidání kontroly existence post
        let aValue, bValue;

        switch (filterCriteria) {
            case 'name':
                aValue = a.post.name ? a.post.name.toLowerCase() : '';
                bValue = b.post.name ? b.post.name.toLowerCase() : '';
                break;
            case 'date':
                aValue = a.post.date ? new Date(a.post.date) : new Date();
                bValue = b.post.date ? new Date(b.post.date) : new Date();
                break;
            case 'place':
                aValue = a.post.place ? a.post.place.toLowerCase() : '';
                bValue = b.post.place ? b.post.place.toLowerCase() : '';
                break;
            case 'position':
                aValue = a.post.position ? parseInt(a.post.position) : 0;
                bValue = b.post.position ? parseInt(b.post.position) : 0;
                break;
            default:
                return 0;
        }

        if (aValue > bValue) return 1;
        if (aValue < bValue) return -1;
        return 0;
    });

    // Update postsMain with sorted posts
    var postsHTML = '';
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i].post;
        postsHTML += `
        <section class="post" data-name="${post.name}" data-date="${post.date}" data-place="${post.place}" data-position="${post.position}">
            <h2>${post.name}</h2>
            <p class="date">${post.date}</p>
            <p><strong>Place:</strong> ${post.place}</p>
            <p><strong>Position:</strong> ${post.position}</p>
            <p><strong>Feedback:</strong> ${post.feedback}</p>
            <button class="delete-button" onclick="deletePost('${posts[i].key}')">Delete</button>
        </section>
    `;
    }
    document.getElementById('postsMain').innerHTML = postsHTML;
});