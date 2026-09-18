// components/skeleton-item.tsx
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function SkeletonItem() {
  const opacity = useRef(new Animated.Value(0.3)).setValue ? useRef(new Animated.Value(0.3)).current : new Animated.Value(0.3);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.row, { opacity }]}>
      {/* Avatar circle skeleton */}
      <View style={styles.avatar} />

      {/* Text placeholders */}
      <View style={styles.info}>
        <View style={styles.nameLine} />
        <View style={styles.deptLine} />
        <View style={styles.idLine} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E2E8F0",
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  nameLine: {
    width: "60%",
    height: 15,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
    marginBottom: 6,
  },
  deptLine: {
    width: "40%",
    height: 12,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
    marginBottom: 6,
  },
  idLine: {
    width: "25%",
    height: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
  },
});