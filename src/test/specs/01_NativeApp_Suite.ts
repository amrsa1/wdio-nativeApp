import NativeApp from '../pages/nativeAppExample';
import AllureReporter from '@wdio/allure-reporter';

describe('Native App Test Suite Example', () => {

    afterEach(async () => {
        await browser.resetApp()
    })

    it('Should be able to select animation for list', async () => {
        AllureReporter.addSeverity('minor')
        AllureReporter.addStory('Check bouncing balls in animations list')
        AllureReporter.addDescription('Animations list will be loaded and will contains bouncing balls', 'text')
        await NativeApp.selectOption('Animation')
        await expect(NativeApp.bouncingBalls).toBeDisplayed()
    });

    it('Should select AnimateDrawables option from Graphics list', async () => {
        AllureReporter.addSeverity('minor')
        AllureReporter.addStory('AnimateDrawables option is existing in graphics list')
        AllureReporter.addDescription('AnimateDrawables option is existing in graphics list', 'text')
        await NativeApp.selectOption('Graphics')
        await NativeApp.selectOption('AnimateDrawables')
        await browser.takeScreenshot()
        await expect(NativeApp.title('Graphics/AnimateDrawables')).toBeDisplayed()
    });

});
