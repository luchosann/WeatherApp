import { StyleSheet, Text, View, Image } from "react-native";

const Principal = ({title, temp, img, type}) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{color: '#F0F0F0F0', fontSize: 20,}}> {title} </Text>
                    <Text style={{color: '#F0F0F0F0', fontSize: 20,}}> {title} </Text>
                    <Text style={{color: '#F0F0F0F0', fontSize: 20,}}> {title} </Text>
                </View>
                <View style={{flex: 2, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={styles.grados}>{temp}˚C</Text>
                    
                    <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', }}> 
                        <Text style={{fontWeight: 'bold', color: '#F0F0F0F0'}}>
                            {type.toUpperCase()}
                        </Text>
                        <Image
                        style={{width: 100, height:100}}
                        source={ {uri: `https://openweathermap.org/img/wn/${img}@2x.png`, }} 
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        padding: 10,
    },

    grados: {
        color: '#F0F0F0F0',
        fontSize: 80,
    }
})

export default Principal;