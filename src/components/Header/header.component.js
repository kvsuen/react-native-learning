import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = ({
  title,
  startDate,
  endDate,
  departure,
  arrival,
  bookmarked,
  handleBookmark
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backArrow}>
        <Ionicons name="md-arrow-back" size={32} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubText}>
          {startDate} &nbsp; / &nbsp; {endDate}
        </Text>
        <Text style={styles.textSubText}>
          {departure}
          &nbsp; &nbsp;
          <Ionicons name="ios-swap" size={18} color="white" />
          &nbsp; &nbsp;
          {arrival}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={handleBookmark}>
        <View
          style={{
            ...styles.bookmark,
            backgroundColor: bookmarked ? 'rgb(255, 198, 112)' : 'transparent',
            borderWidth: bookmarked ? 0 : 1
          }}
        >
          <MaterialIcons name="bookmark-border" size={32} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 15
  },
  backArrow: {
    marginHorizontal: 25
  },
  textContainer: {
    flex: 1
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 2
  },
  textSubText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 2
  },
  bookmark: {
    borderColor: 'white',
    marginHorizontal: 25,
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
