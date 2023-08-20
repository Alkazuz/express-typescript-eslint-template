/* eslint-disable @typescript-eslint/ban-ts-comment */
import RequestValidator from "../RequestValidator";

export default class PaginatedUserRequest extends RequestValidator {

    constructor() {
        super();
        this.validation = this.validation.bind(this);
    }

    protected rules() {
        return {
            page: 'integer|min:1',
            per_page: 'integer|min:1',
            limit: 'integer|min:1'
        };
    }

    protected messages() {
        return {
            'page.integer': 'The page must be an integer.',
            'page.min': 'The page must be at least 1.',
            'per_page.integer': 'The per_page must be an integer.',
            'per_page.min': 'The per_page must be at least 1.',
            'limit.integer': 'The limit must be an integer.',
            'limit.min': 'The limit must be at least 1.'
        };
    }
}