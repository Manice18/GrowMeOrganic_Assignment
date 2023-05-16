import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import accessReducer from "./features/access.ts"
// import "./index.css"

const store = configureStore({
    reducer: {
        access: accessReducer,
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
        <Provider store={store}>
        <App />
        </Provider>
    
)
