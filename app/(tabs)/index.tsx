// app/(tabs)/index.tsx
import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api"; // path may vary by convex setup
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";

export default function MainScreen() {
  // real-time query
  const todos = useQuery(api.todos.list) ?? [];
  const add = useMutation(api.todos.add);
  const toggle = useMutation(api.todos.toggle);
  const remove = useMutation(api.todos.remove);

  const handleAdd = async (
    title: string,
    description?: string,
    dueDate?: number
  ) => {
    if (!title.trim()) return;
    await add({ title, description, dueDate });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 28, marginBottom: 12 }}>Todos</Text>
        <TodoInput onAdd={handleAdd} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggle({ id: item._id })}
            onDelete={() => remove({ id: item._id })}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}
