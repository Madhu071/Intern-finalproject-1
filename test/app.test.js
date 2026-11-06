
const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../app');

test('Application should run successfully', async () => {
    const server = createServer();

    await new Promise(resolve => server.listen(0, resolve));

    try {
        const port = server.address().port;
        const response = await fetch(`http://localhost:${port}`);

        assert.strictEqual(response.status, 200);

        const body = await response.text();

        assert.match(body, /Welcome to My DevOps Project/);
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
