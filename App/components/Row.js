import React from "react";
import { View } from "react-native";
//Children is Button 
//No Nested View



export default ({ children }) => (
    <View style={{ flexDirection:"row" }}>{children}</View>
);