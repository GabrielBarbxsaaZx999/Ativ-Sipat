import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: 15,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        width: '40%',
    },
});

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SIPAT eBook</Text>
            <View style={styles.nav}>
                <Button title="Início" onPress={() => navigation.navigate('Home')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 1" onPress={() => navigation.navigate('Capitulo1')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 2" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 3" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
            </View>
            <Text style={styles.title}>Bem-vindo ao eBook SIPAT</Text>
            <Text style={styles.text}>
                Este eBook foi criado para promover a conscientização sobre a importância da segurança no ambiente de trabalho durante a Semana Interna de Prevenção de Acidentes no Trabalho (SIPAT).
            </Text>
            <Text style={styles.text}>
                Explore os capítulos abaixo para aprender mais sobre como prevenir acidentes e garantir um ambiente de trabalho seguro para todos.
            </Text>
            <Button title="Capítulo 1: Introdução à SIPAT" onPress={() => navigation.navigate('Capitulo1')} color={styles.button.backgroundColor} />
            <Button title="Capítulo 2: Medidas de Prevenção" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
            <Button title="Capítulo 3: Cultura de Segurança" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
        </View>
    );
};

const Capitulo1Screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SIPAT eBook</Text>
            <View style={styles.nav}>
                <Button title="Início" onPress={() => navigation.navigate('Home')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 1" onPress={() => navigation.navigate('Capitulo1')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 2" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 3" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
            </View>
            <Text style={styles.title}>Capítulo 1: Introdução à SIPAT</Text>
            <Text style={styles.text}>
                A Semana Interna de Prevenção de Acidentes no Trabalho (SIPAT) é um evento anual organizado pelas empresas para conscientizar seus colaboradores sobre a importância da segurança no trabalho.
            </Text>
            <Text style={styles.text}>
                Durante a SIPAT, são realizadas palestras, treinamentos e atividades que abordam temas relacionados à prevenção de acidentes, saúde e bem-estar dos trabalhadores.
            </Text>
            <Button title="Próximo Capítulo" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
        </View>
    );
};

const Capitulo2Screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SIPAT eBook</Text>
            <View style={styles.nav}>
                <Button title="Início" onPress={() => navigation.navigate('Home')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 1" onPress={() => navigation.navigate('Capitulo1')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 2" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
                <Button title="Capítulo 3" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
            </View>
            <Text style={styles.title}>Capítulo 2: Medidas de Prevenção</Text>
            <Text style={styles.text}>
                A segurança no trabalho é essencial para garantir um ambiente laboral saudável e produtivo. Quando os colaboradores se sentem seguros, são mais produtivos e engajados em suas atividades.
            </Text>
            <Text style={styles.text}>
                Além disso, investir em medidas de segurança no trabalho ajuda a prevenir acidentes e lesões, reduzindo os custos associados a licenças médicas e indenizações.
            </Text>
            <Button title="Próximo Capítulo" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
        </View>
    );
};


const Capitulo3Screen = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.header}>SIPAT eBook</Text>
          <View style={styles.nav}>
              <Button title="Início" onPress={() => navigation.navigate('Home')} color={styles.button.backgroundColor} />
              <Button title="Capítulo 1" onPress={() => navigation.navigate('Capitulo1')} color={styles.button.backgroundColor} />
              <Button title="Capítulo 2" onPress={() => navigation.navigate('Capitulo2')} color={styles.button.backgroundColor} />
              <Button title="Capítulo 3" onPress={() => navigation.navigate('Capitulo3')} color={styles.button.backgroundColor} />
          </View> <Text style={styles.title}>Capítulo 3: Cultura de Segurança</Text>
            <Text style={styles.text}>
                Implementar uma cultura de segurança é fundamental para garantir que todos os colaboradores estejam comprometidos com a prevenção de acidentes e a promoção de um ambiente de trabalho seguro.
            </Text>
        </View>
    );
};

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
                <Stack.Screen name="Capitulo1" component={Capitulo1Screen} options={{ title: 'Capítulo 1' }} />
                <Stack.Screen name="Capitulo2" component={Capitulo2Screen} options={{ title: 'Capítulo 2' }} />
                <Stack.Screen name="Capitulo3" component={Capitulo3Screen} options={{ title: 'Capítulo 3' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
