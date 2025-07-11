const ProductReducer = (state, action) => {
  switch (action.type) {
    // Loading state for all products
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    // API data successfully fetched
    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => curElem.featured === true);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    // API error
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Loading state for single product
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    // Single product fetched
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    // Error while fetching single product
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,   // was incorrectly using `isLoading` before
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
