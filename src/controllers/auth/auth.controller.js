import { request, response } from 'express'
import { authService } from '../../services/index.services.js'

const loginWithGoogle = async (req = request, res = response) => {
  try {
    const { sub } = req.body
    const { code, message, user } = await authService.loginWithGoogle(sub)
    res.status(code).json(user ? { user } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}
const loginWithCredentials = async (req = request, res = response) => {
  try {
    const { email, password } = req.body
    const { code, message, user } = await authService.loginWithCredentials(
      email,
      password
    )
    res.status(code).json(user ? { user } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export default {
  loginWithGoogle,
  loginWithCredentials,
}
