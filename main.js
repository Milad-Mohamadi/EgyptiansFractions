document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    document.getElementById('link-egyptians-fractions').addEventListener('click', (e) => {
        e.preventDefault();
        loadSection('egyptiansFractions');
    });

    document.getElementById('link-sequence').addEventListener('click', (e) => {
        e.preventDefault();
        loadSection('sequence');
    });

    // Load the default section
    loadSection('egyptiansFractions');
});

function loadSection(section) {
    fetch(`templates/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            loadScript(section);
        })
        .catch(error => console.error('Error loading section:', error));
}

function loadScript(section) {
    const existingScript = document.getElementById('section-script');
    if (existingScript) {
        existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'section-script';
    script.src = `scripts/${section}.js`;
    document.body.appendChild(script);
}
