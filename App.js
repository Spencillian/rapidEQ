import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useState } from 'react';
import MathViewFallback from 'react-native-math-view/src/fallback';
import evaluatex from 'evaluatex/dist/evaluatex';

const DATA = [
  { id: '1', equation: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}' },
  { id: '2', equation: 'hello' },
  { id: '3', equation: 'world' },
]

function EquationBox({ item }) {
  return (
    <View style={styles.equationContainer}>
      <MathViewFallback
        // TODO: figure out how to use Evaluatex.js to solve the equation
        math={item.equation}
        style={styles.equation}
      />
    </View>
  );
}

export default function App() {
  const [equationList, _] = useState(DATA)
  const result = evaluatex('1 + 2 * 3 / 4')()
  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <FlatList 
        data={equationList}
        renderItem={EquationBox}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  equationContainer: {
    flex: 1,
  },
  equation: {
    fontSize: 20,
    margin: 10,
  }
});
