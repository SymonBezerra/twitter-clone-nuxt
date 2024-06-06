import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { findUserById } from "../db/users";
import { sendError, createError } from 'h3';

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user',
        '/api/auth/refresh'
    ];

    const isHandledBy = endpoints.some((endpoint) => {
        const pattern = new UrlPattern(endpoint);
        const match = pattern.match(event.node.req.url);
        if (match) {
            console.log(`Matched endpoint: ${endpoint}`);
        }
        return match;
    });

    if (!isHandledBy) {
        console.log(`URL ${event.node.req.url} is not handled by auth middleware`);
        return;
    }

    const header = event.node.req.headers;
    console.log(JSON.stringify(header))
    const authHeader = header.authorization;
    if (!authHeader) {
        console.log('No authorization header found');
        return sendError(event, createError({
            statusMessage: "Unauthorized",
            statusCode: 401
        }));
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        console.log('No token found in authorization header');
        return sendError(event, createError({
            statusMessage: "Unauthorized",
            statusCode: 401
        }));
    }

    const decodedToken = decodeAccessToken(token);
    if (!decodedToken) {
        console.log('Token decoding failed');
        return sendError(event, createError({
            statusMessage: "Unauthorized",
            statusCode: 401
        }));
    }

    try {
        const userId = decodedToken.userId;
        const user = await findUserById(userId);
        if (!user) {
            console.log(`User not found for ID: ${userId}`);
            return sendError(event, createError({
                statusMessage: "User not found",
                statusCode: 404
            }));
        }
        // Set user data in event.context.auth
        event.context.params = { user };
        console.log('User authenticated:', user);
    } catch (error) {
        console.log(`Error during user retrieval: ${error.message}`);
        return sendError(event, createError({
            statusMessage: "Internal Server Error",
            statusCode: 500
        }));
    }
});
