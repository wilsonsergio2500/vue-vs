import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./stock-example.html";
import { StockComponent } from '../../stock-component/stock-component';

@WithRender
@Component(<Vue.ComponentOptions<Vue>>{
    name: 'stock-example',
    components: {
        StockComponent
    }

})
export class StockExample extends Vue {

}
