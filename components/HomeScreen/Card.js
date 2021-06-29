import React from "react";
import { View, Image } from "react-native";
import CardStyles from "./CardStyles";
import { Text } from "react-native-elements";


export default function Card({ title, address, open, image, rating }) {
  return (
    <View style={CardStyles.card}>
      <Image
        style={CardStyles.card__image}
        source={{
          uri: image
            ? image
            : "https://c8.alamy.com/comp/P2D5P1/photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept-P2D5P1.jpg",
        }}
      />
      <View style={CardStyles.card__bottom}>
        <Text h4 style={{ fontWeight: "400", marginBottom: 5 }}>
          {" "}
          {title}
        </Text>
        <Text> {address}</Text>
      </View>
      <View style={CardStyles.card__time}>
        <Text style={{ position: "relative", left: 320 }}> {open ? "Closed" : "Open"}</Text>

        <Text style={{right: 30,}}>⭐️ {rating}</Text>
      </View>
    </View>
  );
}
