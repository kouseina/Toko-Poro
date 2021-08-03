import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    lineHeight: 25,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSocial: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  wrapperSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
