class Caps {

    emulator =
    [{
      'appium:platformName': 'android',
      'appium:deviceName': 'nexus',
      'appium:app':'./src/test/api.apk',
      'appium:platformVersion': '11',
      'appium:uiautomator2ServerInstallTimeout': 150000,
      'appium:appWaitForLaunch': true,
      'appium:disableWindowAnimation': true,
      'appium:autoGrantPermissions': true,
      'appium:clearSystemFiles': true,
      'appium:nativeWebScreenshot': true,
      'appium:adbExecTimeout': 80000,
      'appium:automationName': 'uiautomator2'
    }]

}

export default new Caps();
