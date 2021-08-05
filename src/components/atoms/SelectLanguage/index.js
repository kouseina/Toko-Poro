import {Icon, IndexPath, Select, SelectItem} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SelectLanguage = () => {
  const data = ['ID', 'ENG'];

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

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
        onSelect={index => setSelectedIndex(index)}>
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
