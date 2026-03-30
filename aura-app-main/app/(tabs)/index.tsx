import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock data for live streams
const liveStreams = [
  { id: '1', username: 'Luna_Star', viewers: 247, aura: 1842, thumbnail: 'https://picsum.photos/300/400?random=1' },
  { id: '2', username: 'CelestialAura', viewers: 189, aura: 1520, thumbnail: 'https://picsum.photos/300/400?random=2' },
  { id: '3', username: 'MysticVibes', viewers: 312, aura: 2100, thumbnail: 'https://picsum.photos/300/400?random=3' },
  { id: '4', username: 'AuraKing', viewers: 156, aura: 980, thumbnail: 'https://picsum.photos/300/400?random=4' },
  { id: '5', username: 'StarGazer', viewers: 423, aura: 3200, thumbnail: 'https://picsum.photos/300/400?random=5' },
  { id: '6', username: 'NightOwl', viewers: 201, aura: 1450, thumbnail: 'https://picsum.photos/300/400?random=6' },
];

export default function LiveScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {liveStreams.map((stream) => (
          <TouchableOpacity key={stream.id} style={styles.card}>
            <Image source={{ uri: stream.thumbnail }} style={styles.thumbnail} />
            <View style={styles.cardOverlay}>
              <View style={styles.userInfo}>
                <View style={styles.avatar}>
                  <Ionicons name="person" size={24} color="#FFFFFF" />
                </View>
                <View style={styles.userText}>
                  <Text style={styles.username}>{stream.username}</Text>
                  <Text style={styles.viewers}>
                    <Ionicons name="eye" size={12} color="#9CA3AF" /> {stream.viewers}
                  </Text>
                </View>
              </View>
              <View style={styles.auraBoost}>
                <Ionicons name="flash" size={16} color="#8B5CF6" />
                <Text style={styles.auraText}>{stream.aura}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.goLiveButton}>
        <Ionicons name="videocam" size={24} color="#FFFFFF" />
        <Text style={styles.goLiveText}>Go Live</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1F1F1F',
    height: 200,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 12,
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userText: {
    flex: 1,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewers: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
  auraBoost: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  auraText: {
    color: '#8B5CF6',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  goLiveButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  goLiveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
