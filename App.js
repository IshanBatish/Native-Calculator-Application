import React, { Component, useState  } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';

const UpdateText = (props) => {
  const [text, updateText] = React.useState('InitialState'); 
  const [textInput,onTextChange] = React.useState('');
  return (
    <View>
      <Text style={{alignItems: 'center'}}>{text}</Text>
      <TextInput 
      style={{width:16,height:16,borderWidth:1,padding:50}}
      placeholder={"My Lyf, My Rules"}
      onChangeText={val => 
        onTextChange(val)}
      value={textInput}
      
      />
      <Button 
      onPress={() => updateText(TextInput)}
      title={"Do it"} />

    </View>)};

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Jatta No Stress</Text>
      <UpdateText />

















      {/* <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>
        Try editing me! {getFullName("Ishan","Batish")}🎉
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Your Message for me"
      />
      <Cafe name="Coffee" />
      <Cafe name="Tea" />
      <Career />
      <Study /> */}
    </View>
  );
}



// const getFullName = (fname, lname) => {
//   return fname + " " + lname;
// }

// const Study = (props) => {
//   const [isComputerScience, setIsComputerScience] = useState(true);
//   return(
//     <View>
//       <Text>
//         I have {props.name}, and I have {isComputerScience ? "hungry" :
//         "Full"}!
//       </Text>
//       <Button onPress={()=> {
//         setIsComputerScience(false);
//       }}
//       disabled={!isComputerScience}
//       title={isComputerScience ? "find my study" : "Thank you!"} />
//     </View>
//   )
// }

// class Career extends Component {
//   render() {
//     return (
//       <Text>Hello, I am Software Tester</Text>
//     )
//   }
// }
// const Cafe = (props) => {
//   return (
//     <View>
//       <Text>I like {props.name}
//       </Text>
//     </View>
//   );
// }


export default YourApp;