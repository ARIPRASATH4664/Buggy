import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Colors from "../../assets/Colors";

let Uri = "https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q";
export const PlantLists = (props) => {
  const [plantsList, setPlantsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPlantsList();
  }, []);

  function fetchPlantsList() {
    console.log("URL Fetch");
    setIsLoading(true);
    fetch(Uri)
      .then((response) => response.json())
      .then((data) => setPlantsList([...data]))
      .catch((e) => {
        console.log("Catch Block Errors", e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <ActivityIndicator size={20} style={styles.container}/>;
  }

  const renderPlantList = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("PlantView", item.item);
        }}
      >
        <View style={styles.listWrapContainer}>
          <View style={styles.listContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{item.item.name}</Text>
            </View>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitleText}>{item.item.category}</Text>
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>{item.item.price}</Text>
              </View>
              <View style={styles.priceImageContainer}>
                {/* <Image source={{ uri: item.item.image }} />
            <Image source={{ uri: item.item.image }} /> */}
              </View>
            </View>
          </View>
          <View style={styles.triangleCorner}></View>
          <Image
            source={{ uri: item.item.image }}
            style={styles.imageView}
          />
          <View style={styles.spacer}></View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={[...plantsList]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => {
            return renderPlantList(item);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  listWrapContainer: {
    flex: 1,
    width: "90%",
    height: 300,
    paddingTop: 50,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
  },
  innerContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start",
    fontSize: 12,
    paddingLeft: 18,
    textAlign: "center",
    marginTop: 20,
  },
  imageView:{ position: "absolute", width: 140, height: 180, right: -10, top: 20, borderWidth: 1 },
  titleText: {
    fontSize: moderateScale(20),
  },
  triangleCorner: {
    top: 50,
    left: 10,
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderLeftWidth: 340,
    borderTopWidth: 60,
    borderLeftColor: "transparent",
    borderTopColor: "#fff",
    position: "absolute",
  },
  subTitleContainer: {
    flex: 1,
    alignItems: "flex-start",
    fontSize: 12,
    paddingLeft: 18,
    textAlign: "center",
    marginTop: 10,
  },
  subTitleText: {
    fontSize: moderateScale(28),
  },
  priceContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
  },
  priceTextContainer: {
    lex: 1,
    alignItems: "flex-start",
    fontSize: 12,
    paddingLeft: 10,
    textAlign: "center",
    paddingTop: 20,
  },
  priceText: {},
  likeContainer: {},
  spacer: {
    height: 20,
  },
});
