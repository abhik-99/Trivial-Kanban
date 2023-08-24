import jwt from "jsonwebtoken";

export const signJwt = async (payload: any, expiresIn = "1d") => {
  const token = await jwt.sign(payload, process.env.APP_JWT_SECRET, {
    algorithm: "HS512",
    expiresIn,
  });
  return token;
};

export const verifyJwt = (token: string) => {
  const data = jwt.verify(token, process.env.APP_JWT_SECRET, {
    algorithms: ["HS512"],
  });
  return data
};
