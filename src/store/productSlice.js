import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form: {
    id: '',
    nome: '',
    categoria: '',
    unidade: '',
    peso: '',
    dimensoes: '',
    volume: '',
    recipiente: '',
    preco: '',
  },
  items: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload
      state.form[field] = value
    },

    addProduct: (state) => {
      state.items.push({ ...state.form })
    },

    clearForm: (state) => {
      state.form = initialState.form
    },
  },
})

export const {
  updateField,
  addProduct,
  clearForm,
} = productSlice.actions

export default productSlice.reducer