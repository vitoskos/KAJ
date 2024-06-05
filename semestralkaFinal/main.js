// Obsah  sekce
var homeContent = `
    <section id="home">
        <h1>RaceTracker</h1>
        <p>Vítejte na naší stránce! Tady můžete zapisovat svoje závody, filtrovat je, mazat a upravovat.</p>
       
        
    </section>

    <main>
    <section id="newPost">
        <h2>Nový závod</h2>
        <form id="newPostForm">

            <label for="name">Název závodu:</label>
            <input type="text" id="name" name="name">

            <label for="date">Datum konání:</label>
            <input type="date" id="date" name="date">

            <label for="place">Místo konání:</label>
            <input type="text" id="place" name="place">

            <label for="type">Typ závodu:</label>
            <input type="text" id="type" name="type">

            <label for="position">Pořadí:</label>
            <input type="number" id="position" name="position">

            <label for="feedback">Zhodnocení:</label>
            <textarea id="feedback" name="feedback"></textarea>

            <button type="submit">Uložit závod</button>
        </form>
        <div id="saveInfo">
        </div>
    </section>
    <section id="lastPost">
        <h2>Poslední závod</h2>
        <p>Zde bude zobrazen Váš poslední závod.</p>

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
    alert("Závod byl úspěšně uložen.");
});

document.getElementById('lastPost').innerHTML = '<h2>Poslední závod</h2>';

