export interface Signup {
    username: string
    email: string
    phone: string
    password: string
}
export interface Login {
    email: string
    password: string

}
export interface Product {
    id: number
    category: string
    image: string
    price: string
    productname: string
}