import React from "react";
import { Button, SearchBar, ButtonGroup, Text } from "react-native-elements";
import ProfileStyle from "./ProfileStyle";
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
import openMap from "react-native-open-maps";

const Profile = ({ navigation, route }) => {
  //method that opens maps on phone based on OS
  const goToMechanic = (lat, lon, name) => {
    if (Platform.OS === "android") {
      openMap({ latitude: lat, longitude: lon, end: lat + ", " + lon });
    } else {
      openMap({ latitude: lat, longitude: lon, query: lat + ", " + lon });
    }
  };

  return (
    <SafeAreaView>
      <View style={ProfileStyle.profile}>
        <ImageBackground
          imageStyle={{ borderRadius: 20 }}
          source={{
            uri: route.params.item.image_url
              ? route.params.item.image_url
              : "https://c8.alamy.com/comp/P2D5P1/photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept-P2D5P1.jpg",
          }}
          style={ProfileStyle.profile__banner}
        >
          <Button
            style={ProfileStyle.profile__bannerBackButton}
            containerStyle={{
              width: 40,
              height: 40,
              backgroundColor: "red",
              borderRadius: 30,
              justifyContent: "center",
            }}
            icon={{
              name: "arrow-left",
              size: 20,
              color: "white",
            }}
            buttonStyle={{ width: 40, height: 40, backgroundColor: "red" }}
            onPress={() => navigation.navigate("Home")}
          />
          <View style={ProfileStyle.profile__bannerBottom}>
            <Text h3 style={{ color: "white" }}>
              {route.params.item.name}
            </Text>
            <Text h4 style={{ color: "white" }}>
              {route.params.item.location.display_address}
            </Text>
          </View>
        </ImageBackground>
        <View style={ProfileStyle.profile__info}>
          <View style={ProfileStyle.profile__infoBox}>
            <Text>Rating</Text>
            {/* be sure to add the rating input */}
            <Text style={ProfileStyle.profile__infoText}>
              ⭐️ {route.params.item.rating}
            </Text>
          </View>
          <View style={ProfileStyle.profile__infoBox}>
            <Text>Reviews</Text>

            <Text style={ProfileStyle.profile__infoText}>
              {route.params.item.review_count}{" "}
            </Text>
          </View>
          <View style={ProfileStyle.profile__infoBox}>
            <Text>Distance</Text>

            <Text style={ProfileStyle.profile__infoText}>
              {Math.ceil(route.params.item.distance * 0.00062137)} mi
            </Text>
          </View>
        </View>
        <View style={ProfileStyle.profile__about}>
          <Text style={ProfileStyle.profile__aboutTitle} h4>
            About company
          </Text>
          <Text style={ProfileStyle.profile__aboutDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
          </Text>
        </View>
        <Button
          title="Take me there"
          buttonStyle={{ height: 60, backgroundColor: "red" }}
          containerStyle={ProfileStyle.profile__takeMeButton}
          onPress={() => {
            goToMechanic(
              route.params.item.coordinates.latitude,
              route.params.item.coordinates.longitude
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
