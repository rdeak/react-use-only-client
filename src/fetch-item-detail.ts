const ITEM_DETAILS = {
    1: {description: "Good first item"},
    2: {description: "Batter second item"},
} as const satisfies Record<number, ItemDetail>;

export type ItemDetail = {description: string};

export const fetchItemDetail = (id: number) => {
    const value: ItemDetail = id in ITEM_DETAILS ? ITEM_DETAILS[id as keyof typeof ITEM_DETAILS] : {description: "Not found"}

    return new Promise<ItemDetail>((resolve) => {
        setTimeout(() => resolve(value), id * 1000);
    })

}
