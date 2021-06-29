import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: "100%",
    padding: 10,
    borderRadius: 0,
    borderBottomRightRadius: 10,
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
  },
  card__bottom: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  card__image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  card__time: {
    backgroundColor: "white",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    height: 40,
  },
});
