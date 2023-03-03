package com.moriatsushi.koject.example.kmm.repository

import com.moriatsushi.koject.example.kmm.model.TodoList
import com.moriatsushi.koject.example.kmm.model.TodoTask

interface TodoRepository {
    suspend fun fetchTodoList(): TodoList

    suspend fun save(task: TodoTask)
}
