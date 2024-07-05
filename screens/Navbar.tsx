import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>MOVIEFIX</Text>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => ('Horror')}>
          <Text style={styles.menuItem}>Horror</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ('Action')}>
          <Text style={styles.menuItem}>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ('SciFi')}>
          <Text style={styles.menuItem}>Sci-Fi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    padding: 10,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'red'
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  menuItem: {
    fontSize: 16,
    color: '#000',
    backgroundColor:"red"
  },
});

export default Navbar;
