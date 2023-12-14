import { UserService } from "../services/userService";
import { Request, Response } from "express";

export class UserController {

    private userService = new UserService()

    async index(req: Request, res: Response){
        try {
            const users = await this.userService.index()
            return res.status(200).json(users)
        } catch (error:any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response){ 
        try {
            const userData = req.body
            const {name} = await this.userService.create(userData);

            return res.status(201).json({message: `Usuário  ${name} cadastrado com sucesso`});
            
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }  
    }

    async update(req: Request, res: Response) {
        const id = req.params.id
        const userData = req.body

        try {
            const userUpdate = await this.userService.update(Number(id), userData)

                userUpdate && res.status(200).json({message: `Usuário alterado com sucesso`})
                !userUpdate && res.status(404).json({message: "Usuario não encontrado"})
            }catch (error:any) {
                return res.status(500).json({error: error.message})
            }
        }

    async delete(req: Request, res: Response){
        const id = req.params.id
        try {       
            const userDeleted = await this.userService.delete(Number(id))

            userDeleted && res.status(200).json({message: "Usuário deletado com sucesso"})
            !userDeleted && res.status(404).json({message: "Usuario não encontrado"})

        } catch (error:any) {
            return res.status(500).json({error: error.message})
        }     
    }
}