import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.bottom,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  circle: {
    backgroundColor: colors.background.top,
    height: 700,
    width: 700,
    position: 'absolute',
    borderRadius: 350,
    top: -350,
    left: -308,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  carousel: background => ({
    marginTop: 20,
    height: 125,
    width: '100%',
    marginBottom: 30,
    backgroundColor: background,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    alignItems: 'center',
  }),
  imgBanner: {
    maxHeight: 125,
    width: 132,
  },
  bannerTitle: color => ({
    fontSize: 14,
    color: color,
    fontWeight: '700',
  }),
  bannerDesc: color => ({
    fontSize: 10,
    marginBottom: 15,
    color: color,
  }),
  carouselLeft: {
    flex: 1,
  },
  bannerBtn: {
    backgroundColor: colors.primary,
    width: 65,
    borderWidth: 0,
  },
});

export default styles;
