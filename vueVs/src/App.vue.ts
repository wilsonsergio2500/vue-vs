import Vue from "vue";
import Component from "vue-class-component";
import LoadingComponentTest from './components/tests/loading-message-component/test';
import WithRender from "./App.html";
import { LoadingButtonExample } from './components/tests/loading-button-example/test';
import { StockExample } from './components/tests/stock-example/stock-example'


@WithRender
    @Component(<Vue.ComponentOptions<any>>{
        components: {
            LoadingComponentTest,
            LoadingButtonExample,
            StockExample
        }
    })
export default class App extends Vue {
  name = "app";

  constructor() {
    super();
  }
}
