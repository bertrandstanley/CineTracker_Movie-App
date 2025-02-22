import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface for the JWT payload
interface JwtPayload {
  username: string;
}

// Middleware function to authenticate JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if authorization header is present
  if (authHeader) {
    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    // Get the secret key from the environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';

    // Verify JWT token
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Send forbidden status if token is invalid
      }

      req.user = user as JwtPayload; // Attach the user information to the request object
      return next(); // Call the next middleware function
    });
  } else {
    res.sendStatus(401); // Send unauthorized status if no authorization header is present
  }
};
