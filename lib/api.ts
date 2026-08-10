import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Har bir so'rovga token'ni qo'shib yuborish
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('ichat_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 401 kelsa — tokenni tozalab, login sahifasiga qaytarish
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('ichat_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface RegisterPayload {
  username: string;
  phone: string;
  password: string;
}

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    phone: string;
  };
}

export async function registerUser(payload: RegisterPayload) {
  const { data } = await api.post<AuthResponse>('/auth/register', payload);
  return data;
}

export async function loginUser(payload: LoginPayload) {
  const { data } = await api.post<AuthResponse>('/auth/login', payload);
  return data;
}

export async function googleAuth(idToken: string) {
  const { data } = await api.post<AuthResponse>('/auth/google', { idToken });
  return data;
}
