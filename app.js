const http = require('http');

function createServer() {
    return http.createServer((req, res) => {

        if (req.url === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>DevOps CI/CD Project</title>
                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            background: #f0f4f8;
                            padding: 80px;
                        }
                        h1 { color: #2563eb; }
                        p { font-size: 20px; }
                    </style>
                </head>
                <body>
                    <h1>Welcome to My DevOps Project!</h1>
                    <p>CI/CD Pipeline with GitHub Actions and Docker</p>
                    <h3>Application deployed successfully!</h3>
                </body>
                </html>
            `);

        } else {
            res.writeHead(404);
            res.end('Page Not Found');
        }
    });
}

if (require.main === module) {
    const PORT = 3000;

    createServer().listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { createServer };