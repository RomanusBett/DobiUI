export interface Item {
    id: number,
    mealName: string,
    mealPeriod: string,
    mealImage: string,
    subsidy: number, 
    price: number;
}

export interface ItemCardsProps {
    items: Item[]
}

export interface MealCurrentPeriods {
    sMealPeriods: string[];
}