import { Request, Response } from 'express'
import Controller from '../Controller'
import NumberFormatException from '../../../exceptions/NumberFormatException'

export default class FindSumController extends Controller {
	handle(req: Request, res: Response) {
		const { v1, v2 } = req.body
		const number1 = Number(v1)
		const number2 = Number(v2)

		if (isNaN(number1)) {
			throw new NumberFormatException(`${number1} is not a number`)
		}

		if (isNaN(number2)) {
			throw new NumberFormatException(`${number2} is not a number`)
		}

		return this.sendResponse(res, { sum: number1 + number2 })
	}
}