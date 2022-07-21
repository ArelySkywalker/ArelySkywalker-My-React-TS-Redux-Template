import { createSlice } from '@reduxjs/toolkit';

export type GenericState<T> = {
    data?: T;
    loading: LoadingStates;
    error?: Error;
};

export type Error = {
    message: string;
    status?: number;
};

export type LoadingStates = 'idle' | 'loading' | 'succeeded' | 'error';

const initialState: GenericState<any> = {
    loading: "idle",
} 

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {},
    extraReducers: builder => {

    },
});

const { reducer, actions } = exampleSlice;
// export const { reducerActions } = actions;
export default exampleSlice;
