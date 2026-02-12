const path = require('path');

export class CommonPage {
    constructor(page) {
        this.page = page;
    }

    async download(locator, filename) {
        const downloadPromise = this.page.waitForEvent('download');
        await locator.click();
        const download = await downloadPromise;
        let downloadPath = path.join(__dirname, '..', 'download');
        downloadPath = `${downloadPath}/${filename}`
        await download.saveAs(downloadPath);
    }
}