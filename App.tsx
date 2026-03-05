import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const stageData = [
    {name: '进件', count: 86, color: '#60a5fa'},
    {name: '风控审核', count: 52, color: '#fbbf24'},
    {name: '签约', count: 33, color: '#34d399'},
    {name: '放款中', count: 19, color: '#a78bfa'},
  ];

  const trendData = [
    {time: '09:00', value: 8},
    {time: '11:00', value: 13},
    {time: '13:00', value: 11},
    {time: '15:00', value: 17},
    {time: '17:00', value: 22},
    {time: '19:00', value: 14},
  ];

  const maxTrend = Math.max(...trendData.map(item => item.value));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.badge}>贷款业务看板</Text>
        <Text style={styles.title}>今日贷款总单数</Text>
        <Text style={styles.subtitle}>实时更新申请单、审核进度与放款表现</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>总申请单</Text>
          <Text style={styles.heroValue}>190 单</Text>
          <Text style={styles.heroHint}>较昨日 +15.8%</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>阶段分布</Text>
          <Text style={styles.sectionMeta}>通过率 72%</Text>
        </View>

        <View style={styles.stageList}>
          {stageData.map(item => (
            <View key={item.name} style={styles.stageRow}>
              <View style={styles.stageNameWrap}>
                <View style={[styles.dot, {backgroundColor: item.color}]} />
                <Text style={styles.stageName}>{item.name}</Text>
              </View>
              <Text style={styles.stageCount}>{item.count} 单</Text>
            </View>
          ))}
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>今日放款单量</Text>
            <Text style={styles.statValue}>48 单</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>今日放款金额</Text>
            <Text style={styles.statValue}>¥ 286.4 万</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>放款趋势图</Text>
            <Text style={styles.sectionMeta}>按小时</Text>
          </View>

          <View style={styles.chartArea}>
            {trendData.map(item => (
              <View key={item.time} style={styles.barItem}>
                <Text style={styles.barValue}>{item.value}</Text>
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      {height: `${(item.value / maxTrend) * 100}%`},
                    ]}
                  />
                </View>
                <Text style={styles.barLabel}>{item.time}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>风险提示</Text>
          <Text style={styles.footerText}>
            当前“风控审核”阶段积压较高，建议优先分配审核资源，避免影响晚间放款转化。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 28,
  },
  glowTop: {
    position: 'absolute',
    top: -90,
    right: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#3b82f6',
    opacity: 0.2,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -100,
    left: -50,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#14b8a6',
    opacity: 0.18,
  },
  badge: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: '700',
    color: '#dbeafe',
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 10,
  },
  title: {
    marginTop: 14,
    fontSize: 32,
    fontWeight: '600',
    color: '#f8fafc',
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    color: '#cbd5e1',
    lineHeight: 22,
  },
  heroCard: {
    marginTop: 24,
    backgroundColor: '#111d39',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1d4ed8',
  },
  heroLabel: {
    color: '#93c5fd',
    fontSize: 14,
    fontWeight: '500',
  },
  heroValue: {
    marginTop: 8,
    fontSize: 44,
    fontWeight: '700',
    color: '#f8fafc',
  },
  heroHint: {
    marginTop: 4,
    fontSize: 14,
    color: '#86efac',
  },
  sectionHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e2e8f0',
  },
  sectionMeta: {
    fontSize: 13,
    color: '#93c5fd',
  },
  stageList: {
    marginTop: 12,
    backgroundColor: '#0b1220',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 16,
    paddingVertical: 6,
  },
  stageRow: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#172033',
  },
  stageNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  stageName: {
    fontSize: 14,
    color: '#cbd5e1',
  },
  stageCount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f1f5f9',
  },
  statsGrid: {
    marginTop: 14,
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statCard: {
    width: '50%',
    paddingHorizontal: 6,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 6,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f1f5f9',
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 14,
    paddingVertical: 14,
    textAlign: 'center',
  },
  chartCard: {
    marginTop: 18,
    backgroundColor: '#0b1220',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 16,
    padding: 14,
  },
  chartArea: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 170,
    gap: 8,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
  },
  barValue: {
    fontSize: 11,
    color: '#93c5fd',
    marginBottom: 6,
  },
  barTrack: {
    width: '80%',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#172033',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 10,
    minHeight: 6,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 11,
    color: '#94a3b8',
  },
  footerCard: {
    marginTop: 18,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 16,
    padding: 16,
  },
  footerTitle: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 8,
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default App;
