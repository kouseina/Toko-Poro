import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {},
  carousel: {
    minHeight: 167,
    width: '100%',
  },
  img: {
    height: 100,
    backgroundColor: colors.product.img,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  wrapperLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
  },
  seeAll: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
  },
  productText: {
    padding: 10,
  },
  productName: {
    marginBottom: 7,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '700',
  },
  productPrice: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
  },
});

export default styles;
