import { FC, useState, useRef, useMemo } from 'react';
import { Text, Pressable, Animated } from 'react-native';
import styles from './styles';

export interface IButton {
  label: string;
}

const Button: FC<IButton> = (props) => {
  const {
    label,
  } = props;

  const [isActive, setIsActive] = useState<boolean>(false);
  const [animation] = useState(new Animated.Value(0));

  const startTransition = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const endTransition = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    setIsActive(!isActive)
    if (isActive) {
      endTransition();
      return;
    }

    startTransition();
  };

  const animateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'blue'],
  });

  const animatedStyle = {
    backgroundColor: animateInterpolation,
  };

  return (
    <Pressable style={styles.pressable} onPress={handlePress}>
      <Animated.View style={{...styles.view, ...animatedStyle}}>
        <Text>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
