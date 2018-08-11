# JsRouter

Simple library written in typescript used to associate Javascript controllers with route in a multi-page web environement. 

## usage

```javascript
import { JsRouter } from '../JsRouteController/JsRouteController';
import { MainController } from './controllers/MainController';
import { Page2Controller } from './controllers/Page2controller';
import { IndexController } from './controllers/IndexController';
import { Page3Controller } from "./controllers/Page3Controller";


let router = new JsRouter(document);
router.setMainCtrl(MainController);
router.addCtrl(['', 'index.html'], IndexController);
router.addCtrl('page2.html', Page2Controller);
router.addCtrl('page3.html', Page3Controller);
```