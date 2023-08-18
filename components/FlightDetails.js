import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Column 1 - Row 1</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Column 1 - Row 1</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Column 1 - Row 1</Text>
        </View>
      </View>

      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={[styles.cell1, , { marginBottom: 20 }]}>
              <Text style={styles.cellText}>Column 2,1 - Row 1</Text>
            </View>
            <View style={styles.cell1}>
              <Text style={styles.cellText}>Column 2,2 - Row 1</Text>
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Column 2,2 - Row 1</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Column 2 - Row 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    height: '100%',
  },
  cell1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    height: '100%',

  },
  cellText: {
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default FlexboxExample;
