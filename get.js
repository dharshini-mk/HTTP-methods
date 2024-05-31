const http = require('http');
const url = require('url');

function getexample(request, response) {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;

    if (path === '/login') {
        console.log('URL ' + request.url + ' received. using get method');

        const qs = parsedUrl.query;
        console.log("query string :");
        console.log(qs);

        const name1 = qs["username"];
        const email = qs["email"];

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(`
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
                <h1>Hello ${name1},</h1>
                <p>Your email id ${email} has been registered successfully using get method</p>
            </div>
        </div>
    </body>
    </html>
`);

        response.end();
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Page not found');
        response.end();
    }
}


http.createServer(getexample).listen(8050);
console.log('Server has Started in get method.');