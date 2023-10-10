import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const Screen2 = () => {

    var [img, setImg] = useState(require('../assets/vs_blue.png'));
    const Navigator = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.viewrow}>
                <Image style={{ width: 112, height: null, resizeMode: 'contain' }} source={img}></Image>
                <Text style={{ fontWeight: '600', fontSize: 16, marginRight: 70, marginTop: 20, marginLeft: 10 }}>Điện Thoại Vsmart Joy 3  Hàng chính hãng</Text>
            </View>

            <Text style={{ fontSize: 18, margin: 15 }}>Chọn một màu bên dưới:</Text>

            <View style={styles.viewColor}>
                <TouchableOpacity style={{ marginTop: 10, width: 85, height: 80, backgroundColor: 'rgba(197, 241, 251, 1)' }}
                    onPress={() => {
                        setImg(require('../assets/vs_silver.png'));
                    }}>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, width: 85, height: 80, backgroundColor: 'rgba(243, 13, 13, 1)' }}
                    onPress={() => {
                        setImg(require('../assets/vs_red.png'));
                    }}>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, width: 85, height: 80, backgroundColor: 'rgba(0, 0, 0, 1)' }}
                    onPress={() => {
                        setImg(require('../assets/vs_black.png'));
                    }}>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, width: 85, height: 80, backgroundColor: 'rgba(35, 72, 150, 1)' }}
                    onPress={() => {
                        setImg(require('../assets/vs_blue.png'));
                    }}>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, width: 326, height: 44, borderRadius: 10, backgroundColor: 'rgba(25, 82, 226, 0.58)' }}
                    onPress={() => {
                        Navigator.navigate('Screen1', { image: img })
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(196, 196, 196, 1)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    viewColor: {
        alignItems: 'center',
        backgroundColor: 'rgba(196, 196, 196, 1)',
        paddingBottom: 20,
        // justifyContent: 'center',
    },
    viewrow: {
        flexDirection: 'row',
        // alignItems:'flex-start',
        backgroundColor: 'white',
        height: 150,
    },
});
