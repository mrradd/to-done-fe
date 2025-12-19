import type { Categories } from "./models/Categories";
import type { Category } from "./models/Category";
import type { Task } from "./models/Task";
import type { Tasks } from "./models/Tasks";

const category1: Category = {
    id: "895d1274-5d2c-4529-89b3-c6f32d8b9746",
    label: "Chores",
}

const category2: Category = {
    id: "87d454e1-23c1-4c30-99fb-f4791ba4e34d",
    label: "Hobbies",
}

const category3: Category = {
    id: "e7c8e722-1039-4cd7-a72a-da96029ec810",
    label: "Learning",
}

const task1: Task = {
    id: "48858c22-3b2d-4959-8a5b-789591af6c9f",
    label: "",
    completed: false,
    creationDate: new Date(),
    category: category1
}

const task2: Task = {
    id: "cf5de6db-6f1b-4f2f-926c-857ab06073b3",
    label: "",
    completed: false,
    creationDate: new Date(),
    category: category2
}

export const fakeCategoryList: Categories = {
    categories: [
        category1,
        category2,
        category3
    ]
} as Categories

export const fakeTaskList: Tasks = {
    tasks: [
        task1,
        task2,
    ]
}