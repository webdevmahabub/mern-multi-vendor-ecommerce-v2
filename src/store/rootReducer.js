import authReducer from "../store/Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import productReducer from "./Reducers/productReducer";
import sellerReducer from "./Reducers/sellerReducer";
import OrderReducer from "./Reducers/OrderReducer";
import chatReducer from "./Reducers/chatReducer";
import bannerReducer from "./Reducers/bannerReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    seller: sellerReducer,
    order: OrderReducer,
    chat: chatReducer,
    banner: bannerReducer
}
export default rootReducer;