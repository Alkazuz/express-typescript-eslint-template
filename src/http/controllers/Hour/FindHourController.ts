import { Response, Request } from 'express'
import Controller from '../Controller'
import dayjs from 'dayjs'

export default class FindHourController extends Controller {
	handle(_: Request, res: Response) {
		const formattedHour = dayjs().format('HH:mm:ss')
		return this.sendResponse(res, `Agora são ${formattedHour}`)
	}
}