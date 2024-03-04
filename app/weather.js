// Récupère les données météorologiques de l'API OpenWeatherMap
async function getWeatherData(city) {
    // Clé API
    const apiKey = 'YOUR_API_KEY';
    // Requête HTTP
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    // Vérification du statut de la réponse
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données météorologiques');
    }
    // Conversion de la réponse en objet JavaScript
    const data = await response.json();
    // Retourne les données météorologiques
    return data;
  }
  
  // Convertit la température de Kelvin à Celsius
  function convertKelvinToCelsius(temperature) {
    return Math.round(temperature - 273.15);
  }
  
  // Exporte les fonctions
  export { getWeatherData, convertKelvinToCelsius };
  