// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Card, Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/mobile-legends-background.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mobile Legends</Text>
        <Card containerStyle={styles.card}>
          <Card.Title>Welcome, Summoner!</Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>
            Explore the world of Mobile Legends. Choose your hero and prepare for battle.
          </Text>
        </Card>
        
      </View>
    </ImageBackground>
  );
};

const HeroListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [heroes, setHeroes] = useState([
    { id: '1', name: 'Alucard', description: 'A fighter hero known for lifesteal abilities and mobility.', image: 'https://i.pinimg.com/474x/db/d9/68/dbd9682aa28d400ac54e055d753543e0.jpg' },
    { id: '2', name: 'Eudora', description: 'A mage hero with powerful burst damage and crowd control.', image: 'https://i.pinimg.com/736x/58/06/aa/5806aae7fbb1d63efcb6ec212ca4e15e.jpg' },
    { id: '3', name: 'Layla', description: 'A marksman hero with long-range attacks and high damage output.', image: 'https://i.pinimg.com/736x/e0/d8/46/e0d84612bc4dbea7bae77cf1bd686134.jpg' },
    { id: '4', name: 'tigrel', description: 'A tank hero one of the hero roles in the Mobile Legends game whose role is to protect the team from enemy attacks.', image: 'https://i.pinimg.com/736x/fd/75/7e/fd757eec79e3c29009fbbaff1df554af.jpg' },
    { id: '5', name: 'ling', description: 'A jungler The role in the Mobile Legends game is to clean the forest and help teammates.', image: 'https://i.pinimg.com/736x/2a/d9/8d/2ad98d545d5af51d364fdb281aecea7d.jpg' },
  
  ]);

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchText.toLowerCase()) ||
    hero.description.toLowerCase().includes(searchText.toLowerCase()) ||
    hero.id.includes(searchText)
  );

  return (
    <View style={styles.heroListContainer}>
      <Text style={styles.heroListTitle}>Hero List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search heroes..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredHeroes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Image source={{ uri: item.image }} style={styles.heroImage} />
            <Text style={styles.heroDescription}>{item.description}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Profile</Text>
      <Card>
        <Card.Title>Ahmad</Card.Title>
        <Card.Divider />
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/e1/63/61/e1636158301bd4eeb32b573106455b50.jpg' }} // Replace with your image URL
          style={styles.profileImage}
        />
      </Card>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Hero List') {
              iconName = 'list';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            return <Icon name={iconName} type="entypo" color={color} size={size} />;
          },
          tabBarActiveTintColor: '#1f8efa',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Hero List" component={HeroListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding: 15,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#1f8efa',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginTop: 20,
    elevation: 3, // Adds a light shadow effect
  },
  heroListContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heroListTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  heroImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 10,
  },
  heroDescription: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#1f8efa',
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  profileText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
});
