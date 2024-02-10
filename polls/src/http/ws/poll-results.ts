import { FastifyInstance } from "fastify";
import { request } from "http";
import { z } from "zod";

export async function pollResults(app: FastiFyInstance) {
	app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
		const getPollParams = z.object({
			pollId: z.string().ulid(),
		})

		const {  pollId } = getPollParams.parse(request.params);

		voting.subscribe(pollId, (message) => {
			connection.socket.send(JSON.stringify(message))
		})
	})
}