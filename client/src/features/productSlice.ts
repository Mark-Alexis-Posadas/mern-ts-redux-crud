import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FormTypes, State } from "../types/product";
const initialState: State = {
  formValues: {
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  },
  isEditing: false,
  isConfirmDelete: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    handleFormValues: (
      state,
      action: PayloadAction<{ name: keyof FormTypes; value: string }>
    ) => {
      state.formValues[action.payload.name] = action.payload.value;
    },

    handleEdit: (state) => {
      state.isEditing = true;
    },

    handleSubmit: (state) => {
      state.formValues = initialState.formValues;
    },

    handleToggleDelete: (state) => {
      state.isConfirmDelete = true;
    },

    handleToggleCancelDelete: (state) => {
      state.isConfirmDelete = false;
    },
  },
});

export const {
  handleFormValues,
  handleEdit,
  handleToggleDelete,
  handleToggleCancelDelete,
  handleSubmit,
} = productSlice.actions;
export default productSlice.reducer;
