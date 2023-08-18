export default class NumberFormatException extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'NumberFormatException';
	}
}
