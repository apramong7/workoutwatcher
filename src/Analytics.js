import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles/AnalyticsStyle'


const Analytics = () => {
  const MyLineChart = () => {
    return (
      <>
      <Text style={styles.header}>USER ACCURACY</Text>
      <LineChart
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        yAxisSuffix="%"
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          alignSelf: 'flex-start',
          marginVertical: 8,
          borderRadius: 16,
        }}
       />
      </>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <MyLineChart />
    </SafeAreaView>
  )
}

export default Analytics