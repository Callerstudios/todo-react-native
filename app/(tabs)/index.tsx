import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useThemeContext } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../constants/theme"; // your theme objects

const { height, width } = Dimensions.get("window");

export default function TodoScreen() {
  const { theme: themeMode, toggleTheme } = useThemeContext();

  // Select theme based on mode
  const themeToUse = themeMode === "dark" ? darkTheme : lightTheme;

  const todos = useQuery(api.todos.list) || [];
  const addTodo = useMutation(api.todos.add);
  const toggleTodo = useMutation(api.todos.toggle);
  const removeTodo = useMutation(api.todos.remove);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter((t) =>
    filter === "completed"
      ? t.completed
      : filter === "active"
        ? !t.completed
        : true
  );

  const gradientColors: [string, string] = [
    themeToUse.colors.gradientFrom,
    themeToUse.colors.gradientTo,
  ];

  const handleAdd = async () => {
    if (!newTodo.trim()) return;
    await addTodo({ title: newTodo });
    setNewTodo("");
  };

  return (
    <LinearGradient
      colors={gradientColors}
      style={{ flex: 1, backgroundColor: themeToUse.colors.background }}
    >
      {/* Absolute image */}
      <Image
        source={
          themeMode === "light"
            ? require("../../assets/images/bg-image-light.jpg")
            : require("../../assets/images/bg-image-dark.jpg")
        }
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          height: height * 0.3,
          resizeMode: "cover",
        }}
      />

      <SafeAreaView style={{ flex: 1, alignItems: "center", padding: 20 }}>
        {/* HEADER */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "white",
              letterSpacing: 10,
            }}
          >
            TODO
          </Text>
          <TouchableOpacity style={{ padding: 8 }} onPress={toggleTheme}>
            {themeMode === "light" ? (
              <Feather name="moon" size={24} color="#fff" />
            ) : (
              <Feather name="sun" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </View>

        {/* INPUT */}
        <View
          style={{
            width: "100%",
            backgroundColor: themeToUse.colors.card,
            borderRadius: 10,
            paddingHorizontal: 18,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            elevation: 4,
          }}
        >
          <Feather
            name="circle"
            size={20}
            color={themeToUse.colors.border}
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={{ flex: 1, color: themeToUse.colors.text, fontSize: 16 }}
            placeholder="Create a new todo..."
            placeholderTextColor={themeToUse.colors.textMuted}
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={handleAdd}
            returnKeyType="done"
            blurOnSubmit
          />
        </View>

        {/* TODO LIST */}
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                backgroundColor: themeToUse.colors.card,
                paddingHorizontal: 18,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: themeToUse.colors.border,
              }}
            >
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await toggleTodo({ id: item._id });
                  } catch (e) {
                    console.log("Toggle error:", e);
                  }
                }}
              >
                {item.completed ? (
                  <Feather
                    name="check-circle"
                    size={20}
                    color={themeToUse.colors.primary}
                  />
                ) : (
                  <Feather
                    name="circle"
                    size={20}
                    color={themeToUse.colors.border}
                  />
                )}
              </TouchableOpacity>

              <Text
                style={{
                  color: item.completed
                    ? themeToUse.colors.textMuted
                    : themeToUse.colors.text,
                  textDecorationLine: item.completed ? "line-through" : "none",
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => removeTodo({ id: item._id })}>
                <Feather
                  name="x"
                  size={20}
                  color={themeToUse.colors.textMuted}
                />
              </TouchableOpacity>
            </View>
          )}
        />

        {/* FOOTER */}
        <View
          style={{
            width: "100%",
            backgroundColor: themeToUse.colors.card,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: themeToUse.colors.text }}>
            {todos.filter((t) => !t.completed).length} items left
          </Text>
          <TouchableOpacity
            onPress={() =>
              todos
                .filter((t) => t.completed)
                .forEach((t) => removeTodo({ id: t._id }))
            }
          >
            <Text style={{ color: themeToUse.colors.text }}>
              Clear Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* FILTERS */}
        <View
          style={{
            width: "100%",
            backgroundColor: themeToUse.colors.card,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 14,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          {["All", "Active", "Completed"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setFilter(tab.toLowerCase() as any)}
            >
              <Text
                style={{
                  color:
                    filter === tab.toLowerCase()
                      ? themeToUse.colors.primary
                      : themeToUse.colors.textMuted,
                  fontWeight: filter === tab.toLowerCase() ? "700" : "500",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
