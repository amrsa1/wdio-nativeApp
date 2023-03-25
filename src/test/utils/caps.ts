class Caps {

    emulator =
    [{
      'appium:platformName': 'android',
      'appium:deviceName': 'nexus',
      'appium:appPackage': 'com.evernote',
      'appium:appActivity': 'com.evernote.MainActivity',
      'appium:app':'https://dw58.uptodown.com/dwn/hanPc53tLQ8P7osQaj7CpCEPSb8zc9arcGigLXtOM5DZwPTlOALB1vNAnSsfZ4EU6v7CKMRFkwTWfeSBmAEnl2kRCK0dQZ-K-Duer_fM9ZURN92Um4JAjuqiAVj425DO/COIhu4yQizncY8e1HpZXWwPIuQ9peXcgmPJ8H6HC2hhFoISVxparfhm-GcZiX-yAf3oiiJjJaXkOHpijic9n3tNZggSS0x9g8YBWQeZ7TOpARcHLSmJDWUJ_zhYFNNbz/mnmxLV95Mi9fqd7lIEhMPiOsPdWESt9CPZYQd_nNeVW2ibN5LS99o58aOyik3I_DJ0hQvJooIUpDI7BoqnB9yQ==/evernote-10-49.apk',
      'appium:platformVersion': '13',
      'appium:uiautomator2ServerInstallTimeout': 120000,
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