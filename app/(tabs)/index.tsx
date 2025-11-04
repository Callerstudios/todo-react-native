// app/(tabs)/index.tsx
import React from "react";
import { SafeAreaView, FlatList, Text, View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import ThemeToggle from "@/components/ThemeToggle";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled(View)`
  padding: 20px 16px 8px;
`;

const Title = styled(Text)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export default function MainScreen() {
  const todos = useQuery(api.todos.list) ?? [];
  const add = useMutation(api.todos.add);
  const toggle = useMutation(api.todos.toggle);
  const remove = useMutation(api.todos.remove);
  const theme = useTheme();

  const handleAdd = async (
    title: string,
    description?: string,
    dueDate?: number
  ) => {
    if (!title.trim()) return;
    await add({ title, description, dueDate });
  };

  return (
    <Container>
      <Header>
        <Title>My Todos</Title>
      </Header>

      <TodoInput onAdd={handleAdd} />

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
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />

      <ThemeToggle />
    </Container>
  );
}
