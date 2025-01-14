import { flexCenterStyle } from '@/styles/common.css';
import { responsiveStyle } from '@/styles/media.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const responsive = {
  main: style([
    flexCenterStyle,
    responsiveStyle({
      desktop: {
        marginTop: '100px',
        width: '200px',
        backgroundColor: vars.color.gray,
      },
      tablet: {
        width: '100%',
      },
    }),
    {
      height: '200px',
      backgroundColor: vars.color.gray,
    },
  ]),
};
