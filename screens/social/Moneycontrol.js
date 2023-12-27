// MoneyStatsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MoneyStatsScreen = () => {
  // 假設這是你的金錢數據
  const incomeData = [4500, 3000, 4000, 3600, 3400];
  const expenseData = [3000, 4000, 2000, 1500, 2000];

  // 計算每個月的總收入和花費
  const totalIncome = incomeData.reduce((total, amount) => total + amount, 0);
  const totalExpense = expenseData.reduce((total, amount) => total + amount, 0);

  // 計算平均收入和平均花費
  const averageIncome = totalIncome / incomeData.length;
  const averageExpense = totalExpense / expenseData.length;

  // 設置圖表數據
  const chartData = {
    labels: ['一月', '二月', '三月', '四月', '五月'],
    datasets: [
      {
        data: incomeData,
        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // 綠色表示收入
      },
      {
        data: expenseData,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // 紅色表示花費
      },
    ],
  };

  // 適時的評語
  let comment = '';
  if (totalIncome > totalExpense) {
    comment = '你這個月收支平衡不錯！';
  } else {
    comment = '要小心開銷，注意理財！';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>金錢管理</Text>
      <Text style={styles.text}>本月總收入: ${totalIncome}</Text>
      <Text style={styles.text}>本月總支出: ${totalExpense}</Text>
      

      <LineChart
        data={chartData}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // 小數點位數
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 文字顏色
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 軸標籤顏色
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
      <Text  style={styles.text}>{comment}</Text>
      <Text  style={styles.text}>這個月的平均收入：{averageIncome}</Text>
      <Text  style={styles.text}>這個月的平均支出：{averageExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    marginTop: 20,
    borderRadius: 16,
  },
  text:{
    fontSize: 40,
  }
});

export default MoneyStatsScreen;
