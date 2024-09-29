import { View, Text } from 'react-native'
import React from 'react'
import { BOLD } from '../Theme/fonts'

const Header = ({name}) => {
  return (
    <View style={{ alignItems :"flex-start",justifyContent :"flex-end",height :100,backgroundColor :"#F9F9F9"}} >
<Text style={{fontSize :26 ,fontFamily : BOLD,marginStart :22}} >{name}</Text>
    </View>
  )
}

export default Header