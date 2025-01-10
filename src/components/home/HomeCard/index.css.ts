import { flexCenterStyle } from '@/styles/common.css';
import { style } from '@vanilla-extract/css';

export const homeCardStyle = {
  main: style([
    flexCenterStyle,
    {
      flexDirection: 'column',
      border: '1px solid blue',
      padding: '10px',
      width: 'calc(33% - 10px)',
      margin: '5px',
      borderRadius: '10px',
    },
  ]),
  image: style({
    width: 'calc(100% - 20px)',
    height: '150px',
    backgroundColor: 'orange',
  }),
  title: style({}),
  description: style({}),
};
