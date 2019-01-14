var proxy = require('redbird')({
    port: 80,
    letsencrypt: {
        path: __dirname + '/certs',
        port: 9999
    },
    ssl: {
        http2: true,
        port: 443
    }
});

proxy.register("api.starlet.kr", "http://localhost:3000", {
    ssl: {
        letsencrypt: {
            email: 'lstar2397@naver.com',
            production: true
        }
    }
});