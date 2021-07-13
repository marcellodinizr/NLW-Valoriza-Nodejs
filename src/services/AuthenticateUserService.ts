import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepositories = getCustomRepository(UsersRepositories);

		// Verificar se o email existe
		const user = await usersRepositories.findOne({ email });

		if (!user) {
			throw new Error("Email/Password incorrect");
		}

		// Verificar se a senha está correta
		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error("Email/Password incorrect");
		}

		// Gerar Token
		const token = sign(
			{
				email: user.email,
			},
			"c11fd942d7cabaa55c6cd9a88910175e",
			{
				subject: user.id,
				expiresIn: "1d",
			}
		);
		return token;
	}
}

export { AuthenticateUserService };
