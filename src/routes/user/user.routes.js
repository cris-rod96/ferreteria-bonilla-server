import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'

const userRouter = Router()

userRouter.post('/', userController.registerUser)
userRouter.post('/with-google', userController.registerUserWithGoogle)

export default userRouter
