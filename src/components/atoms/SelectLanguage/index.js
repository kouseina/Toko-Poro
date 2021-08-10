import {Icon, IndexPath, Select, SelectItem} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SelectLanguage = ({selectedIndex, onSelect}) => {
  const data = ['ENG', 'ID'];

  const GlobeIcon = props => <Icon {...props} name="globe" />;

  const displayValue = data[selectedIndex.row];
  const renderOption = title => (
    <SelectItem accessoryLeft={GlobeIcon} title={title} />
  );

  return (
    <View style={styles.container}>
      <Select
        size="large"
        style={styles.select}
        placeholder="Default"
        value={displayValue}
        selectedIndex={selectedIndex}
        status="warning"
        onSelect={onSelect}>
        {data.map(renderOption)}
      </Select>
    </View>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  container: {
    width: 104,
  },
  select: {
    flex: 1,
  },
});
