import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

//Importing Our Util and Components
import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";


//Styling for Screen
const styles = StyleSheet.create({
//Best practice to have a Container
    container: {
        flex:1,
        backgroundColor: "#202020",
        justifyContent: "flex-end"
    },
//Value will be Displayed on StatusBar 

    value:{
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
});

export default class App extends React.Component{
//Finding this
    state = initialState;
//Understanding this handleTop
    handleTop = (type, value) => {
        this.setState(state => calculator(type,value,state));
    };

    render(){
        return (
            <View style={styles.container}>

{/* StatusBar is Operating System Bar     */}
                <StatusBar barStyle="light-content" />
                
{/* Display content in a safe area view that will be working with all devices             */}
                <SafeAreaView>
                    <Text style={styles.value}>
                        {parseFloat(this.state.currentValue).toLocaleString()}
                    </Text>
                    
            {/* FirstRow */}
                    <Row>
                        <Button 
                            text="C"
                            theme="secondary"
                            onPress={() => this.handleTop("clear")}
                            />
                        <Button 
                            text="+/-"
                            theme="secondary"
                            onPress={() => this.handleTop("posneg")}
                            />
                        <Button 
                            text="%"
                            theme="secondary"
                            onPress={() => this.handleTop("percentage")}
                            />
                        <Button 
                            text="/"
                            theme="accent"
                            onPress={() => this.handleTop("operator", "/")}
                            />
                    </Row>
                    
            {/* SecondRow */}
                    <Row>
                        <Button text="7" onPress={() => this.handleTop("number", 7)} />
                        <Button text="8" onPress={() => this.handleTop("number", 8)} />
                        <Button text="9" onPress={() => this.handleTop("number", 9)} />
                        <Button
                                text="x"
                                theme="accent"
                                onPress={() => this.handleTop("operator", "*")}
                        />
                    </Row>
                    
            {/* ThirdRow */}
                    <Row>
                        <Button text="4" onPress={() => this.handleTop("number", 7)} />
                        <Button text="5" onPress={() => this.handleTop("number", 8)} />
                        <Button text="6" onPress={() => this.handleTop("number", 9)} />
                        <Button
                                text="-"
                                theme="accent"
                                onPress={() => this.handleTop("operator", "-")}
                        />
                    </Row>
                    
            {/* FourthRow */}
                    <Row>
                        <Button text="1" onPress={() => this.handleTop("number", 7)} />
                        <Button text="2" onPress={() => this.handleTop("number", 8)} />
                        <Button text="3" onPress={() => this.handleTop("number", 9)} />
                        <Button
                                text="+"
                                theme="accent"
                                onPress={() => this.handleTop("operator", "+")}
                        />
                    </Row>

            {/* LastRow */}
                    <Row>
                        <Button 
                            text="0"
                            size="double"
                            onPress={() => this.handleTop("number", 0)} 
                        />
                        <Button 
                            text="."  
                            onPress={() => this.handleTop("number", ".")} /> 
                        <Button
                            text="="
                            theme="accent"
                            onPress={() => this.handleTop("equal")}
                        />
                    </Row>

                    
                </SafeAreaView>
            </View>
        );
    }
}