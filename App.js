import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import { Ionicons, Fontisto } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState(['Adicione novas tarefas', 'Lavar os pratos', 'Tomar banho']);
  const [newTask, setNewTask] = useState('');

  async function addTask() {
    setTask([...task, newTask]);
  }

  return (
    <>
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
                <TouchableOpacity>
                  <Fontisto name='checkbox-passive' size={25} color='#f64c75' />
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
          />
          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
            <Ionicons name='ios-add' size={25} color='25' />
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