import { prismaClient } from "../configs/prismaConfig";

type userProps = {
    name: string,
    email: string
    senha: string
}

export class UserService{

    async index(){
        try {
            const users = await prismaClient.user.findMany()
            return users
            
        } catch (error) {
            throw new Error('Nenhum usuario encontrado')
        }
    }

    async create(userData: userProps) {
        try {
            const {name, email, senha} = userData

            const newUser = await prismaClient.user.create({
                data:{
                    name,
                    email,
                    senha
                }
            })

            return newUser
        } catch (error) {
            throw new Error('Usuario não cadastrado')
        }
    }

    async update(idUser: number, dataUser:userProps){
       const {name, email, senha} = dataUser
        try {
            const userUpdate = await prismaClient.user.update({
                where:{
                    id: idUser
                },
                data: {
                    name,
                    email,
                    senha
                }
            })

            return userUpdate
        } catch (error) {
            throw new Error('Usuario não encontrado')
        }
    }


    async delete(idUser: number){
        try{
            const user = await prismaClient.user.delete({
                where:{
                    id: idUser
                }
            })
            return user
        }catch (error){
            throw new Error('Usuario não encontrado')
        }
    }
}