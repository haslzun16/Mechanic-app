import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profile: {
    height: "100%",
  },
  profile__banner: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    resizeMode: "cover",
  },
  profile__bannerBackButton: {
    width: 30,
    height: 40,
  },
  profile__info: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profile__infoBox: {
    paddingLeft: 20,
    marginRight: 30,
    marginTop: 15,
  },
  profile__infoText: {
    marginTop: 5,
    fontWeight: "200",
  },
  profile__about: {
    height: "45%",
    paddingLeft: 20,
  },
  profile__aboutTitle: {
    marginBottom: 15,
  },
  profile__aboutDesc: {
    width: "90%",
    lineHeight: 20
    
  },
  profile__takeMeButton: {
    height: 60,
    justifyContent: "center",
    marginLeft: 20,
    width: "90%",
    backgroundColor: "red",
    borderRadius: 10,
   
  },
});
