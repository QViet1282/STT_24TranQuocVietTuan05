import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = (imgcolor) => {
  const data = imgcolor.route.params?.image;
  const Navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewColumnCenter}>
        <Image style={{ width: 301, height: 361 }} source={data ? data : require('../assets/vs_blue.png')}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={styles.viewrow}>
        {Array(5).fill(0).map(item => {
          return <Image style={{ width: 28, height: 30 }} source={require('../assets/star.png')}></Image>
        })}
        <Text style={{ fontSize: 20, marginLeft: 50 }}>(Xem 828 đánh giá)</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>1.790.000 đ</Text>
        <Text style={{ fontSize: 20, fontWeight: '600', textDecorationLine: 'line-through', color: 'grey', marginLeft: 50 }}>1.790.000 đ</Text>
        <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={{ width: 25, height: 25, margin: 10, marginTop: 18 }} source={require('../assets/Group 1.png')}></Image>

      </View>
      <View style={styles.viewColumnCenter}>
        <TouchableOpacity style={{ width: 350, height: 50, border: 'solid 2px grey', borderRadius: 10, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}
          onPress={() => {
            Navigator.navigate('Screen2');
          }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'black', marginRight: 55, borderRadius: 2 }}>4 MÀU-CHỌN MÀU</Text>
          <Image style={{ width: 15, height: 15, marginRight: 20 }} source={require('../assets/Vector.png')}></Image>

        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 50, width: 350, height: 50, backgroundColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => {

          }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'white', marginBottom: 5, borderRadius: 2 }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewColumnCenter: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  viewrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems:'flex-start',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 8,
  },
});
