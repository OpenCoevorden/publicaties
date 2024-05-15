document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bereken').addEventListener('click', function () {
        const vastTarief = 120; // Jaarlijks vast tarief afvalstoffenheffing
        let kosten = vastTarief; // Start met het vaste tarief

        const keuze = document.querySelector('input[name="afvalType"]:checked').value;
        const aantal = parseInt(document.getElementById('aantal').value, 10);
        const variabelTariefLedigingen = 10; // Kosten per lediging van de persoonlijke container
        const variabelTariefInworpen = 2; // Kosten per inworp bij de ondergrondse container

        if (keuze === 'persoonlijk') {
            kosten += aantal * variabelTariefLedigingen;
        } else if (keuze === 'ondergronds') {
            kosten += aantal * variabelTariefInworpen;
        }

        document.getElementById('totaalBedrag').textContent = "Totaalbedrag: €" + kosten;
    });
});
