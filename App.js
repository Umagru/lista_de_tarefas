import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, FlatList, KeyboardAvoidingView, Platform, Keyboard, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import { Ionicons, Fontisto } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState(['Estudar']);
  const [newTask, setNewTask] = useState('');
  const [isSelected, setSelection] = useState(false);

  async function addTask() {
    if (newTask === '') {
      return;
    }

    const search = task.filter(task => task === newTask);

    if (search.length == !0) {
      alert('Nome Repetido!');
      return;
    }


    setTask([...task, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  async function checkTask(item) {

    setTask(task.filter(tasks => tasks ===! item));

  }

  // useEffect(() => {
  //   async function carregaDados() {
  //     const task = await

  //     if (task) {
  //       setTask(JSON.parse(task)
  //     }
  //   }
  //   carregaDados();
  // })

  // useEffect(() => {
  //   async function salvaDados() {

  //   }
  // })

  

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior='padding'
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
      >
        <View style={styles.container}>
          <View style={styles.Body}>
            <View>
              <Text style={styles.Titulo}>Lista de Tarefas</Text>
            </View>
            <FlatList
              style={styles.FlatList}
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.Item}>
                  <Text style={styles.Texto}>{item}</Text>
                  {/* <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  /> */}
                  <TouchableOpacity>
                    {/* <Fontisto name='checkbox-passive' size={25}/>} */}
                    <Fontisto name='checkbox-active' size={20} color='#FF0000'/>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor='#999'
              autoCorrect={true}
              placeholder='Adicione uma tarefa'
              maxLength={41}
              onChangeText={text => setNewTask(text)}
              value={newTask}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name='ios-add' size={25} color='25' />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    // marginTop: 20,
  },
  Body: {
    flex: 1,
    // backgroundColor: '#eee',
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
  FlatList: {
    flex: 1,
    marginTop: 5,
  },
  Item: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#eee',

    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee',
  },
  Texto: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    // marginTop: 4,
    textAlign: 'center',
  },
  Titulo: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  }
});