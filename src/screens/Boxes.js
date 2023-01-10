import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from '../components/TodoList'
import Loading from '../components/Loading'

export default function Boxes({ navigation }) {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/boxms/boxes')
      .then((result) => setTodos(result.data))
  }, [])

  return (
    <Background>
      <Header>BOX DISPONIBILI</Header>
      <div> {todos ? <TodoList todos={todos} /> : <Loading />} </div>
      <TouchableOpacity onPress={() => navigation.replace('StartScreen')}>
        <Text style={styles.link}>Logout</Text>
      </TouchableOpacity>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
