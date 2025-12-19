export interface Category {
    id: string | undefined; //UUID. This will be undefined if it is a new Category that hasn't been saved.
    label: string;
}