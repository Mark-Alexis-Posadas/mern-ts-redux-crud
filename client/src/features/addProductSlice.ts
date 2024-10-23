import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormTypes {
  name: string;
  description: string;
  price: string;
  category: string;
  stock: string;
  image: string;
}

interface State {
  formValues: FormTypes;
  isEditing: boolean;
}

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
};

export const addProductSlice = createSlice({
  name: "addProductSlice",
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
  },
});

export const { handleFormValues, handleEdit } = addProductSlice.actions;
export default addProductSlice.reducer;
