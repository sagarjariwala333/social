import { body, param } from "express-validator";

export const updateUserBodyValidator = [

    param('id')
    .isEmpty()
    .withMessage('ID is required')
    .notEmpty()
    .withMessage('ID should not be empty'),

    body('firstName')
    .optional()
    .notEmpty()
    .withMessage('First Name is required')
    .isString()
    .withMessage('First Name must be string'),

    body('lastName')
    .optional()
    .notEmpty()
    .withMessage('Last Name is required')
    .isString()
    .withMessage('First Name must be string'),

    body('email')
    .optional()
    .notEmpty()
    .withMessage('Email is required')
    .isString()
    .withMessage('Email must be string')
    .isEmail()
    .withMessage('Email must be in valid format'),

    body('password')
    .optional()
    .notEmpty()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password must be string')
    .isEmail()
    .withMessage('Password must be in valid format')

]

export default updateUserBodyValidator

