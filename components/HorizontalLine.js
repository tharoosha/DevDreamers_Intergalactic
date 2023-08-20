import React from 'react'
import { View, StyleSheet } from 'react-native'

const HorizontalLine = ({ color, height, opacity, topmargin, bottommargin }) => {
  const lineStyle = {
    borderBottomColor: color || 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: height || 1,
    opacity: opacity || 1,
    marginBottom: bottommargin || 0,
    marginTop: bottommargin || 0,
  }

  return <View style={[lineStyle, styles.horizontalLine]} />
}

const styles = StyleSheet.create({
  horizontalLine: {
    alignSelf: 'stretch',
  },
})

export default HorizontalLine
