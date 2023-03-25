import NativeApp from '../pages/nativeAppExample';
import AllureReporter from '@wdio/allure-reporter';



describe('Native App Test Suite Example', () => {

    it('Splash screen should be loaded', async () => {
        AllureReporter.addSeverity('minor')
        AllureReporter.addStory('By opening the app user will be landed on splash screen')
        AllureReporter.addDescription('Landing page will contains app logo and cont button', 'text' )
        await NativeApp.verifySplashScreenHasLoaded()
        expect(await NativeApp.loginPage).toBeDisplayed()
    });

    it('Should not be able to login with invalid credentials', async () => {
        AllureReporter.addSeverity('minor')
        AllureReporter.addStory('User should not be able to login with invalid password')
        AllureReporter.addDescription('Error message will pop up when loging with invalid cred','text')
        await NativeApp.LoginWithCred('any@anything.com', 'wrong')
        expect(await NativeApp.errorMsg).toHaveText('The password you entered is incorrect. Please try again.')
    });

});
