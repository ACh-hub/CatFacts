import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '../sass/styles.scss'

import View from './modules/view';
import Model from './modules/model';
import Controller from './modules/controller';
import {
  onLoad
} from './modules/onload';


class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
  };
  init() {
    onLoad(this.view.button, 'click', () => this.controller.updateFact())
    this.view.renderAnimation();
    this.controller.updateFact();
  };
}
const app = new App();

onLoad(window, 'load', () => app.init())