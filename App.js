import React, { Component, useState  } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Jatta No Stress</Text>























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