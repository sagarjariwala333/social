import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'
import { ErrorHandle } from './error.utility'

const privateKey = fs.readFileSync('/app/keys/rsa.key', 'utf8').toString().trim()
const publicKey = fs.readFileSync('/app/keys/rsa.key.pub', 'utf8').toString().trim()

export const signToken = (id: string) => {
    try {
        return jwt.sign({ id }, privateKey, { algorithm: 'RS256' })
    } catch (error) {
        console.error(error)
        throw new ErrorHandle(500, error.message)
    }
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, publicKey, { algorithms: ['RS256'] })
    } catch (error) {
        throw Error(error)   
    }
}