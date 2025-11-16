// =============================
// Défi créatif – fonction globale
// =============================
function genererDefi() {
    const defis = [
        "Peins uniquement avec tes doigts pendant 10 minutes.",
        "Fais un collage avec des papiers trouvés aujourd'hui.",
        "Dessine ton émotion du moment sans lever le crayon.",
        "Crée une image avec seulement 3 couleurs.",
        "Transforme un objet du quotidien en personnage.",
        "Réalise une œuvre que tu détruiras dans 24h."
    ];

    const choisi = defis[Math.floor(Math.random() * defis.length)];
    const aff = document.getElementById("resultat-defi");
    if (!aff) return; // au cas où la fonction est appelée sur une page sans ce bloc

    aff.innerHTML = `<p style="font-size:1.1rem;">${choisi}</p>`;
}
