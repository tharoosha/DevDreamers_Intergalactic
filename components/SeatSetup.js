import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
<rect x="-10" y="-4" width="48" height="48" fill="#D1D6D6" fill-opacity="0.15"/>
</svg>
`;


const tabContent = [
    [<SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,],
    [<SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,],
    [<SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />, <SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,<SvgXml xml={svgContent} />,]
  ];
  

const tabLabels = ['First         ', 'Business        ', 'Economy        '];

const SeatSetup = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const renderTabButtons = () => {
    return tabLabels.map((label, index) => (
      <Button key={index} onPress={() => handleTabChange(index)} title={label} />
    ));
  };

  const renderTabContent = () => {
    const items = tabContent[currentTab];
    const numRows = Math.ceil(items.length / 7);
  
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const rowItems = items.slice(i * 7, (i + 1) * 7);
      const rowView = rowItems.map((item, index) => (
        <View key={index} style={{ flex: 2, padding: 5, width: '100%', marginRight: 10 }}>
          {item}
        </View>
      ));
      rows.push(
        <View key={i} style={{ flexDirection: 'row', width: '100%', marginBottom: 10 }}>
          {rowView}
        </View>
      );
    }
  
    return <View>{rows}</View>;
  };
  

  return (
    <View style={{ flex: 2 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
        {renderTabButtons()}
      </View>
      <ScrollView contentContainerStyle={{ padding: 5 }}>
        {renderTabContent()}
      </ScrollView>
      <ScrollView contentContainerStyle={{ padding: 5 }}>
        {renderTabContent()}
    </ScrollView>
    </View>
  );
};

export default SeatSetup;
