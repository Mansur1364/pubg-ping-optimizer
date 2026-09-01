import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface TimeZoneClock {
  name: string;
  timezone: string;
  offset: number;
  time: string;
  flag: string;
}

export default function ClockScreen() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [timeZones, setTimeZones] = useState<TimeZoneClock[]>([]);

  const TIMEZONES = [
    { name: 'تهران', timezone: 'Asia/Tehran', flag: '🇮🇷' },
    { name: 'دوبی', timezone: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'کراچی', timezone: 'Asia/Karachi', flag: '🇵🇰' },
    { name: 'تاشکند', timezone: 'Asia/Tashkent', flag: '🇺🇿' },
    { name: 'سئول', timezone: 'Asia/Seoul', flag: '🇰🇷' },
    { name: 'شانگهای', timezone: 'Asia/Shanghai', flag: '🇨🇳' },
    { name: 'تایپه', timezone: 'Asia/Taipei', flag: '🇹🇼' },
    { name: 'بانکوک', timezone: 'Asia/Bangkok', flag: '🇹🇭' },
    { name: 'سنگاپور', timezone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'هنگ کنگ', timezone: 'Asia/Hong_Kong', flag: '🇭🇰' },
    { name: 'توکیو', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'لندن', timezone: 'Europe/London', flag: '🇬🇧' },
    { name: 'پاریس', timezone: 'Europe/Paris', flag: '🇫🇷' },
    { name: 'نیویورک', timezone: 'America/New_York', flag: '🇺🇸' },
    { name: 'لس آنجلس', timezone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'سیدنی', timezone: 'Australia/Sydney', flag: '🇦🇺' },
  ];

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const updateTime = () => {
    const now = new Date();
    
    // محلی وقت
    const localHours = String(now.getHours()).padStart(2, '0');
    const localMinutes = String(now.getMinutes()).padStart(2, '0');
    const localSeconds = String(now.getSeconds()).padStart(2, '0');
    setCurrentTime(`${localHours}:${localMinutes}:${localSeconds}`);

    // اختلاف مناطق زمانی
    const zones = TIMEZONES.map((zone) => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: zone.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const hour = parts.find((p) => p.type === 'hour')?.value || '00';
      const minute = parts.find((p) => p.type === 'minute')?.value || '00';
      const second = parts.find((p) => p.type === 'second')?.value || '00';

      return {
        name: zone.name,
        timezone: zone.timezone,
        offset: 0,
        time: `${hour}:${minute}:${second}`,
        flag: zone.flag,
      };
    });

    setTimeZones(zones);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🕐 ساعت جهانی</Text>
        <Text style={styles.subtitle}>نمایش زمان در مناطق مختلف</Text>
      </View>

      {/* Local Time Display */}
      <View style={styles.localTimeCard}>
        <Text style={styles.localLabel}>وقت محلی</Text>
        <Text style={styles.localTime}>{currentTime}</Text>
        <Text style={styles.localDate}>
          {new Date().toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>

      {/* Time Zones Grid */}
      <View style={styles.gridContainer}>
        {timeZones.map((zone, index) => (
          <TouchableOpacity key={index} style={styles.clockCard}>
            <Text style={styles.flag}>{zone.flag}</Text>
            <Text style={styles.zoneName}>{zone.name}</Text>
            <Text style={styles.zoneTime}>{zone.time}</Text>
            <Text style={styles.zoneTimezone}>{zone.timezone}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          به‌روز‌رسانی هر ثانیه • تاریخ و ساعت جهانی
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  localTimeCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    alignItems: 'center',
  },
  localLabel: {
    fontSize: 14,
    color: '#BDBDBD',
    marginBottom: 12,
  },
  localTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4CAF50',
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  localDate: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  clockCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
  },
  flag: {
    fontSize: 32,
    marginBottom: 8,
  },
  zoneName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  zoneTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  zoneTimezone: {
    fontSize: 10,
    color: '#BDBDBD',
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#404040',
    marginBottom: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#BDBDBD',
  },
});
