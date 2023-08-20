import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Button, ScrollView } from 'react-native'
import { SvgXml } from 'react-native-svg'
import CustomButton from './CustomButton'

import { useNavigation } from '@react-navigation/native'

// import NewButton from './NewButton';


const svgContent = `
<svg fill="{FILL_COLOR}" width="40px" height="40px" viewBox="0 0 64 64" id="Layer_1_1_" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g>

<path d="M37,5H27v6h10V5z M35,9h-6V7h6V9z"/>

<path d="M36,53h-8c-2.191,0-4.285,1.047-5.601,2.801L21.2,57.4l1.6,1.199l1.199-1.599C24.939,55.748,26.435,55,28,55h8   c1.565,0,3.061,0.748,4.001,2l1.199,1.6l1.6-1.199L41.601,55.8C40.285,54.047,38.191,53,36,53z"/>

<path d="M49,47h-1.5l0.8-1.829c1.128-2.631,1.7-5.417,1.7-8.281c0-1.318-0.125-2.642-0.371-3.933L46.911,18.69   c-0.58-3.044-3.094-5.291-6.116-5.623C40.922,12.735,41,12.377,41,12V4c0-1.654-1.346-3-3-3H26c-1.654,0-3,1.346-3,3v8   c0,0.377,0.078,0.734,0.205,1.067c-3.022,0.332-5.537,2.58-6.116,5.623l-2.718,14.266C14.125,34.248,14,35.571,14,36.89   c0,2.864,0.572,5.65,1.7,8.281L16.485,47H15c-1.654,0-3,1.346-3,3v8c0,2.757,2.243,5,5,5h30c2.757,0,5-2.243,5-5v-8   C52,48.346,50.654,47,49,47z M44.946,19.064l2.718,14.267C47.887,34.5,48,35.697,48,36.89c0,2.592-0.518,5.112-1.538,7.494   l-1.355,3.168l-0.12,0.24C44.385,48.341,44,49.123,44,50v2.452c-0.599-0.633-1.276-1.179-2-1.65V15.42   C43.488,16.061,44.628,17.393,44.946,19.064z M24,21h16v4H24V21z M40,41.586L37.914,39.5L40,37.414V41.586z M32,27.414l3.086,3.086   L32,33.586L28.914,30.5L32,27.414z M27.5,29.086L25.414,27h4.172L27.5,29.086z M34.414,27h4.172L36.5,29.086L34.414,27z M30.586,35   L27.5,38.086L24.414,35l3.086-3.086L30.586,35z M32,36.414l3.086,3.086L32,42.586L28.914,39.5L32,36.414z M33.414,35l3.086-3.086   L39.586,35L36.5,38.086L33.414,35z M40,32.586L37.914,30.5L40,28.414V32.586z M24,28.414l2.086,2.086L24,32.586V28.414z M24,37.414   l2.086,2.086L24,41.586V37.414z M27.5,40.914L29.586,43h-4.172L27.5,40.914z M36.5,40.914L38.586,43h-4.172L36.5,40.914z M40,15v4   H24v-4h2h12H40z M24,45h16v4.773C38.736,49.277,37.383,49,36,49h-8c-1.383,0-2.736,0.277-4,0.773V45z M25,4c0-0.551,0.448-1,1-1h12   c0.552,0,1,0.449,1,1v8c0,0.551-0.448,1-1,1H26c-0.552,0-1-0.449-1-1V4z M16.336,33.331l2.718-14.267   c0.318-1.671,1.458-3.004,2.946-3.644v35.382c-0.724,0.471-1.401,1.017-2,1.65V50c0-0.869-0.377-1.645-0.968-2.194l-1.493-3.423   C16.518,42.002,16,39.481,16,36.89C16,35.697,16.113,34.5,16.336,33.331z M50,58c0,1.654-1.346,3-3,3H17c-1.654,0-3-1.346-3-3v-8   c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v5h2.5l0.3-0.399C22.491,52.346,25.183,51,28,51h8c2.817,0,5.509,1.346,7.2,3.601   L43.5,55H46v-5c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1V58z"/>

</g>
</svg>
`

const tabContent = [
  Array(7).fill(<SvgXml xml={svgContent.replace(/\{FILL_COLOR\}/g, 'primary')} />),
  Array(14).fill(<SvgXml xml={svgContent.replace(/\{FILL_COLOR\}/g, 'white')} />),
  Array(28).fill(<SvgXml xml={svgContent.replace(/\{FILL_COLOR\}/g, 'white')} />),
]

const tabLabels = ['First', 'Business', 'Economy']

const SeatSetup = () => {

  const navigation = useNavigation();

  const handleSubmit1 = () => {
    navigation.navigate('bookings')
  }

  const handleSubmit2 = () => {
    navigation.navigate('InvoiceReceipt')
  }

  const [currentTab, setCurrentTab] = useState(0)
  const [selectedIcons, setSelectedIcons] = useState(new Array(tabContent[currentTab].length).fill(false))

  const handleTabChange = (index) => {
    setCurrentTab(index)
    setSelectedIcons(new Array(tabContent[index].length).fill(false))
  }

  const handleIconClick = (rowIndex, iconIndex) => {
    const updatedSelectedIcons = [...selectedIcons]
    updatedSelectedIcons[rowIndex * 7 + iconIndex] = !updatedSelectedIcons[rowIndex * 7 + iconIndex]
    setSelectedIcons(updatedSelectedIcons)
  }

  const renderTabButtons = () => {
    return tabLabels.map((label, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleTabChange(index)}
        style={[
          styles.tabButton,
          currentTab === index && styles.selectedTabButton,
        ]}
      >
        <Text
          style={[
            styles.tabButtonText,
            currentTab === index && styles.selectedTabButtonText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    ))
  }

  const renderTabContent = () => {
    const items = tabContent[currentTab]
    const numRows = Math.ceil(items.length / 7)

    const rows = []
    for (let i = 0; i < numRows; i++) {
      const rowItems = items.slice(i * 7, (i + 1) * 7)
      const rowView = rowItems.map((item, index) => {
        const svgXml = svgContent.replace('{FILL_COLOR}', selectedIcons[i * 7 + index] ? 'deepskyblue' : 'white')
        return (
          <View
            key={index}
            style={{
              flex: 1,
              width: '100%',
              marginRight: 10,
            }}
            onTouchStart={() => handleIconClick(i, index)}
          >
            <SvgXml xml={svgXml} />
          </View>
        )
      })
      rows.push(
        <View key={i} style={{ flexDirection: 'row', width: '100%', marginBottom: 5 }}>
          {rowView}
        </View>
      )
    }

    return <View>{rows}</View>
  }

  return (
    <View style={{ flex: 2 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 1, marginBottom: 8, marginTop: 10 }}>
        {renderTabButtons()}
      </View>
      <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'white', padding: 10, margin: 10 }}>
        <ScrollView contentContainerStyle={{ padding: 1 }}>
          {renderTabContent()}
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20 }}>
        <CustomButton title="Add To Cart" bgcolor="white" textcolor='deepskyblue' onPress={handleSubmit1} />
        <CustomButton title="Proceed" bgcolor="deepskyblue" textcolor='white' onPress={handleSubmit2} />

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  tabButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  tabButton: {
    paddingHorizontal: 34,
    paddingVertical: 10,
  },
  selectedTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'deepskyblue',
    borderBottomEndRadius: 10,
  },
  tabButtonText: {
    color: 'white',
  },
  selectedTabButtonText: {
    color: 'white',
  },
  // ...
})

export default SeatSetup;




