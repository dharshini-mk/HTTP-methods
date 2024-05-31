const http = require('http');
const querystring = require('querystring');

http.createServer(function(req, res) {
    let data = '';

    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function() {
        const qs = querystring.parse(data);
        const name = qs['username'];
        const email = qs['email'];

        const htmlResponse = `
        <html>
        <head>
            <style>
                body {
                    background-image: url("https://i.pinimg.com/564x/c6/55/5a/c6555a4c773eff5eaed3d1e1e140dc52.jpg");
                    background-size: cover;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    color: white;
                }
                .center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .content {
                    background-color: rgba(0, 0, 0, 0.7);
                    padding: 20px;
                    border-radius: 10px;
                }
                h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.5rem;
                }
            </style>
        </head>
        <body>
            <div class="center">
                <div class="content">
                    <h1>Hello ${name},</h1>
                    <p>Your email id ${email} has been registered successfully using post method</p>
                </div>
            </div>
        </body>
        </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(htmlResponse);
        res.end();
    });

    req.on('error', function(err) {
        console.error('Request error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
    });
}).listen(7777);

console.log("Server started running in post.");