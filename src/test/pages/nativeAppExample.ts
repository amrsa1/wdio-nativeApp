import AllureReporter from '@wdio/allure-reporter';
import { exec } from 'child_process';


class NativeApp {

    /* =====================================================================  ELEMENTS ============================================================================== */

    listOption(option: string) { return $(`android=.text("${option}")`) }
    get bouncingBalls() { return $('android=.text("Bouncing Balls")') }
    get actionBar() { return $('android=.resourceId("android:id/action_bar")') }
    get contButton() { return $('android=.resourceId("com.evernote:id/continue_button")') }
    get passInput() { return $('android=.resourceId("com.evernote:id/landing_login_password")') }
    get createAccountButton() { return $('android=.resourceId("com.evernote:id/landing_register_button")') }
    get signInButton() { return $('android=.resourceId("com.evernote:id/landing_sign_in_button")') }
    get errorModal() { return $('android=.resourceId("android:id/message")') }



    get emailField() { return $('android=.text("Email")') }
    get continue() { return $('android=.text("Continue")') }
    get password() { return $('android=.text("Password")') }
    get login() { return $('android=.text("Log in")') }
    get errorMsg() { return $('android=.resourceId("android:id/message")') }
    get splashIcon() { return $('android=.resourceId("com.evernote:id/imageView")') }
    get loginPage() { return $('android=.text("Remember everything that matters.")') }
    get applyButton() { return $('android=.resourceId("")') }

    /* ========================================================================= ACTIONS ================================================================================ */


    async selectOption(option: string) {
        AllureReporter.addStep(`Tab on the following option ${option}`)
        await this.listOption(option).click()
        return this;
    }

    async resetApp(packageName: string, activityName: string) {
        const adbCmd = `adb shell pm clear ${packageName}`;
        const openApp = `adb shell am start -n ${packageName}/${activityName}`;
        exec(adbCmd, (error) => {
            if (error) {
                console.error(`exec error: ${error}`);
            } else {
                exec(openApp)
            }

        });
    }


}

export default new NativeApp();
