import { Stack } from "expo-router";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";


const properties = [
  {
    id: '1',
    title: 'Modern Villa',
    city: 'Mumbai',
    price: '₹1.2 Cr'
  },
  {
    id: '2',
    title: 'Sea View Flat',
    city: 'Mumbai',
    price: '₹85 L'
  },
  {
    id: '3',
    title: 'Studio Loft',
    city: 'Bangalore',
    price: '₹32 L'
  }
];


export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text style= {{padding: 16}}>
          Follow irl_shaurya on instagram 
        </Text>
        <TextInput placeholder = "enter your name" placeholderTextColor = "gray"
        style = {{borderWidth:1,
        borderColor: "gray",
        borderRadius: 8,
        padding: 10,
        marginTop: 12,
        }}/>

        <TouchableOpacity 
        onPress = {() => alert("submitted")}
        style = {{
          borderWidth: 1,
          borderColor: "black" , 
          borderRadius: 2, 
          marginTop:12 , 
          alignItems: "center" ,
          backgroundColor: "blue"
          }}>
          <Text style = {{color: "white" , padding: 10 , fontWeight: "bold"}}>
            Submit
          </Text>
        </TouchableOpacity>


        <FlatList
          data={properties}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: '#f9f9f9',
              padding:12,
              borderRadius: 10,
              marginBottom: 10,
            }}>
              <Text style={{ fontWeight: 'bold' }}>
                {item.title}
              </Text>

              <Text style={{ color: '#2563EB' }}>
                {item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
