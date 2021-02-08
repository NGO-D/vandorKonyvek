export interface Product {
    id: string,
    title: string,
    description: string,
    status: ProductStatus
}

export enum ProductStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}