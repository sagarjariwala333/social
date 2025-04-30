import userService from "./user.service"

class AuthService {
    login = async (email: string, password: string) => {
        const user = await userService.getUserByEmail(email)
        
    }
}