import React, {useState} from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from './AppStyle';

export default function App() {
  
  const [count, setCount] = useState(0);

  const onPressed = () => {
    setCount((count) => count + 1);
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        h2
      >
        Contador
      </Text>
      <Text
        style={styles.text}
        h2
      >
        {count}
      </Text>
      <Button
        title={'Add'}
        onPress={onPressed}
      />      
    </View>
  );
}

