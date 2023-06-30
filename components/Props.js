import React from 'react'
import { View,Text } from 'react-native'

export default function Props(props) {
  return (
    <View>
        <Text>
            This is a react project:{props.name}        
        </Text>
    </View>
  )
}
