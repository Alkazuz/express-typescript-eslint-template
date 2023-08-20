// express.d.ts
declare namespace Express {
    export interface Request {
        validatedData?: object;
    }
}