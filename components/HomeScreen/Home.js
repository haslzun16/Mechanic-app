import React from "react";
import HomeStyles from "./HomeStyles";
//import Icon from "react-native-vector-icons/FontAwesome";
import Card from "./Card";
import instance from "../../axios";
import {
  FlatList,
  View,
  Modal,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import { Button, SearchBar, ButtonGroup, Text } from "react-native-elements";
import MapView, { Marker, Callout } from "react-native-maps";
import openMap from "react-native-open-maps";

function Home({ navigation, route }) {
  //to do set up the map view by using this state to determine if to show map or list of results
  const [list, setList] = React.useState(true);
  const [map, setMap] = React.useState(false);

  const buttons = ["List", "Map"];

  const [result, setResult] = React.useState([]);

  const goToMechanic = (lat, lon, name) => {
    if (Platform.OS === "android") {
      openMap({ latitude: lat, longitude: lon, end: lat + ", " + lon });
    } else {
      openMap({ latitude: lat, longitude: lon, query: lat + ", " + lon });
    }
  };

  const getResult = async () => {
    const response = await instance.get(`https://api.yelp.com/v3/businesses/search?location=${route.params.zip}&term=mechanic`)
 
    console.log("this the object", response.data.businesses[0]);
    setResult(response.data.businesses);
  };

  React.useEffect(() => {
    
    getResult();
  }, []);

  const handlePress = (event) => {
    if (event == 0) {
      setList(true);
    } else {
      setList(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={HomeStyles.home}>
        <View style={HomeStyles.home__header}>
          <Image
            style={HomeStyles.home__headerImage}
            source={require("../../assets/first-aid.png")}
          />
          <View style={HomeStyles.home__headerTitle}>
            <Text h1 style={{ right: 20 }}>
              Results
            </Text>
          </View>
        </View>
        <View style={HomeStyles.home__searchContainer}>
          <ButtonGroup
            // onPress={this.updateIndex}
            // selectedIndex={(index) => setButtonIndex(index)}
            buttons={buttons}
            containerStyle={HomeStyles.home__buttonGroup}
            textStyle={{ color: "white" }}
            onPress={(event) => {
              handlePress(event);
            }}
          />
          <Button
            containerStyle={{
              width: 120,
              height: 35,
              backgroundColor: "red",
              marginRight: 20,
              borderRadius: 20,
            }}
            titleStyle={{fontSize: 15, textAlign:"center"}}
            title="Change zip"
            buttonStyle={{ width: 120, height: 40, backgroundColor: "red", }}
            onPress={() => navigation.navigate("Onboarding")}
          />
        </View>

        {list ? (
          <FlatList
            style={{ height: "85%", marginLeft: 10, marginRight: 10 }}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={result}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", {
                    item,
                  })
                }
              >
                <Card
                  id={item.id}
                  title={item.name}
                  image={item.image_url}
                  rating={item.rating}
                  open={item.is_closed}
                  address={item.location.display_address}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <MapView
            style={HomeStyles.home__map}
            //shows users location
            showsUserLocation={true}
            //button to zoom in on users current location
            //there is a bug with this button where the button does not show up unless you rotate the phone
            showsMyLocationButton={false}
            
          >
            {result.map((marker, i) => (
              <Marker
                key={i}
                //creates the marker
                coordinate={{
                  latitude: marker.coordinates.latitude,
                  longitude: marker.coordinates.longitude,
                }}
                
              >
                <Callout tooltip>
                  <View style={HomeStyles.home__mapBubbles}>
                    <Text>
                      <Image
                        style={HomeStyles.home__mapImage}
                        source={{ uri: marker.image_url
            ? marker.image_url
            : "https://c8.alamy.com/comp/P2D5P1/photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept-P2D5P1.jpg" }}
                      />
                    </Text>

                    <Text>{marker.name}</Text>

                    <Text>Phone Number: {marker.phone}</Text>
                  </View>
                  <Button
                  buttonStyle={{ height: 60, backgroundColor: "red" }}
                    title="Take me there"
                    onPress={() =>goToMechanic(
              marker.coordinates.latitude,
              marker.coordinates.longitude
            )}
                  />

                  <View  style={HomeStyles.home__mapArrowBorder}/>
                  <View style={HomeStyles.home__mapArrow}/>
                </Callout>
              </Marker>
            ))}
          </MapView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Home;
