import {
  isError,
  isFetching,
  success,
} from "../redux/productsSlice/productsSlice";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch(isFetching());
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(success(data));
  } catch (error) {
    dispatch(isError());
  }
};
