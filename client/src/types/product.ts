export interface FormTypes {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

export interface State {
  formValues: FormTypes;
  isEditing: boolean;
  isConfirmDelete: boolean;
  itemId: any;
}
