import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
	// verificar se o usuario é admin

	const admin = true;

	// next() para seguir o resto do fluxo
	if (admin) {
		return next();
	}

	// 401 - Unauthorized
	return res.status(401).json({ error: "User is not authorized", });
}
