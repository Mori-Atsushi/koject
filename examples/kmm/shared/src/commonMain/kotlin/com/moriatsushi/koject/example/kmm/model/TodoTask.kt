package com.moriatsushi.koject.example.kmm.model

import com.moriatsushi.koject.example.kmm.util.randomUUID

data class TodoTask(
    val id: String,
    val title: String,
    val isCompleted: Boolean,
) {
    companion object {
        fun new(title: String): TodoTask {
            return TodoTask(
                id = randomUUID(),
                title = title,
                isCompleted = false,
            )
        }
    }

    fun updatedCompleted(isCompleted: Boolean): TodoTask {
        return copy(isCompleted = isCompleted)
    }
}
