import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_customers = createAsyncThunk(
    'chat/get_customers',
    async (sellerId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/chat/seller/get-customers/${sellerId}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const chatReducer = createSlice({
    name: 'chat',
    initialState: {
        successMessage: '',
        errorMessage: '',
        customers: [],
        messages: [],
        activeCustomer: [],
        activeSeller: [],
        activeAdmin: "",
        friends: [],
        seller_admin_message: [],
        currentSeller: {},
        currentCustomer: {},
        sellers: [],
        loading: false,
        error: null
    },
    reducers: {
        messageClear: (state) => {
            state.errorMessage = ""
            state.successMessage = ""
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_customers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(get_customers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.customers = payload.customers
                state.error = null
            })
            .addCase(get_customers.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload?.error || 'Failed to fetch customers'
            })
    }
})

export const { messageClear } = chatReducer.actions
export default chatReducer.reducer