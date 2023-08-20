import { Request } from "express";
import Validator from "validatorjs";

export default class RuleValidator {
    protected request: Request;
    protected rules: Validator.Rules;
    protected errors: object = {};
    protected validation: object = {};
    protected messages?: Validator.ErrorMessages

    constructor(request: Request, rules: Validator.Rules, messages?: Validator.ErrorMessages) {
        this.request = request;
        this.rules = rules;
        this.messages = messages;
        this.process();
    }

    public process() {
        const data = { ...this.request.body, ...this.request.params, ...this.request.query };
        const validation = new Validator(data, this.rules, this.messages);

        if (validation.fails()) {
            this.errors = validation.errors.all();
        }
        const validated = {};
        Object.keys(this.rules).forEach((key) => {
            if (data[key] && this.rules[key]) {
                Object.assign(validated, { [key]: data[key] });
            }
        });

        this.validation = validated;
    }

    public getErrors() {
        return this.errors;
    }

    public failed() {
        return Object.keys(this.errors).length > 0;
    }

    public validated() {
        return this.validation;
    }
}