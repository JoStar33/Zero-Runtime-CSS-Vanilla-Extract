import { flexCenterStyle } from '@/styles/common.css';
import { style } from '@vanilla-extract/css';

const dragCardStyle = {
  cardWrapper: style({
    display: 'flex',
    height: '110px',
    width: '300px',
    position: 'relative',
  }),
  main: style({
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    width: '300px',
    height: '70px',
    gap: '20px',
    borderRadius: '10px',
    border: '1px solid black',
  }),
  cardTitle: style({
    fontWeight: '600',
    fontSize: '17px',
  }),
  cardDeleteButton: style([
    flexCenterStyle,
    {
      zIndex: 1,
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '60px',
      height: '100%',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
    },
  ]),
};

export default dragCardStyle;
