import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateTaskDto, Task, UpdateTaskDto } from "./models/Task";
import type { Category, CategoryDto } from "./models/Category";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["Tasks", "Categories"],
    endpoints: (builder) => ({
        // ----- Tasks -----
        getTasks: builder.query<Task[], void>({
            query: () => "/tasks",
            providesTags: (result) =>
                result ? [
                    { type: "Tasks", id: "LIST" },
                    ...result.map((t) => ({ type: "Tasks" as const, id: t.id })),
                ] : [{ type: "Tasks", id: "LIST" }],
        }),

        createTask: builder.mutation<Task, CreateTaskDto>({
            query: (body) => ({
                url: "/tasks",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Tasks", id: "LIST" }],
        }),

        updateTask: builder.mutation<Task, { id: string; patch: UpdateTaskDto }>({
            query: ({ id, patch }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (_res, _err, { id }) => [
                { type: "Tasks", id },
                { type: "Tasks", id: "LIST" },
            ],
        }),

        deleteTask: builder.mutation<{ success: true }, string>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Tasks", id: "LIST" }],
        }),

        // ----- Categories -----
        getCategories: builder.query<Category[], void>({
            query: () => "/categories",
            providesTags: (result) =>
                result ? [
                    { type: "Categories", id: "LIST" },
                    ...result.map((c) => ({ type: "Categories" as const, id: c.id })),
                ] : [{ type: "Categories", id: "LIST" }],
        }),

        createCategory: builder.mutation<Category, CategoryDto>({
            query: (body) => ({
                url: "/categories",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Categories", id: "LIST" }],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useGetCategoriesQuery,
    useCreateCategoryMutation,
} = api;
