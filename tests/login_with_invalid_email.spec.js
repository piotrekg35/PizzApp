// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('login_with_invalid_email', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login_with_invalid_email', async function() {
    await driver.get("http://localhost:4200/zaloguj/")
    await driver.manage().window().setRect({ width: 989, height: 666 })
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys("alamakota")
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys("alamakota")
    await driver.findElement(By.css(".btn")).click()
    await driver.wait(until.elementLocated(By.css("p:nth-child(1)")), 3000)
    await driver.sleep(1000)
    assert(await driver.findElement(By.css("p:nth-child(1)")).getText() == "Błędny email.")
  })
})
