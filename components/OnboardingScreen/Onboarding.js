import React from "react";
import { View, SafeAreaView, Image, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import OnboardingStyles from "./OnboardingStyles";
import { Button, Text, Input } from "react-native-elements";

const Onboarding = ({ navigation }) => {
  const [zip, setZip] = React.useState("");

  return (
   
    <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     enabled={true}
      style={OnboardingStyles.onboarding__up}
      keyboardVerticalOffset={Platform.select({ios: 60, android: 500})}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={OnboardingStyles.onboarding}>
        <View style={OnboardingStyles.onboarding__container}>
          <Image
            style={OnboardingStyles.onboarding__image}
            source={require("../../assets/first-aid.png")}
          />
          <Text style={OnboardingStyles.onboarding__heading} h1>
            Vehicle Aid
          </Text>
          <Text style={OnboardingStyles.onboarding__text}>
            Don't know any mechanics? Vehicle aid is here to help you find
            experts to aid your vehicle needs.
          </Text>
        </View>
        <View style={OnboardingStyles.onboarding__zipcode}>
          <Text h4 style={{ alignSelf: "center" }}>
            Enter Zip code
          </Text>
          <Input
            containerStyle={{
              alignSelf: "center",
              width: 100,
              borderBottomWidth: 0,
            }}
            textContentType="postalCode"
            inputContainerStyle={{ alignSelf: "center", width: 100 }}
            inputStyle={{ textAlign: "center" }}
            placeholder="zip code"
            onChangeText={(text) => setZip(text)}
          />
          <Button
            onPress={() => {
              if (zip == "") {
                Alert.alert("You must enter a zip code");
              } else {
                navigation.navigate("Home", {

                  zip: zip,
                });
              }
            }}
            title="Submit"
            containerStyle={{
              width: 120,
              height: 40,
              backgroundColor: "red",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 30,
            }}
            buttonStyle={{ width: 120, height: 40, backgroundColor: "red" }}
          />
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
  );
};

export default Onboarding;
