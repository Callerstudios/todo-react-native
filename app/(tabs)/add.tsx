// app/(tabs)/add.tsx
import React, { useState } from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "expo-router";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Input = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
`;

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const add = useMutation(api.todos.add);
  const router = useRouter();

  const handleSave = async () => {
    if (!title.trim()) return;
    await add({ title, description });
    router.back();
  };

  return (
    <Container>
      <Input
        placeholder="Title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Description"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save Todo" onPress={handleSave} />
    </Container>
  );
}
