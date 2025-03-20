import { User } from '../../database/database.js'
import { validatorsHelper } from '../../helpers/index.helpers.js'

const existUserByEmail = async (email) => {
  const isValid = validatorsHelper.validEmail(email)
  if (!isValid) return { ok: false, message: 'Email no válido' }

  const user = await User.findOne({
    where: {
      email,
    },
  })

  if (user) return { ok: false, message: 'Email no disponible' }

  return { ok: true }
}
const existUserByPhone = async (phone) => {
  const user = await User.findOne({
    where: {
      phone,
    },
  })

  if (user) return { ok: false, message: 'Teléfono no disponible' }
  return { ok: true }
}
const existUserByDni = async (dni) => {
  const user = await User.findOne({
    where: {
      dni,
    },
  })

  if (user) return { ok: false, message: 'Cédula no disponible' }
  return { ok: true }
}

const existUserBySub = async (sub) => {
  const user = await User.findOne({
    where: {
      sub,
    },
  })

  if (user)
    return { ok: false, message: 'El usuario ya se encuentra registrado.' }

  return { ok: true }
}

const registerUser = async (data) => {
  const { email, dni, phone } = data
  const { ok, message } = await existUserByEmail(email)
  if (!ok) return { code: 400, message }

  if (phone) {
    const { ok, message } = await existUserByPhone(phone)
    if (!ok) return { code: 400, message }
  }

  if (dni) {
    const { ok, message } = await existUserByDni(dni)
    if (!ok) return { code: 400, message }
  }

  const user = await User.create(data)

  return user
    ? { code: 201, message: 'Usuario registrado con éxito' }
    : { code: 400, message: 'Error al registrar. Intente más tarde.' }
}

const registerUserWithGoogle = async (data) => {
  const { sub } = data
  const { ok, message } = await existUserBySub(sub)

  if (!ok) return { code: 400, message }

  const user = await User.create(data)
  return user
    ? { code: 201, message: 'Usuario registrado con éxito' }
    : { code: 400, message: 'Error al registrar. Intente más tarde.' }
}

export { registerUser, registerUserWithGoogle }
