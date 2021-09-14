import React from "react";
import { View } from "react-native";
//Children is Button 
//What we created Rows Seperate



export default ({ children }) => (
    <View style={{ flexDirection:"row" }}>{children}</View>
);