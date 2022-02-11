# Backend Node.js server application that provides weather data

## File structure:

- `server.js` main file that creates the http server and defines some routes
- `api.js` contains a single function that handles the API request to the Openweather API
- utils.js contains a single function that parses the returned data from `api.js` and returns a custom `weather_data` object. See how it looks below.

## Available endpoints

`/weather/?city=NAME`

**Example of API reponse Response**:

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

- `weather_data` (object)
  - `city_name` (string)
  - `country_name`
  - `forecast` (list)
    - `temperatures` (object)
      - `day` (number)
      - `min` (number)
      - `max` (number)
      - `night` (number)
      - `eve` (number)
      - `morn` (number)
  - `humidity` (number)
  - `weather` (object)
    - `short_description` (string)
    - `long_description` (string)

# Quickstart

Open a Browser window and type in:
`https://2cg77.sse.codesandbox.io/weather/?city=austin`

Replace `austin` with the city of your choice
