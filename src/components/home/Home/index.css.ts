import { style } from '@vanilla-extract/css';

export const homeStyle = {
  main: style({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }),
  header: style({
    borderBottom: '1px solid red',
    height: '50px',
  }),
  body: style({
    display: 'flex',
  }),
};
