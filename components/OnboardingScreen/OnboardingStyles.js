import { StyleSheet } from "react-native";

export default StyleSheet.create({
  onboarding: {
    height: "100%",

    alignContent: "center",
  },
  onboarding__up:{
    flex:1
  },
  onboarding__container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignContent: "center",
    // backgroundColor: "red",
  },
  onboarding__image: {
    height: 200,
    width: 200,
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  onboarding__heading: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  onboarding__text: {
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: 350,
    lineHeight: 20,
  },
  onboarding__zipcode: {
    display:"flex",
    flexDirection:"column",
    alignContent:"center",
    justifyContent: "center",
    marginTop: 30,
  },
});
