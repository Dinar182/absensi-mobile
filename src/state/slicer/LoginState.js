import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { Api } from '../../util/Api';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import { SessionManager } from '../../util/SessionManager';
import { MessageUtil } from '../../util/MessageUtil';
import DeviceInfo from 'react-native-device-info';

const initState = {
  loading: false,
  username: '',
  password: '',
  deviceId: '',
  status: 0,
  failOpen: false,
  loginSuccess: false,
  logoutSuccess: false,
  passwordLama: '',
  passwordBaru: '',
  konfirmBaru: '',
  stateChangePass: false,
};

const loginFetch = createAsyncThunk('fetchLogin', async (arg) => {
  const { user, pass } = arg;
  console.log('====================================');
  console.log(arg);
  console.log(user);
  console.log(pass);
  console.log('====================================');
  const device_id = DeviceInfo.getDeviceId();
  const form = new FormData();
  form.append('username', user);
  form.append('password', pass);
  form.append('device_id', device_id);

  const dataRes = await fetch(`${urlBase}${urlApi.login}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: form,
  });
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const logoutFetch = createAsyncThunk('fetchLogout', async (arg) => {
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);

  const dataRes = await fetch(`${urlBase}${urlApi.logout}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const changePassFetch = createAsyncThunk('fetchChangePass', async (arg) => {
  const { oldPass, newPass } = arg;
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  form.append('password_lama', oldPass);
  form.append('password_baru', newPass);
  const dataRes = await fetch(`${urlBase}${urlApi.ganti_password}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
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
    setLoginSuccess: (state, action) => {
      state.loginSuccess = action.payload;
    },
    setLogoutSuccess: (state, action) => {
      state.logoutSuccess = action.payload;
    },
    setStateChangePass: (state, action) => {
      state.stateChangePass = action.payload;
    },
    setOldPass: (state, action) => {
      state.passwordLama = action.payload;
    },
    setNewPass: (state, action) => {
      state.passwordBaru = action.payload;
    },
    setKonfirmPass: (state, action) => {
      state.konfirmBaru = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let dataRes = action.payload.response;
        console.log(message);

        if (status === 200) {
          SessionManager.StoreAsObject(textApp.session, {
            nip: dataRes.karyawan.nip,
            token: dataRes.token,
          });
          state.username = '';
          state.password = '';
          state.loginSuccess = true;
          MessageUtil.showSuccess('Berhasil', message);
        } else if (status === 400) {
          state.loginSuccess = false;
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
        state.loginSuccess = false;
        MessageUtil.errorMessage('Gagal', action.error.message);
      })
      .addCase(logoutFetch.pending, (state) => {})
      .addCase(logoutFetch.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        console.log(message);
        if (status === 200) {
          SessionManager.ClearAllKeys();
          SessionManager.RemoveValue(textApp.session);
          state.logoutSuccess = true;
          MessageUtil.showSuccess('Berhasil', message);
        } else if (status === 400) {
          state.logoutSuccess = false;
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(logoutFetch.rejected, (state, action) => {
        state.logoutSuccess = false;
        MessageUtil.errorMessage('Gagal', action.error.message);
      })
      .addCase(changePassFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassFetch.fulfilled, (state, action) => {
        state.loading = false;
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        if (status === 200) {
          state.stateChangePass = true;
          MessageUtil.showSuccess('Berhasil', message);
        } else if (status === 400) {
          state.stateChangePass = false;
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(changePassFetch.rejected, (state, action) => {
        state.stateChangePass = false;
        MessageUtil.errorMessage('Gagal', action.error.message);
      });
  },
});

export const {
  setUsername,
  setPassword,
  setLoading,
  setDeviceId,
  setStatus,
  setFailOpen,
  setLoginSuccess,
  setLogoutSuccess,
  setKonfirmPass,
  setNewPass,
  setOldPass,
  setStateChangePass,
} = LoginState.actions;
export { loginFetch, logoutFetch, changePassFetch };
export default LoginState.reducer;
