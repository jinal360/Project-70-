import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      text: '',
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text style={styles.displayText}> WriteStoryScreen </Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: tittle });
          }}
          value={this.state.tittle}
        />
        <Text>Story tittle</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: author });
          }}
          value={this.state.author}
        />
        <Text>Author</Text>

        <TextInput
           style={[styles.inputBox,{multiline: true}]}
          onChangeText={(text) => {
            this.setState({ text: story });
          }}
          value={this.state.story}
        />
        <Text>Story</Text>

        <TouchableOpacity style={styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  displayText: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
