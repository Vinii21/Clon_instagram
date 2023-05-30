import { configureStore } from '@reduxjs/toolkit'
import showModal from "./slice/showModal.slice"

export default configureStore({
  reducer: {
    showModal
	}
})