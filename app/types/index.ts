interface IAvailableSize {
    size: string,
    price: number
}

interface IImage {
    name: string,
    url: string,
    isDefault?: boolean
}

export interface IProduct {
    pid: string,
    name: string,
    categories: string[],
    availableSizes: IAvailableSize[]
    images: IImage[],
    isCustomizable: boolean
    defaultPrice: number
}