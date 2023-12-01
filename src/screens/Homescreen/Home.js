import React from "react";
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/logo.png";

const Home = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onPressSignOut = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {/* You can remove the Image component */}
        <Button text="Sign Out" type="TERTIARY" onPress={onPressSignOut} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
  },
});

export default Home;