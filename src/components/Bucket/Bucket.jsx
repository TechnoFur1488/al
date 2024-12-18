import { remove } from "../../routes/Product/productSlice";
import s from "./Bucket.module.css"
import { useDispatch, useSelector } from "react-redux";

export const Bucket = () => {
    const products  = useSelector((s) => s.product?.value || [])
    const disp = useDispatch()

    return (
        <div className={s.container}>
            {products.map( product => {
                return (
                    <div>
                        <img src={product.img} alt="" />
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                        <button onClick={() => disp(remove(product.id))}>Удалить</button>
                    </div>
                )
            })}
        </div>
    )
};

