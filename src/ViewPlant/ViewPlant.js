import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../assets/Colors";
import { moderateScale } from "react-native-size-matters";

export const PlantView = (props) => {
  const item = props.route.params;
  console.log("SUCK!!! ~ file: ViewPlant.js:7 ~ PlantView ~ props:", item);
  //{"key": "PlantView-w6_d1dvzLi8xIO_nIsSRe", "name": "PlantView", "params": {"bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.", "category": "Air Purifier", "fertilizer": "250gm", "id": 2, "image": "https://i.postimg.cc/4xSZ8Fjp/sage.png", "light": "30-40%", "name": "Watermelon", "price": 350, "size": "4\" h", "water": "250ml"}, "path": undefined}

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.listWrapContainer}>
          <View style={styles.listContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{item.name}</Text>
            </View>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitleText}>{item.category +" "+item.category}</Text>
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceTextBold}>PRICE</Text>
                <Text style={styles.priceText}>{`$${item.price}`}</Text>
              </View>
              <View style={styles.priceImageContainer}>
                {/* <Image source={{ uri: item.item.image }} />
            <Image source={{ uri: item.item.image }} /> */}
              </View>
            </View>
          </View>
          <View style={styles.triangleCorner}></View>
          <Image
            source={{ uri: item.image }}
            style={styles.imageView}
          />
          <TouchableOpacity onPress={() => {}}>
          <Image source={require('../../assets/cart.png')}
            style={styles.iconImageView} />
          <View style={styles.spacer}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.listWrapContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listWrapContainer: {
    flex: 1,
    width: "100%",
    height: 300,
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 100,
  },
  innerContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    alignItems: "flex-start",
    fontSize: 12,
    paddingLeft: 18,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  titleText: {
    fontSize: moderateScale(20),
  },
  triangleCorner: {
    bottom: 0,
    left: 15,
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderLeftWidth: 400,
    borderBottomWidth: 120,
    borderLeftColor: "transparent",
    borderBottomColor: "#fff",
    position: "absolute",
    overflow: "hidden",
  },
  subTitleContainer: {
    flex: 1,
    alignItems: "flex-start",
    fontSize: 12,
    paddingLeft: 18,
    textAlign: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: '60%'
    // marginTop: 10,
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
  iconImageView: { position: "absolute",width: 60, height: 60, left: 50, bottom: 10},
  imageView: { position: "absolute" ,width: 300, height: 420, right: -20, bottom: -100},
  priceText: {},
  priceTextBold: {
    fontSize: 20
  },
  likeContainer: {},
  spacer: {
    height: 20,
  },
});
