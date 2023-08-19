import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* First column */}
      <View style={[styles.column0, styles.spaceBetweenColumn]}>
        <View style={styles.cell0}>
          <Text style={styles.cellText0}>Jetwing Airlines</Text>
        </View>
        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText1}>From: BIA Bonavi</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText1}>To: MXY Mikavu</Text>
          </View>
        </View>
        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText1}>2023-08-18</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText1}>12.30PM</Text>
          </View>
        </View>
      </View>

      {/* Second column */}
      <View style={[styles.column1, { marginBottom: 10 }, { marginRight: 12 }, styles.spaceBetweenColumn]}>
        <View style={styles.cell4}>
          <Svg width="60" height="60">
            <Circle cx="30" cy="30" r="25" fill="blue" />
          </Svg>
        </View>
        <View style={styles.cell3}>
          <Text style={styles.cellText1}>JA1943</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row', // To align columns side by side
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  column0: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  column1: {
    width: 80,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 0, // Align to the bottom
    marginLeft: -2,
  },
  spaceBetweenColumn: {
    justifyContent: 'space-between',
  },
  row0: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -10,
  },
  cell0: {
    width: 250,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'flex-end',
  },
  cell1: {
    width: 120,
    height: 35,
    // borderWidth: 1,
    justifyContent: 'flex-end',
  },
  cell2: {
    width: 120,
    height: 35,
    // borderWidth: 1,
    justifyContent: 'flex-end',
  },
  cell3: {
    width: 80,
    height: 35,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell4: {
    width: 80,
    height: 98,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText0: {
    fontSize: 35,
  },
  cellText1: {
    fontSize: 15,
  },
});

export default Flexbox;
