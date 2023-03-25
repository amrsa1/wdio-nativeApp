class Caps {

    emulator =
    [{
      'appium:platformName': 'android',
      'appium:deviceName': 'nexus',
      'appium:appPackage': 'com.evernote',
      'appium:appActivity': 'com.evernote.MainActivity',
      'appium:app':'evernote.apk',
      'appium:platformVersion': '13',
      'appium:uiautomator2ServerInstallTimeout': 150000,
      'appium:appWaitForLaunch': true,
      'appium:disableWindowAnimation': true,
      'appium:autoGrantPermissions': true,
      'appium:clearSystemFiles': true,
      'appium:nativeWebScreenshot': true,
      'appium:adbExecTimeout': 60000,
      'appium:automationName': 'uiautomator2'
    }]

}

export default new Caps();
