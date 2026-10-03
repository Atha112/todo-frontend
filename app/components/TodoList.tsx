'use client';

import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Daftar Tugas</h2>
        <span className="text-xs bg-gray-70 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          {todos.length} item
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center my-4">
          <p className="font-semibold text-gray-700">Belum ada tugas.</p>
          <p className="text-xs text-gray-500 mt-1">Tambahkan tugas baru di atas untuk memulai!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}