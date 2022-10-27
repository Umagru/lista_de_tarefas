import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [task, setTask] = useState(['Adicione novas tarefas']);
  const [newTask, setNewTask] = useState('');

  async function addTask() {
    setTask([...task, newTask]);
  }

  return (
    <>
      <View style={styles.container}>
        <view style={styles.Body}>
          <Text>Hello</Text>
        </view>
        <View style={styles.Form}>
          <TextInput 
          style={styles.Input}
          placeholderTextColor='#999'
          />
          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,

  },
  Body: {
    flex: 1
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
  },
});