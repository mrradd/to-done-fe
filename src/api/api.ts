import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { Task } from "../models/Task";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    endpoints: (build) => ({
        taskList: build.query<Array<Task>, void>({
            query: () => {
                return {
                    url: "tasks",
                    method: "GET",
                };
            },
        }),

        taskDetail: build.query<Task, { id: string }>({
            query: ({ id }) => {
                return {
                    url: `tasks/${id}`,
                    method: "GET"
                }
            },
        }),
    }),
});