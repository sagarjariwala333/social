import bcrypt from 'bcrypt'

export const getHashPassword = async (password: string) => {

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        return hashPassword
    } catch (error) {
        console.error('Error while hashing password', error)        
    }
}

export const compareHashPassword = async (passowrd: string, hashPassword: string) => {
    try {
        const result = await bcrypt.compare(passowrd, hashPassword)
        if (result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error while comparing passwords', error)
        throw new Error(error.message)
    }
}