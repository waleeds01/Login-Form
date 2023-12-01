import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
// Import your logo image
import Logo from "../../../assets/images/img2.png";

const Forgotpassword = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  const onContinuePressed = () => {
    navigation.navigate("Reset Confirmation");
  };

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Password Reset</Text>
        <Input
          name="Enter Email"
          placeholder="Enter Your Email"
          control={control}
          rules={{
            required: "Required lagi imo Email  ",
            pattern: { value: EMAIL_REGEX, message: "Your Email is invalid lagi daw" },
          }}
        />
        <Button
          text="Press ni to Continue"
          type="PRIMARY"
          onPress={handleSubmit(onContinuePressed)}
        />
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
    // Remove the backgroundColor property
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    color: "white",
  },
});

export default Forgotpassword;
