import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/index.js';

// Create a new router instance
const router = Router();

// login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  // Extract username and password from request body
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username, password);

  try {
    // Find user in the database by username
    const user = await User.findOne({ where: { username } });

    // If user is not found, send response
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare provided password with the stored hashed password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      // If invalid, send response
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Get secret key from .env
    const secretKey = process.env.JWT_SECRET_KEY || '';
    // Generate JWT token for the authenticated user
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1d' });

    // Return the token and the user's ID
    return res.json({ token, userID: user.id });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: 'Internal server error during login' });
  }
};

// signUp function to register a new user
export const signUp = async (req: Request, res: Response) => {
  try {
    // Extract username, email and password from request body
    const { username, email, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database with provided details
    const newUser = await User.create({ username, email, password: hashedPassword });

    // Get secret key from .env
    const secretKey = process.env.JWT_SECRET_KEY || '';
    // Generate JWT token for the authenticated user
    const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1d' });

    // Return the token and the newly created user's ID
    res.json({ token, userID: newUser.id });
  } catch (error: any) {
    console.error("Error during signup:", error);
    res.status(400).json({ message: 'User could not be created' });
  }
};

// POST /login - Login a user
router.post('/login', login);

// POST /signup - Signup a new user
router.post('/signup', signUp);

export default router; // Export the router instance
