import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

type TabPageProps = {
  title: string;
  description: string;
};

export function TabPage({ title, description }: TabPageProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? "#000000" : "#F2F2F7" },
      ]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDark ? "#FFFFFF" : "#000000" }]}>
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            { color: isDark ? "#A1A1A6" : "#6C6C70" },
          ]}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.6,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
