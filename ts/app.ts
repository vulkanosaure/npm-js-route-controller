import { JsRouteController } from '../JsRouteController/JsRouteController';
import { MainController } from './controllers/MainController';
import { Page2Controller } from './controllers/Page2controller';
import { IndexController } from './controllers/IndexController';
import { Page3Controller } from "./controllers/Page3Controller";


let router = new JsRouteController(document);
router.setMainCtrl(MainController);
router.addCtrl(['', 'index.html'], IndexController);
router.addCtrl('page2.html', Page2Controller);
router.addCtrl('page3.html', Page3Controller);
