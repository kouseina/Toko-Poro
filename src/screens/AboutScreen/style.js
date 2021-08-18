import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
  bgIcon: {
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  wrapperSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
