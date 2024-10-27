export interface FormTypes {
  name: string;
  description: string;
  price: string;
  category: string;
  stock: string;
  image: string;
}

export interface State {
  formValues: FormTypes;
  isEditing: boolean;
  isConfirmDelete: boolean;
  itemId: any;
}
