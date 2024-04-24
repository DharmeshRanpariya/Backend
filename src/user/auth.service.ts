import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async signin(email: string, password: string){
        const [user] = await this.userService.find(email);
        if(!user){
            throw new NotFoundException("user is not found")
        }
        if(password !== user.password){
            throw new BadRequestException('bed password')
        } 
        const token = jwt.sign({ userId: user.id, userEmail: user.email }, 'your_secret_key', { expiresIn: '1h' });
        return { user, token };
    }
}