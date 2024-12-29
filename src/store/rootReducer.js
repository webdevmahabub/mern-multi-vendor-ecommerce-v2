import authReducer from "../store/Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import productReducer from "./Reducers/productReducer";
import sellerReducer from "./Reducers/sellerReducer";
import OrderReducer from "./Reducers/OrderReducer";
import chatReducer from "./Reducers/chatReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    seller: sellerReducer,
    order: OrderReducer,
    chat: chatReducer
}
export default rootReducer;