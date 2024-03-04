// Importe les fonctions liées à la récupération et au traitement des données météorologiques
import { getWeatherData, convertKelvinToCelsius } from './weather.js';
// Importe les fonctions liées à l'affichage des données météorologiques
import { displayWeatherData, displayErrorMessage } from './ui.js';

// Gère la soumission du formulaire de recherche
function handleSearchFormSubmit(event) {
  // Empêche le rechargement de la page
  event.preventDefault();
  // Récupère le nom de la ville saisie par l'utilisateur
  const city = document.getElementById('city-input').value;
  // Récupère les données météorologiques de la ville saisie
  getWeatherData(city)
    .then(data => {
      // Convertit la température de Kelvin à Celsius
      const temperature = convertKelvinToCelsius(data.main.temp);
      // Affiche les données météorologiques dans l'interface utilisateur
      displayWeatherData(temperature, data.main.humidity, data.wind.speed, data.weather[0].description, data.weather[0].icon);
    })
    .catch(error => {
      // Affiche un message d'erreur dans l'interface utilisateur
      displayErrorMessage(error.message);
    });
}

// Ajoute un écouteur d'événement sur le formulaire de recherche
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearchFormSubmit);
