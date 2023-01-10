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

export default function test({ navigation }) {
  const [desc, setDesc] = useState({ value: '', error: '' })

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

      <Button mode="contained">Pubblica</Button>
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
