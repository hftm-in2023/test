import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function ping(req, context) {
  context.log('Ping received');
  return { body: 'pong' };
}

app.http('ping', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: ping
});
