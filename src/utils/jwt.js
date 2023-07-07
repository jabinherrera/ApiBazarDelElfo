import jsonwebtoken from "jsonwebtoken";
import enviroment from "../configs/enviroments.js";

const { SECRET } = enviroment;

export function generateToken(user) {
	const { _id, email } = user;
	return jsonwebtoken.sign({ id: _id, email }, SECRET, {
		expiresIn: "15m",
	});
}

export function verifyToken(token) {
	return jsonwebtoken.verify(token, SECRET);
}