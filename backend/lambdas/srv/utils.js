export function buildCallback(statusCode = 201, body = {}) {
    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        }
    };
}
//# sourceMappingURL=utils.js.map