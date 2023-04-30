import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { Api } from '../../util/Api';
import { urlApi } from '../../util/GlobalVar';

const initState = {
  loading: false,
  username: '',
  password: '',
  deviceId: '',
  status: 0,
  failOpen: false,
};

const loginFetch = createAsyncThunk('fetchLogin', async (arg) => {
  const { user, pass } = arg;
  console.log('====================================');
  console.log(arg);
  console.log(user);
  console.log(pass);
  console.log('====================================');
  const form = new FormData();
  form.append('username', user);
  form.append('password', pass);
  const dataRes = (await Api.post(urlApi, form)).data;
  console.log(dataRes);
  return dataRes;
});
const LoginState = createSlice({
  name: 'loginState',
  initialState: initState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFailOpen: (state, action) => {
      state.failOpen = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDeviceId: (state, action) => {
      state.deviceId = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        // let message = action.payload.metadata.message;
        // let status = action.payload.metadata.status;
        // let dataRes = action.payload.metadata.response;
        console.log(action.payload);

        // if (status === 200) {
        //   console.log(dataRes);
        // }
      })
      .addCase(loginFetch.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUsername, setPassword, setLoading, setDeviceId, setStatus, setFailOpen } =
  LoginState.actions;
export { loginFetch };
export default LoginState.reducer;
