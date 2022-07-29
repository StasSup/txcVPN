import { FC } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export interface IButton {
  label: string;
}

const Button: FC<IButton> = (props) => {
  const {
    label,
  } = props;

  return (
    <Pressable style={({ pressed }) => pressed ? styles.button.pressed : styles.button}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;
