import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'

export default function Dashboard({ navigation }) {
  const [desc, setDesc] = useState({ value: '', error: '' })
  const [weight, setWeight] = useState({ value: '', error: '' })
  const [type, setType] = useState({ value: '', error: '' })

  const onPushPressed = () => {
    const data = {
      description: String(desc.value),
      weight: weight.value,
      available: true,
      owner: 'Gabri',
      type: String(type.value),
      mail: 'test',
      tel: 333112,
    }

    fetch('http://localhost:8082/api/boxms/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        alert('Condivisione box avvenuta con successo')
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      })
      .catch((e) => {
        throw e
      })
  }

  return (
    <Background>
      <Header>Benvenuto</Header>
      <Paragraph>
        Inserisci i dati per la creazione e pubblicazione di una nuova box
      </Paragraph>
      <TextInput
        label="Descrizione"
        value={desc.value}
        onChangeText={(text) => setDesc({ value: text, error: '' })}
      />
      <TextInput
        label="Peso"
        value={weight.value}
        onChangeText={(text) => setWeight({ value: text, error: '' })}
      />
      <TextInput
        label="Tipologia"
        value={type.value}
        onChangeText={(text) => setType({ value: text, error: '' })}
      />

      <Button mode="contained" onPress={onPushPressed}>
        Pubblica
      </Button>
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
