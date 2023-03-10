import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'off',
        isLogged: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return {
                ...state, isLogged: true, name: payload
            }
        },
        logout(state) {
            return { ...state, isLogged: false, name: 'off'}
        }
    }
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state: any) => state.name;

export default slice.reducer;