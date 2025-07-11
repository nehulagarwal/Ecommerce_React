import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import productsData from "../data/product.json"; // ✅ Ensure correct file name and path

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ✅ Load products from local JSON file
  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      const products = productsData;

      dispatch({ type: "SET_API_DATA", payload: products });

      const featured = products.filter((item) => item.featured === true);
      dispatch({ type: "SET_FEATURE_PRODUCTS", payload: featured });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error("Failed to load products from local file:", error);
    }
  };

  // ✅ Find single product by ID
  const getSingleProduct = async (id) => {
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const product = productsData.find((p) => p.id === id);
    if (product) {
      const finalProduct = {
        ...product,
        image: [{ url: product.image }],
        stars: 4.5,
        reviews: 200,
        stock: 10,
      };
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: finalProduct });
    } else {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
};


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
