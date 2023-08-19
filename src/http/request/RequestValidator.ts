import { NextFunction, Request, Response } from "express";
import RuleValidator from "../rules/RuleValidator";

export default class RequestValidator {

    protected rules() {
        return {};
    }

    protected messages() {
        return {};
    }

    public validation(request: Request, response: Response, next: NextFunction) {
        const ruleValidator = new RuleValidator(request, this.rules(), this.messages());

        if (ruleValidator.failed()) {
            return response.status(422).json({
                message: 'The given data was invalid.',
                errors: ruleValidator.getErrors()
            });
        }
        // request['validated'] = ruleValidator.validated();
        next();
    }
}