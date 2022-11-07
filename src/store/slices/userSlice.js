import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItem = createAsyncThunk(
    'user/fetchItem',
    async function (token, { rejectWithValue }) {

        try {
            const response = await fetch('http://localhost:3000/tasks', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Server Error!..')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    token: null,
    task: [],
    status: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTask(state, action) {
            state.task = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload.accessToken;
        },
    },
    extraReducers: {
        [fetchItem.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchItem.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.task = action.payload;
        },
        [fetchItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export const { setTask, setToken } = userSlice.actions;
export default userSlice.reducer;