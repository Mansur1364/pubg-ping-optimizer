import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

interface PingData {
  server: string;
  ping: number;
  region: string;
  status: 'good' | 'fair' | 'poor';
}

export default function App() {
  const [pingData, setPingData] = useState<PingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [servers, setServers] = useState<PingData[]>([]);

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    fetchServers();
  }, []);

  const fetchServers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/servers`);
      setServers(response.data);
    } catch (error) {
      console.error('Error fetching servers:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkPing = async (server: string) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/ping`, { server });
      setPingData(response.data);
    } catch (error) {
      console.error('Error checking ping:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPingColor = (ping: number) => {
    if (ping < 50) return '#4CAF50'; // Green - Good
    if (ping < 100) return '#FFC107'; // Yellow - Fair
    return '#F44336'; // Red - Poor
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 PUBG Ping Optimizer</Text>
        <Text style={styles.subtitle}>Real-time Network Monitoring</Text>
      </View>

      {pingData && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Ping</Text>
          <Text
            style={[
              styles.pingValue,
              { color: getPingColor(pingData.ping) },
            ]}
          >
            {pingData.ping}ms
          </Text>
          <Text style={styles.serverInfo}>Server: {pingData.server}</Text>
          <Text style={styles.serverInfo}>Region: {pingData.region}</Text>
          <Text style={styles.status}>Status: {pingData.status}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Servers</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#2196F3" />
        ) : (
          servers.map((server, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serverButton}
              onPress={() => checkPing(server.server)}
            >
              <View style={styles.serverContent}>
                <Text style={styles.serverName}>{server.server}</Text>
                <Text style={styles.serverRegion}>{server.region}</Text>
              </View>
              <Text
                style={[
                  styles.serverPing,
                  { color: getPingColor(server.ping) },
                ]}
              >
                {server.ping}ms
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>

      <TouchableOpacity style={styles.refreshButton} onPress={fetchServers}>
        <Text style={styles.refreshButtonText}>🔄 Refresh Servers</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingTop: 20,
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
  serverButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serverContent: {
    flex: 1,
  },
  serverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  serverRegion: {
    fontSize: 12,
    color: '#BDBDBD',
    marginTop: 4,
  },
  serverPing: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  refreshButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  refreshButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
