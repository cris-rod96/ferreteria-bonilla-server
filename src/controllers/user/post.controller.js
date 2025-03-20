import { request, response } from 'express'
import { userService } from '../../services/index.services.js'

const registerUser = async (req = request, res = response) => {
  try {
    const data = req.body
    const { code, message } = await userService.registerUser(data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}
const registerUserWithGoogle = async (req = request, res = response) => {
  try {
    const data = req.body
    const { code, message } = await userService.registerUserWithGoogle(data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}

export { registerUser, registerUserWithGoogle }
