import { StyleSheet, Text, View } from "react-native";

const Pronostico = ({temp, humidity , feels_like, pressure}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: '#F0F0F0'}}>Feels like: </Text>
                <Text style={{color: '#F0F0F0'}}>{feels_like}</Text>
            </View>
            <View style={{flexDirection: 'row'}}> 
                <Text style={{fontWeight: 'bold', color: '#F0F0F0'}}>Humidity: </Text>
                <Text style={{color: '#F0F0F0'}}>{humidity}%</Text>
            </View>
            <View style={{flexDirection: 'row', color: '#F0F0F0'}}> 
                <Text style={{fontWeight: 'bold' , color: '#F0F0F0'}}>Pressure: </Text>
                <Text style={{color: '#F0F0F0'}}> {pressure}hPa</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        // alignItems: 'center', 
        padding: 10,
        gap: 10,

        height:'45%',

        borderRadius: 30,
        margin: 10

        
    },
})

export default Pronostico;