import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const colors = ['#8B5CF6', '#3B82F6', '#EC4899', '#F59E0B', '#10B981', '#F97316', '#9CA3AF', '#C084FC'];

const frames = [
  { id: '1', name: 'Galaxy', color: '#8B5CF6' },
  { id: '2', name: 'Diamond', color: '#3B82F6' },
  { id: '3', name: 'Nebula', color: '#EC4899' },
  { id: '4', name: 'Moon', color: '#F59E0B' },
];

const media = [
  { id: '1', type: 'image', url: 'https://picsum.photos/150/150?random=20' },
  { id: '2', type: 'image', url: 'https://picsum.photos/150/150?random=21' },
  { id: '3', type: 'video', url: 'https://picsum.photos/150/150?random=22' },
  { id: '4', type: 'image', url: 'https://picsum.photos/150/150?random=23' },
  { id: '5', type: 'image', url: 'https://picsum.photos/150/150?random=24' },
  { id: '6', type: 'video', url: 'https://picsum.photos/150/150?random=25' },
];

export default function ProfileScreen() {
  const [tapCount, setTapCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#8B5CF6');
  const [selectedFrame, setSelectedFrame] = useState('1');

  const handleProfilePicTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    
    if (newCount >= 5) {
      Alert.alert(
        '🔱 Admin Access',
        'Enter admin code to access admin dashboard',
        [
          { text: 'Cancel', style: 'cancel', onPress: () => setTapCount(0) },
          { 
            text: 'Enter Code', 
            onPress: () => {
              // Later: Navigate to admin screen
              Alert.alert('Admin Panel', 'Welcome, Owner! 👑');
              setTapCount(0);
            }
          },
        ]
      );
    }
    
    // Reset after 2 seconds
    setTimeout(() => {
      if (tapCount < 4) setTapCount(0);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Profile Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleProfilePicTap} style={styles.profilePicContainer}>
            <View style={[styles.profileRing, { borderColor: selectedColor }]}>
              <View style={[styles.profilePic, { backgroundColor: selectedColor }]}>
                <Ionicons name="person" size={40} color="#FFFFFF" />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.username}>Aura Username</Text>
          <Text style={styles.bio}>Living the aura life ✨</Text>
          
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>201</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>94</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>80</Text>
              <Text style={styles.statLabel}>Lives Hosted</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>70</Text>
              <Text style={styles.statLabel}>Total Aura</Text>
            </View>
          </View>

          {/* Aura Balance */}
          <View style={styles.auraBalance}>
            <Ionicons name="sparkles" size={24} color="#8B5CF6" />
            <Text style={styles.auraBalanceText}>4,820 Aura</Text>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Color Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accent Color Selector</Text>
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorOption, { backgroundColor: color, borderColor: selectedColor === color ? '#FFFFFF' : 'transparent' }]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>

        {/* Frame Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Frame Selector</Text>
          <View style={styles.frameContainer}>
            {frames.map((frame) => (
              <TouchableOpacity
                key={frame.id}
                style={[styles.frameOption, { borderColor: selectedFrame === frame.id ? '#8B5CF6' : '#374151' }]}
                onPress={() => setSelectedFrame(frame.id)}
              >
                <Text style={styles.frameName}>{frame.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Media Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Media</Text>
          <View style={styles.mediaGrid}>
            {media.map((item) => (
              <View key={item.id} style={styles.mediaItem}>
                <Image source={{ uri: item.url }} style={styles.mediaImage} />
                {item.type === 'video' && (
                  <View style={styles.playIcon}>
                    <Ionicons name="play" size={16} color="#FFFFFF" />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
            <Text style={styles.settingText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="lock-closed-outline" size={20} color="#FFFFFF" />
            <Text style={styles.settingText}>Privacy</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="settings-outline" size={20} color="#FFFFFF" />
            <Text style={styles.settingText}>Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text style={[styles.settingText, { color: '#EF4444' }]}>Logout</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },
  profilePicContainer: {
    marginBottom: 16,
  },
  profileRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  profilePic: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bio: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },
  auraBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 24,
  },
  auraBalanceText: {
    color: '#8B5CF6',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 8,
    borderWidth: 2,
  },
  frameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  frameOption: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 12,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
  },
  frameName: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mediaItem: {
    width: '32%',
    aspectRatio: 1,
    marginRight: '2%',
    marginBottom: '2%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
  },
  playIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
});
