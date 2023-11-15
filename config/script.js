const repoOwner = 'OpenCoevorden';
const repoName = 'publicaties';
const pathToDocs = 'docs/'; // Het pad naar de map met PDF-bestanden
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${pathToDocs}`;

async function fetchPDFs() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('Opgehaalde gegevens:', data);

        const pdfList = document.getElementById('pdf-list');
        const searchInput = document.getElementById('searchInput');

        function filterPDFs() {
            const searchTerm = searchInput.value.toLowerCase();
            pdfList.innerHTML = ''; // Leeg de lijst voordat je opnieuw gaat filteren
            
            data.forEach(item => {
                if (item.name.endsWith('.pdf')) {
                    const fileName = item.name.toLowerCase();
                    if (fileName.includes(searchTerm)) {
                        const listItem = document.createElement('li');

                        // Maak een div voor de prefix en voeg deze toe aan het lijstitem
                        const prefixDiv = document.createElement('div');
                        prefixDiv.classList.add('prefix');
                        prefixDiv.textContent = item.name.split(' ')[0]; // Neem het deel voor het eerste "-"
                        listItem.appendChild(prefixDiv);

                        // Maak de link naar het PDF-bestand en voeg deze toe aan het lijstitem
                        const link = document.createElement('a');
                        link.href = `https://opencoevorden.nl/${item.name}`;
                        link.textContent = item.name.split(' ').slice(1).join(' '); // Neem het deel na het eerste "-"
                        link.target = '_blank'; // Open de link in een nieuw tabblad
                        listItem.appendChild(link);

                        pdfList.appendChild(listItem);
                    }
                }
            });
        }

        searchInput.addEventListener('input', filterPDFs);

        // Toon alle PDF's bij het starten van de pagina
        filterPDFs();
    } catch (error) {
        console.error(error);
    }
}


            //voer script uit
            fetchPDFs();


