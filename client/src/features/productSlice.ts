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
  itemId: null,
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

    handleCancel: (state) => {
      state.itemId = null;
      state.formValues = initialState.formValues;
      state.isEditing = false;
    },

    handleSetItemId: (state, action: PayloadAction<string | null>) => {
      state.itemId = action.payload;
    },

    handleSubmit: (state) => {
      state.formValues = initialState.formValues;
    },

    handleToggleDelete: (state, action) => {
      state.isConfirmDelete = true;
      state.itemId = action.payload;
    },

    handleToggleCancelDelete: (state) => {
      state.isConfirmDelete = false;
    },

    handleProceedDelete: (state) => {
      state.isConfirmDelete = false;
    },
  },
});

export const {
  handleFormValues,
  handleEdit,
  handleCancel,
  handleToggleDelete,
  handleToggleCancelDelete,
  handleProceedDelete,
  handleSubmit,
  handleSetItemId,
} = productSlice.actions;
export default productSlice.reducer;
