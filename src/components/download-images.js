const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
    name: 'watch1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
    name: 'watch2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&q=80',
    name: 'watch3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80',
    name: 'watch4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1639037687565-15b5c8e78d67?auto=format&fit=crop&q=80',
    name: 'watch5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1639037687813-399b95c9fe5a?auto=format&fit=crop&q=80',
    name: 'watch6.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'public', 'watches', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create watches directory if it doesn't exist
const watchesDir = path.join(__dirname, 'public', 'watches');
if (!fs.existsSync(watchesDir)) {
  fs.mkdirSync(watchesDir, { recursive: true });
}

// Download all images
images.forEach(img => downloadImage(img.url, img.name)); 