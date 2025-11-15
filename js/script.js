```javascript
// --- 1. Heure dynamique (Réutilisé de votre ancien code) ---
function mettreAJourHeure() {
    const now = new Date();
    const heureElement = document.getElementById("heure");
    if (heureElement) {
        heureElement.innerText = now.toLocaleString('fr-FR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
    }
}
// Lance la mise à jour de l'heure
document.addEventListener('DOMContentLoaded', mettreAJourHeure);
setInterval(mettreAJourHeure, 1000); 
```

