Stream = require('node-rtsp-stream')
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

stream1 = new Stream({
    name: 'cctv1',
    streamUrl: 'rtsp://210.99.70.120:1935/live/cctv002.stream',
    wsPort: 3011, // 안겹칠만한 포트번호로 설정
    ffmpegOptions: {
        '-stats': '',
        '-r': 24
    }
})

stream2 = new Stream({
    name: 'cctv2',
    streamUrl: 'rtsp://210.99.70.120:1935/live/cctv009.stream',
    wsPort: 3012, // 안겹칠만한 포트번호로 설정
    ffmpegOptions: {
        '-stats': '',
        '-r': 24
    }
})

stream3 = new Stream({
    name: 'cctv3',
    streamUrl: 'rtsp://210.99.70.120:1935/live/cctv004.stream',
    wsPort: 3013, // 안겹칠만한 포트번호로 설정
    ffmpegOptions: {
        '-stats': '',
        '-r': 24
    }
})



// Serve HTML file or any other static files if needed
app.get('/:path', (req, res) => {
    const reqPath = req.params.path;
    res.sendFile(__dirname + `/${reqPath}.html`);
  });
  
  // Start the server on port 3001
  const PORT = 3001;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });