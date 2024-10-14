import axios from 'axios';

import { AuthenticationStore } from '@/store/auth/authentication.js'      
const BASE_API = import.meta.env.VITE_BASE_API
console.log(import.meta.env.MODE);

const apiClient = axios.create({
    baseURL: BASE_API, // Cambia por la URL base de tu API
    // timeout: 10000, // Tiempo de espera en milisegundos (configurarlo solo si es necesario)
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Agrega interceptores para manejar errores y autenticación
apiClient.interceptors.request.use((config) => {    
    const { access_token } = AuthenticationStore()
    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`
    }
    return config
})

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                // Redirect to login page
                router.push('/login')
            } else {
                // Show a generic error message
                alert('An error occurred. Please try again later.')
            }
        }
        return Promise.reject(error)
    },
);


export default apiClient;