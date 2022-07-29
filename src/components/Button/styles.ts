import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 100,
    height: 100,
    top: '70%',
    pressed: {
      backgroundColor: 'red',
    },
  },
})
