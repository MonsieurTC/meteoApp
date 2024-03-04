// Affiche les données météorologiques dans l'interface utilisateur
function displayWeatherData(temperature, humidity, windSpeed, description, icon) {
    // Température
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = `${temperature} °C`;
    // Humidité
    const humidityElement = document.getElementById('humidity');
    humidityElement.textContent = `${humidity}%`;
    // Vitesse du vent
    const windSpeedElement = document.getElementById('wind-speed');
    windSpeedElement.textContent = `${windSpeed} m/s`;
    // Description du temps
    const descriptionElement = document.getElementById('weather-description');
    descriptionElement.textContent = description;
    // Icone du temps
    const iconElement = document.getElementById('weather-icon');
    iconElement.src = `http://openweathermap.org/img/wn/${icon}.png`;
  }
  
  // Affiche un message d'erreur dans l'interface utilisateur
  function displayErrorMessage(message) {
    // Récupère le bloc d'affichage des données météorologiques
    const weatherDisplay = document.getElementById('weather-display');
    // Vide le contenu du bloc d'affichage
    weatherDisplay.innerHTML = '';
    // Crée un élément de paragraphe pour le message d'erreur
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    // Ajoute une classe CSS pour le style du message d'erreur
    errorMessage.classList.add('error-message');
    // Ajoute le message d'erreur dans le bloc d'affichage
    weatherDisplay.appendChild(errorMessage);
  }
  
  // Exporte les fonctions
  export { displayWeatherData, displayErrorMessage };
  