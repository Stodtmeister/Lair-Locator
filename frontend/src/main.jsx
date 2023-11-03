import React from 'react'
import ReactDOM from 'react-dom/client'
import { default as store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { restoreCSRF, csrfFetch } from './store/csrf'

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF()

  window.csrfFetch = csrfFetch
  window.store = store
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
