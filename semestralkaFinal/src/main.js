// Obsah  sekce
var homeContent = `
    <section id="home">
        <h1>RaceTracker</h1>
        <p>Vítejte na naší stránce! Tady můžete zapisovat svoje závody, filtrovat je, mazat je a upravovat je.</p>
       
        
    </section>

    <main>
    <section id="newPost">
        <h2>Nový závod</h2>
        <audio id="submitSound" src="audio/click.mp3" preload="auto"></audio>

        <form id="newPostForm">

            <label for="name">Název závodu:</label>
            <input type="text" id="name" name="name"  placeholder="Zadejte jméno závodu">

            <label for="date">Datum konání:</label>
            <input type="date" id="date" name="date placeholder="Zadejte datum závodu">

            <label for="place">Místo konání:</label>
            <input type="text" id="place" name="place" placeholder="Zadejte místo závodu">

            <label for="type">Typ závodu:</label>
            <input type="text" id="type" name="type" placeholder="Zadejte typ závodu">

            <label for="position">Pořadí:</label>
            <input type="number" id="position" name="position" placeholder="Zadejte své pořadí v závodu">

            <label for="feedback">Zhodnocení:</label>
            <textarea id="feedback" name="feedback" placeholder="Zadejte svoje hodnocení k závodu"></textarea>

            <button type="submit">Uložit závod</button>
        </form>
        <div id="saveInfo">
        </div>
    </section>
    <section id="lastPost">
        

    </section>
</main>
    
`;

//load the home content into the page
document.getElementById('main-content').innerHTML = homeContent;

// Namespace for races
var RacesNamespace = {
    races: JSON.parse(localStorage.getItem('races')) || [],

    // Constructor for Race
    Race: function( name, date, place, type, position, feedback) {
        this.name = name;
        this.date = date;
        this.place = place;
        this.type = type;
        this.position = position;
        this.feedback = feedback;
    }
};

// Prototypal methods for Race
RacesNamespace.Race.prototype = {
    
    save: function() {
        RacesNamespace.races.push(this);
        let key = 'race_'+ new Date().getTime();
        localStorage.setItem(key, JSON.stringify(this));
    }
};
// Get the form element
document.getElementById('newPostForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

     // Get form values
     let name = document.getElementById('name').value;
     let date = document.getElementById('date').value;
     let place = document.getElementById('place').value;
     let type = document.getElementById('type').value;
     let position = document.getElementById('position').value;
     let feedback = document.getElementById('feedback').value;
 
     // Basic validation
     if (!name || !date || !place || !type || !position || !feedback) {
         alert('Vyplňte všechny údaje.');
         return;
     }
 
     // Create a new race object with the form data
     let newRace = new RacesNamespace.Race(
         name,
         date,
         place,
         type,
         position,
         feedback,
        
     );

    // Add the new race to the races array
    newRace.save();
    // Optionally, clear the form fields
    event.target.reset();
    // Play the submit sound
    var submitSound = document.getElementById('submitSound');
    submitSound.play();
    alert("Závod byl úspěšně uložen.");
    displayLastRace();
});


//get the last race to lastPost

function displayLastRace() {
    document.getElementById('lastPost').innerHTML = "";

    let key =  localStorage.key(localStorage.length-1);
        let post = JSON.parse(localStorage.getItem(key));
        let lastRace = `
        <h2>Poslední závod</h2>
        <br>    
        <h2>${post.name}</h2>
        <p class="date">${post.date}</p>
        <p><strong>Place:</strong> ${post.place}</p>
        <p><strong>Position:</strong> ${post.position}</p>
        <p><strong>Feedback:</strong> ${post.feedback}</p>
        <button class="delete-button" onclick="deletePost('${key}')">Delete</button>

`;
    document.getElementById('lastPost').innerHTML = lastRace;

}

displayLastRace();

//delete post
function deletePost(key) {
    localStorage.removeItem(key);
    displayLastRace();
}
