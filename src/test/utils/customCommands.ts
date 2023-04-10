import { exec, ExecException } from 'child_process';


async function resetApp() {
  const appPackage = await driver.getCurrentPackage();
  const appActivity = await driver.getCurrentActivity();
  const adbCmd = `adb shell pm clear ${appPackage}`;
  const openApp = `adb shell am start -n ${appPackage}/${appActivity}`;
  exec(adbCmd, (error: ExecException | null) => {
    if (error) {
      console.error(`exec error: ${error}`);
    } else {
      exec(openApp);
    }
  });
}

export default function CustomCommands() {
  browser.addCommand('resetApp', resetApp);
}