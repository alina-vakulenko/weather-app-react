const apiKey = "a48bfdc3b98o63be2219e717e29604at";

export function apiUrlCurrentByCity(cityName) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  return apiUrl;
}

export function apiUrlCurrentByCoordinates(coordinates) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  return apiUrl;
}

export function apiUrlForecastByCoordinates(coordinates) {
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units.metric`;
  return apiUrl;
}
