import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('./')}></Image> */}
      {/* <Image source={require('./vs_blue')}></Image> */}
      <View style={styles.viewColumnCenter}>
        <Image style={{ width: 301, height: 361 }} source={{ uri: 'https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg' }}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={styles.viewrow}>
        <Image style={{ width: 28, height: 30 }} source={{ uri: 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-star-icon-png-image_1611681.jpg' }}></Image>
        <Image style={{ width: 28, height: 30 }} source={{ uri: 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-star-icon-png-image_1611681.jpg' }}></Image>
        <Image style={{ width: 28, height: 30 }} source={{ uri: 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-star-icon-png-image_1611681.jpg' }}></Image>
        <Image style={{ width: 28, height: 30 }} source={{ uri: 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-star-icon-png-image_1611681.jpg' }}></Image>
        <Image style={{ width: 28, height: 30 }} source={{ uri: 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-star-icon-png-image_1611681.jpg' }}></Image>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>(Xem 828 đánh giá)</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>1.790.000 đ</Text>
        <Text style={{ fontSize: 20, fontWeight: '600', textDecorationLine: 'line-through', color: 'grey', marginLeft: 50 }}>1.790.000 đ</Text>
        <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={{ width: 25, height: 25, margin: 10, marginTop: 25 }} source={{ uri: 'https://file.vfo.vn/hinh/2014/4/dau-hoi-cham-4.jpg' }}></Image>

      </View>
      <View style={styles.viewColumnCenter}>
        <TouchableOpacity style={{ width: 350, height: 50, border: 'solid 2px grey', borderRadius: 10, alignItems:'flex-end', justifyContent:'center' }}
          onPress={() => {

          }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'black', marginRight: 10, borderRadius: 2 }}>4 MÀU-CHỌN MÀU              ></Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop:50, width: 350, height: 50, backgroundColor:'red', borderRadius: 10, alignItems:'center', justifyContent:'center' }}
          onPress={() => {

          }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'white', marginBottom: 5, borderRadius: 2 }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

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
