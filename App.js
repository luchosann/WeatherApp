import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Principal from './components/principal';
import Pronostico from './components/pronostico';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const backgroundNight = ['#0D2B46', '#153450','#1B3D5E'];
  const backgroundDay = ['#337CC2', '#266298','#13426D'];

  const [currentTime, setCurrentTime] = useState(new Date());



  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=1bfede12f68bbf067ef1318eba6caa96`)
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      setCurrentTime(new Date());
    };

    fetchWeatherData();
  }, []);

  
  return (
      <LinearGradient colors={currentTime.getHours() < 20 ? backgroundDay : backgroundNight} style={styles.container}>
        <View style={styles.container}>
          {weatherData ? (
            <View>
              <Principal 
                  title={weatherData.name} 
                  temp={(weatherData.main.temp - 273.15).toFixed(0)} 
                  img={weatherData.weather[0].icon}
                  type={weatherData.weather[0].description}
              />
              <View style={{flexDirection: 'row'}}>
                <Pronostico 
                  temp={(weatherData.main.temp - 273.15).toFixed(2)} 
                  feels_like={(weatherData.main.feels_like - 273.15).toFixed(2)}
                  humidity={weatherData.main.humidity}
                  pressure={weatherData.main.pressure}
                  />
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
            )}

          <StatusBar style="auto" />
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
