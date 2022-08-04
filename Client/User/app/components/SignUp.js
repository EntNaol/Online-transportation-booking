import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskContext,{Task} from '../Realm'


const SignUp = () => {
    const { useRealm, useQuery, RealmProvider } = TaskContext;
  return (
      <RealmProvider>
    <View>
      <Text>SignUp</Text>
    </View>
    </RealmProvider>
  )
}

export default SignUp

const styles = StyleSheet.create({})