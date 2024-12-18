import { createSlice, nanoid } from "@reduxjs/toolkit"


let arr = JSON.parse(localStorage.getItem('product')) ?? { value: [], count: 1, like: false }

const productSlice = createSlice({
    name: 'product',
    initialState: arr,
    reducers: {
        add: (s, a) => {
            if (a.payload) {
                const { name, img, price, count } = a.payload

                s.value.push({
                    id: nanoid(),
                    name,
                    img,
                    price,
                    count
                })

                localStorage.setItem('product', JSON.stringify(s))
            }
        },
        inc: (s, a) => {
            const product = s.value.find((p) => p.id === a.payload)
            if (product) {
                product.count += 1
                localStorage.setItem('product', JSON.stringify(s))
            }
        },

        dec: (s, a) => {
            const product = s.value.find((p) => p.id == a.payload)
            if (product) {
                product.count -= 1
                localStorage.setItem('product', JSON.stringify(s))
            }
        },
        remove: (s, a) => {
            const productId = a.payload
            s.value = s.value.filter(product => product.id !== productId)
            localStorage.setItem('product', JSON.stringify(s))
        }
    }
})

export default productSlice.reducer

export const { add, inc, dec, remove } = productSlice.actions