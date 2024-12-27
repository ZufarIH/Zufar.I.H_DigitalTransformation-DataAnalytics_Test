const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

// Function to collect data
function collectData() {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const hours = now.getHours().toString().padStart(2, '0'); // HH format
    const filename = `cron_${date}_${hours}.txt`;
    const filePath = path.join('/home/cron', filename);

    // Simulate data collection
    const data = `Data collected at ${now.toISOString()}`;
    
    // Save the collected data to a file
    fs.writeFileSync(filePath, data);
    console.log(`Data saved to ${filePath}`);
}

// Schedule the job for 08:00, 12:00, and 15:00 WIB (UTC+7)
cron.schedule('0 1,5,8 * * *', collectData); // Adjusted for UTC