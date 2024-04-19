import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const startNewInterview = createAsyncThunk(
    "user/startNewInterview",
    async (payload) => {
        const response = await axios.post(`http://localhost:4000/interview`, payload);
        return response.data;
    }
);

export const askNextQuestion = createAsyncThunk(
    "/Nextquestion", 
    async (payload) => {

        const response = await axios.post(`http://localhost:4000/interview`, payload);
        console.log(response.data);
        return response.data;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        thread_id: null,
        assistant_id: null,
        creationTime: null,
        message: "hello",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(startNewInterview.fulfilled, (state, action) => {
            const data = action.payload;
            state.thread_id = data.thread_id;
            state.assistant_id = data.assistant_id;
            state.creationTime = data.creationTime;
            state.message = data.message;
        })
        .addCase(askNextQuestion.fulfilled, (state, action) => {
            const data = action.payload;
            // Update state with data from askNextQuestion
            state.message = data.message;
            // Modify state properties as needed
        });
    },
});

export default userSlice.reducer;