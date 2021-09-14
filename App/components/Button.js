import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions }from 'react-native';


//Getting the Screen Size
const screen = Dimensions.get("window");

//Button Width is Set
const buttonWidth = screen.width / 4;



const styles = Stylesheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary:{
    color: "#060606"
  },
  button: {
    backgroundColor : "#333333",
    flex:1,
    height: Math.floor(buttonWidth -10),
    alignItems: "Center",
    justifyContent: "Center",
    borderRadius: Math.floor(buttonWidth),
    margin:5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});


//Function to Export Button
//On Press 
export default ({ onPress, text, size, theme }) => {
  
  //Setting Button Style for Global Use
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  //Condition for Button Size
  if(size === "double") {
    buttonStyles.push(styles.buttonDouble);
    textStyles.push(styles.textSecondary);
  }
  //Condition for Button theme
  else if(theme === "accent"){
    buttonStyles.push(styles.buttonAccent);
  }
  //Render Property of TouchableOpacity 
  return (
    <TouchableOpacity onPress ={onPress} style={buttonStyles}>
      <Text Style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )





}