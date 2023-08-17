export class ModelNotFoundException extends Error {
	constructor(message: string) {
		super(`Model ${message} not found`)
		this.name = 'ModelNotFoundException'
	}
}