import { StyleSheet } from "react-native";

export default StyleSheet.create({
  home:{
    
  },
  home__map:{
    height: "100%",
    width: "100%"
  },
  home__header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    marginLeft: 20,
    top: 0,
    width: "100%",
    justifyContent: "flex-start",
  },
  home__headerImage: {
    height: 50,
    width: 50,
    right: 20,
  },
  home__headerTitle: {
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    
  },
  home__searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  home__buttonGroup: {
    height: 35,
    width: 200,
    borderRadius: 30,
    borderColor: "lightgray",
    backgroundColor:"red",
    marginLeft: 20
  },
  home__mapBubbles: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 250,
  },

  home__mapArrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },

  home__mapArrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  home__mapImage: {
    width: 200,
    height: 150,
  },
});
