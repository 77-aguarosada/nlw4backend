import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRespository } from '../repositories/UsersRepository';



class UserController{

    async create(request:Request, response:Response){
        const {name, email} = request.body;
   
        const usersRepository = getCustomRepository(UserRespository);

        const userAlreadyExists = await usersRepository.findOne({
            email,
        })

        if(userAlreadyExists){
            return response.status(400).json({
                error: "User already exits",
            })
        }

        const  user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user)

        return response.send(user);

    }

}

export { UserController };
