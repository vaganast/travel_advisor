import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    //req
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '0f37685f51msh9c2ee5e73075679p19aed6jsnc25423993448',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/weather',
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key':
            '0f37685f51msh9c2ee5e73075679p19aed6jsnc25423993448',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
