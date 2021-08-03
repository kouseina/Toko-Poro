import {Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const LabelCategory = ({text, onPress, key}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        key={key}
        style={[
          styles.container,
          {backgroundColor: theme['color-primary-500']},
        ]}>
        <Text category="label" style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LabelCategory;

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'white',
    fontSize: 10,
  },
  container: {
    padding: 5,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 3,
    marginRight: 3,
  },
});
