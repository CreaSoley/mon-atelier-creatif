// js/meteo-poetique.js

// --- Météo Poétique (Basé sur votre ancienne API Open-Meteo) ---

function getPoeticWeather(weatherCode) {
    const codes = {
        0: { emoji: "✨", mood: "Clarté cristalline. Parfait pour les lignes nettes." },
        1: { emoji: "💭", mood: "A peine nuageux. L'hésitation ouvre la porte à l'intuition." },
        2: { emoji: "☁️", mood: "Nuages doux. Explore les ombres et les mélanges subtils." },
        3: { emoji: "🌫️", mood: "Ciel lourd. Ambiance idéale pour les textures brutes et sombres." },
        45: { emoji: "💨", mood: "Brouillard. Travaillez les dégradés flous et le mystère." },
        51: { emoji: "💧", mood: "Bruine légère. Laisse couler l'eau, explore l'aquarelle." },
        61: { emoji: "🌧️", mood: "Pluie légère. Les lavis s'imposent, accepte les bavures." },
        63: { emoji: "☔", mood: "Pluie modérée. Journée d'introspection, crée au chaud." },
        // Ajoutez d'autres codes selon Open-Meteo si vous le souhaitez
    };
    return codes[weatherCode] || { emoji: "❓", mood: "Temps inconnu. Fais confiance à ta propre météo intérieure." };
}

function chargerMeteoPoetique() {
    const meteoElement = document.getElementById("meteo");
    if (!meteoElement) return;

    fetch('https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current=temperature_2m,weather_code&timezone=Europe%2FParis')
      .then(r => {
          if (!r.ok) throw new Error('Erreur réseau');
          return r.json();
      })
      .then(data => {
        const temp = data.current.temperature_2m.toFixed(1);
        const wc = data.current.weather_code;
        
        const poetic = getPoeticWeather(wc);
        
        meteoElement.innerHTML = `
          <strong style="font-size: 1.2em;">${poetic.emoji} ${poetic.mood}</strong><br>
          <small>A Paris, il fait ${temp} °C.</small>
        `;
      })
      .catch(() => {
        meteoElement.innerText = "Météo poétique non disponible (utilise l'humeur du jour).";
      });
}

document.addEventListener('DOMContentLoaded', chargerMeteoPoetique);
