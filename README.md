# Backend Node.js server application that provides weather data

## Available endpoints

`/weather/?city=NAME`

Example of API reponse Response:

```
{
  "weatherData": {
    "cityName": "Austin",
    countryName: "US",
    "forecast": [
      {
        "temperatures": {
          "day": 292.69,
          "min": 282.54,
          "max": 295.01,
          "night": 286.56,
          "eve": 291.88,
          "morn": 282.7
        },
        "humidity": 45,
        "weather": {
          "short_description": "Clear",
          "long_description": "sky is clear"
        }
      },{
        "temperatures": {
          "day": 280.05,
          "min": 278.65,
          "max": 286.06,
          "night": 278.94,
          "eve": 281.99,
          "morn": 286.06
        },
        "humidity": 73,
        "weather": {
          "short_description": "Rain",
          "long_description": "light rain"
        }
      },
      ...{}
    ]
  }
}
```

Fields in API response

- weather_data
  - city_name
  - country_name
  - forecast
    - temperatures
      - day
      - min
      - max
      - night
      - eve
      - morn
  - humidity
  - weather
    - short_description
    - long_description

# Quickstart

Open a Browser window and type in:
`https://2cg77.sse.codesandbox.io/weather/?city=austin`

Replace `austin` with the city of your choice
