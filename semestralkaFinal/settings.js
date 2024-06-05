var settingsContent = `
    <section id="settings">
        <h2>Nastavení</h2>
        <p>Zde můžete upravit své údaje.</p>
        <div id="deleteLocalStorage">   
        <button id="deleteButton">Smazat všechny závody</button>
        </div>
        <div id="toggle">
        <button id="toggleButton">Změnit vzhled</button>
        </div>

    </section>
`;

document.getElementById('main-content').innerHTML = settingsContent;

document.getElementById('deleteButton').addEventListener('click', function() {
    localStorage.clear();
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var theme = document.getElementById('theme');
    if (theme.getAttribute('href') == 'light.css') {
      theme.setAttribute('href', 'dark.css');
      sessionStorage.setItem('theme', 'dark');
    } else {
      theme.setAttribute('href', 'light.css');
      sessionStorage.setItem('theme', 'light');
    }
  });
