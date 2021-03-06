import React from 'react';
import { View, Text } from 'react-native';

import TextInputContainer from '~/components/TextInputContainer';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MatchRegisterScreen extends React.Component {
  render() {
    return (
      <View>
        <TextInputContainer icon="ios-trophy" hint="제목"></TextInputContainer>
        <TextInputContainer icon="ios-calendar" hint="일정"></TextInputContainer>
        <TouchableOpacity>
          <View style={{ backgroundColor: "#0175DF", alignItems: "center", borderRadius: 10, padding: 10 }}>
            <Text style={{ color: "white", fontSize: 20 }}>추가</Text>
          </View>
        </TouchableOpacity>
      </View>);
  }
}
