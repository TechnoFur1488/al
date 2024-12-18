import { useDispatch } from "react-redux";
import s from "./All.module.css"
import { add } from "../../../../routes/Product/productSlice";

const products = [
    {
        id: 1,
        img: "/images/ca500dce695056c8fd4aa82905d1099e 1.png",
        name: "Крем увлажняющий для лица",
        price: "575 р"
    },
    {
        id: 2,
        img: "/images/f4f978dfd23442e706acc89a276fd61a 1.png",
        name: "Гель для умывания",
        price: "1700 р"
    },
    {
        id: 3,
        img: "/images/0e640e1456e536ecd4e32be115690d8f 1.png",
        name: "Масло гидрофильное",
        price: "2100 р"
    },
    {
        id: 4,
        img: "/images/af1f87528f9f8ab6f064ac1389dc3637 1.png",
        name: "Эмульсия для проблемной кожи",
        price: "1200 р"
    },
    {
        id: 5,
        img: "/images/aef24a5917e0678947b672efbc44b588 1 (1).png",
        name: "Гель для умывания",
        price: "900 р"
    },
    {
        id: 6,
        img: "/images/f65569e52206eb9b81df6283cea5a270 1.png",
        name: "Сыворотка для лица",
        price: "700"
    }
]

export const All = () => {

    const disp = useDispatch()



    return (
        <div className={s.container}>
            {products.map(product => {
                const handleAdd = () => {
                    disp(add({
                        img: product.img,
                        name: product.name,
                        price: product.price
                    }))
                    alert("Товар добавлен в корзину")
                }
                return (
                    <div className={s.contanerProduct} key={product.id}>
                        <div className={s.productImg}>
                            <div className={s.btnDiv}>
                                <button className={s.btnLikeBucket}><img src="/images/Vector (4).svg" alt="" /></button>
                                <button onClick={() => handleAdd()} className={s.btnLikeBucket}><img src="/images/Vector (5).svg" alt="" /></button>
                            </div>
                            <img src={product.img} alt="" />
                        </div>
                        <div className={s.spanDiv}>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
