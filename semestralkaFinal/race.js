window.onload = function() {
    var races = JSON.parse(localStorage.getItem('races')) || [];

var races = JSON.parse(localStorage.getItem('races')) || [
    
];
// Get the form element
document.getElementById('newPostForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Create a new race object with the form data
    var newRace = {
        id: races.length,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        place: document.getElementById('place').value,
        type: document.getElementById('type').value,
        position: document.getElementById('position').value,
        feedback: document.getElementById('feedback').value,
    };

    // Add the new race to the races array
    races.push(newRace);
    console.log(newRace)
    // Save the races array to local storage
    localStorage.setItem('race'+newRace.id, JSON.stringify(newRace));

    // Optionally, clear the form fields
    event.target.reset();
});};

// Parse the local storage data and display it in the posts section
function displayPosts() {
    console.log("localStorage");
    var postsHTML = '<ul>';
    for (var i = 0; i < localStorage.length; i++) {
        var key =  localStorage.key(i);
        console.log(key);
        var post = JSON.parse(localStorage.getItem(key));
        postsHTML += '<li>' + post.name + ' - ' + post.date + ' - ' + post.place + ' - ' + post.position + '</li>';
    }
    postsHTML += '</ul>';
    document.getElementById('postsMain').innerHTML = postsHTML;

}

