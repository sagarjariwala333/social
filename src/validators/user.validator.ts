import { body } from "express-validator";

export const userBodyValidator = [
    body('firstName')
    .notEmpty()
    .withMessage('First Name is required')
    .isString()
    .withMessage('First Name must be string'),

    body('lastName')
    .notEmpty()
    .withMessage('Last Name is required')
    .isString()
    .withMessage('First Name must be string'),

    body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isString()
    .withMessage('Email must be string')
    .isEmail()
    .withMessage('Email must be in valid format'),

    body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password must be string')

]

export default userBodyValidator