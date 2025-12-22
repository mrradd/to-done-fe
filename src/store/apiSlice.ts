import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task, CreateTaskDto, UpdateTaskDto } from "../models/Task";
import type { Category, CategoryDto } from "../models/Category";
import type { RadUUID } from "../utils";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000",
    }),
    tagTypes: ["Tasks", "Categories"],
    endpoints: (builder) => ({
        // ---------------- Tasks ----------------
        getTasks: builder.query<Task[], void>({
            query: () => "/tasks",
            providesTags: (result) =>
                result
                    ? [
                        { type: "Tasks", id: "LIST" },
                        ...result
                            .filter((t) => t.id)
                            .map((t) => ({ type: "Tasks" as const, id: t.id as RadUUID })),
                    ]
                    : [{ type: "Tasks", id: "LIST" }],
        }),

        getTaskById: builder.query<Task, RadUUID>({
            query: (id) => `/tasks/${id}`,
            providesTags: (_res, _err, id) => [{ type: "Tasks", id }],
        }),

        createTask: builder.mutation<Task, CreateTaskDto>({
            query: (body) => ({
                url: "/tasks",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Tasks", id: "LIST" }],
        }),

        updateTask: builder.mutation<Task, { id: RadUUID; body: UpdateTaskDto }>({
            query: ({ id, body }) => ({
                url: `/tasks/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: (_res, _err, { id }) => [
                { type: "Tasks", id },
                { type: "Tasks", id: "LIST" },
            ],
        }),

        deleteTask: builder.mutation<string, RadUUID>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Tasks", id: "LIST" }],
        }),

        // ---------------- Categories ----------------
        getCategories: builder.query<Category[], void>({
            query: () => "/categories",
            providesTags: (result) =>
                result
                    ? [
                        { type: "Categories", id: "LIST" },
                        ...result
                            .filter((c) => c.id)
                            .map((c) => ({ type: "Categories" as const, id: c.id as RadUUID })),
                    ]
                    : [{ type: "Categories", id: "LIST" }],
        }),

        getCategoryById: builder.query<Category, RadUUID>({
            query: (id) => `/categories/${id}`,
            providesTags: (_res, _err, id) => [{ type: "Categories", id }],
        }),

        createCategory: builder.mutation<Category, CategoryDto>({
            query: (body) => ({
                url: "/categories",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Categories", id: "LIST" }],
        }),

        updateCategory: builder.mutation<Category, { id: RadUUID; body: CategoryDto }>({
            query: ({ id, body }) => ({
                url: `/categories/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: (_res, _err, { id }) => [
                { type: "Categories", id },
                { type: "Categories", id: "LIST" },
            ],
        }),

        deleteCategory: builder.mutation<string, RadUUID>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Categories", id: "LIST" }],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskByIdQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,

    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = api;
