export interface Category {
    id?: string; //UUID. This will be undefined if it is a new Category that hasn't been saved.
    name: string;
}

export type CreateCategoryDto = Omit<Category, "id">;