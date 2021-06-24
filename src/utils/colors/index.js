const mainColors = {
  yellow1: '#FFC33A',
  blue1: '#0061D4',
  blue2: '#025AB4',
  blue3: '#286BC7',
  red1: '#E9421E',
  white1: '#FFFFFF',
  black1: '#000000',
  gray1: '#ECEEF0',
  black2: 'rgba(0, 0, 0, 0.25)',
  black3: 'rgba(0, 0, 0, 0.1)',
};

export const colors = {
  primary: mainColors.yellow1,
  secondary: mainColors.blue1,
  white: mainColors.white1,
  black: mainColors.black1,
  background: {
    top: mainColors.blue1,
    bottom: mainColors.blue2,
  },
  carousel: mainColors.blue3,
  dot: {
    active: mainColors.black2,
    inActive: mainColors.black3,
  },
  product: {
    img: mainColors.gray1,
  },
};
