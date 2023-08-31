export interface CartItem {

}
export interface CartContextType{
    items: CartItem[],
    totalPrice: number,
    addItem: (item: CartItem)=>void,
    subsidy: number,
    removeItem: (key:string)=>void,
    clearCart: ()=>void
}