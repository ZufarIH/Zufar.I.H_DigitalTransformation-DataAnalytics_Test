const fs = require('fs');
const path = require('path');

function deleteOldFiles() {
    const dirPath = '/home/cron';
    const now = Date.now();
    const monthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days

    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for file ${file}: ${err}`);
                    return;
                }

                // Check if the file is older than one month
                if (now - stats.mtimeMs > monthInMillis) {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file ${file}: ${err}`);
                        } else {
                            console.log(`Deleted old file: ${file}`);
                        }
                    });
                }
            });
        });
    });
}

// Run deletion script once a day at midnight
cron.schedule('0 17 * * *', deleteOldFiles); // Adjusted for UTC