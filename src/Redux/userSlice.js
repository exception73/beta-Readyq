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
        return response.data;
    }
)

export const registerUserAction = createAsyncThunk(
    '/user/register', 
    async(payload) => {
        console.log(payload)
        const response = await axios.post(`http://localhost:4000/user/create`, payload);
        return response.data;
    }
)


export const loginUserAction = createAsyncThunk(
    '/user/login', 
    async(payload) => {
        console.log(payload)
        const response = await axios.post(`http://localhost:4000/user/login`, payload);
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
        message1 :null,
        userToken: null,
        passcode : [],
        interviewTime : null,
        completed: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(startNewInterview.fulfilled, (state, action) => {
            const data = action.payload;
            state.thread_id = data.thread_id;
            state.assistant_id = data.assistant_id;
            state.creationTime = data.creationTime;
            state.interviewTime = data.interviewTime;
            state.message = data.message;
            state.completed = data.completed;
        })
        .addCase(askNextQuestion.fulfilled, (state, action) => {
            const data = action.payload;
            // Update state with data from askNextQuestion
            state.message = data.message;
            state.message1 = data.message1;
            state.completed = data.completed;
            console.log(data)
        
            // Modify state properties as needed
        })
        .addCase(registerUserAction.fulfilled, (state, action) => {
            const data = action.payload;
            console.log(data);
            state.passcode = data?.user?.pass_codes;
            state.userToken = data?.user?.token;
            console.log(state.userToken)

            console.log(data);

        })
        .addCase(loginUserAction.fulfilled, (state, action) => {
            const data = action.payload;
            state.passcode = data?.user?.pass_codes;
            state.userToken = data?.user?.token;
            console.log(state.userToken)
        })
    },
});

export default userSlice.reducer;