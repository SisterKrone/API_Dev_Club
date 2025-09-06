import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();
const router = express.Router();


router.post('/cadastro', async (req, res) => {
    const user = req.body;
    const salt =

    try {
        await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password
            }
        })
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ message: "Erro no servidor, tente novamente." })
    }
});

export default router;