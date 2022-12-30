import { legacy_createStore as createStore } from "redux";
import CountReducer from "../Reducer/CountReducer";

const countStore = createStore(CountReducer);
export default countStore;
