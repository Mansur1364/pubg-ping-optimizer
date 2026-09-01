import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ClockScreen from './screens/ClockScreen';

interface TabItem {
  id: string;
  name: string;
  icon: string;
}

export default function AppNavigator() {
  const [activeTab, setActiveTab] = useState('ping');

  const tabs: TabItem[] = [
    { id: 'ping', name: 'پینگ', icon: '📊' },
    { id: 'clock', name: 'ساعت', icon: '🕐' },
    { id: 'settings', name: 'تنظیمات', icon: '⚙️' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'ping':
        return <PingScreen />;
      case 'clock':
        return <ClockScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <PingScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderContent()}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.navItem,
              activeTab === tab.id && styles.navItemActive,
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text
              style={[
                styles.navLabel,
                activeTab === tab.id && styles.navLabelActive,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

function PingScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 PUBG Ping Optimizer</Text>
        <Text style={styles.subtitle}>نمایندگی بهینه‌سازی پینگ</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>پینگ فعلی</Text>
        <Text style={styles.pingValue}>45ms</Text>
        <Text style={styles.serverInfo}>سرور: Asia-Seoul</Text>
        <Text style={styles.status}>✅ وضعیت: عالی</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>سرورهای موجود</Text>
        {['Asia-Seoul', 'Asia-Shanghai', 'Middle-East', 'Europe-London'].map(
          (server, i) => (
            <View key={i} style={styles.serverItem}>
              <Text style={styles.serverName}>{server}</Text>
              <Text style={styles.serverPing}>{45 + i * 10}ms</Text>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ تنظیمات</Text>
        <Text style={styles.subtitle}>تنظیمات کاربر و ترجیحات</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.settingTitle}>حساب کاربری</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>نام کاربری:</Text>
          <Text style={styles.settingValue}>Mansur1364</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>ایمیل:</Text>
          <Text style={styles.settingValue}>mansur@example.com</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.settingTitle}>تنظیمات برنامه</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>تم:</Text>
          <Text style={styles.settingValue}>تاریک 🌙</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>اعلان‌ها:</Text>
          <Text style={styles.settingValue}>فعال ✅</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.settingTitle}>اطلاعات</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>نسخه:</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>توسعه‌دهنده:</Text>
          <Text style={styles.settingValue}>Mansur1364</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  header: {
    marginBottom: 24,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#BDBDBD',
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  cardTitle: {
    fontSize: 14,
    color: '#BDBDBD',
    marginBottom: 8,
  },
  pingValue: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 12,
  },
  serverInfo: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  serverItem: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  serverPing: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
  },
  settingLabel: {
    fontSize: 14,
    color: '#BDBDBD',
  },
  settingValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderTopWidth: 1,
    borderTopColor: '#404040',
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  navItemActive: {
    borderTopWidth: 3,
    borderTopColor: '#2196F3',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#BDBDBD',
  },
  navLabelActive: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
