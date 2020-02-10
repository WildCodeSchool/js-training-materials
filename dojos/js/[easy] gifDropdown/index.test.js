const execSync = require('child_process').execSync;
const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments("-headless");

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();


driver.get('https://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
    if(title === 'webdriver - Google Search') {
        console.log('Test passed');
    } else {
        console.log('Test failed');
    }
    });
});

driver.quit();