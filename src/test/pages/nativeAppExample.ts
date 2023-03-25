import AllureReporter from '@wdio/allure-reporter';


class NativeApp {

    /* =====================================================================  ELEMENTS ============================================================================== */

    get loadingSpinner() { return $('android=.resourceId("com.evernote:id/splash_loading_progress")') }
    get mainLogo() { return $('~Evernote logo image') }
    get emailInput() { return $('android=.resourceId("com.evernote:id/landing_email")') }
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


    async LoginWithCred(email, password) {
        AllureReporter.addStep('login with username and password')
        await this.emailField.waitForDisplayed()
        await this.emailField.setValue(email)
        try {
            await this.continue.waitForEnabled()
            await this.continue.click()
            await this.password.waitForDisplayed()
            await this.password.setValue(password)
            await this.login.click()
            await this.errorMsg.waitForDisplayed()
        } catch {
            await this.contButton.waitForDisplayed()
            await this.contButton.click()
            await this.passInput.waitForDisplayed()
            await this.passInput.setValue(password)
            await this.signInButton.waitForDisplayed()
            await this.signInButton.click()
            await this.errorModal.waitForDisplayed()
        }

        return this;
    }

    async verifySplashScreenHasLoaded() {
        AllureReporter.addStep('Verify spalsh screen has been loaded')
        await this.loginPage.waitForDisplayed()
        return this;
    }




    async verifyIntroPages() {
        AllureReporter.addStep('Verify landing page has loaded properly')
        await this.loadingSpinner.waitForDisplayed()
        await this.mainLogo.waitForDisplayed()
        return this;
    }

    async typeUserEmail(value: string) {
        AllureReporter.addStep('Type user email')
        await this.emailInput.setValue(value)
        await this.contButton.waitForDisplayed()
        return this;
    }

    async clickContButton() {
        AllureReporter.addStep('Click on continue button')
        await this.contButton.click()
        // this.createAccountButton.waitForDisplayed()
        return this;
    }

    async typeUserPassword(value: string) {
        AllureReporter.addStep('Type user password')
        await this.passInput.setValue(value)
        await this.signInButton.waitForDisplayed()
        return this;
    }

    async clickSignInButton() {
        AllureReporter.addStep('Click on sign in button')
        await this.signInButton.click()
        return this;
    }

    async waitForErrorModal() {
        AllureReporter.addStep('Wait for error to be displayed')
        await this.errorModal.waitForDisplayed()
        return this;
    }



}

export default new NativeApp();
