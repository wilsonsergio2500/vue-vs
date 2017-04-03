import Vue from "vue";
import Component from "vue-class-component";
import { LoadingMessageComponent } from '../../loading-message-component/loading-message-component';
import WithRender from "./test.html";

@WithRender
@Component(<Vue.ComponentOptions<any>>{
    name: 'LoadingComponentTest',
    components: {
        LoadingMessageComponent
    }
        , data: () => {
        return {
            IsBusy: false,
        };
    }
})
export default class LoadingComponentTest extends Vue {
    IsBusy: boolean;
    beforeMount() {
        this.IsBusy = true;
    }
    mounted() {
        console.log('mounted loading component test');
    }
    changeBusyState() {
        console.log('click event fired');
        console.log();
        
        this.IsBusy = !this.IsBusy;
     
    }

    get buttonLabel() {
        return (this.IsBusy) ? 'Stop Waiting' : 'Start Waiting';

    }
}