import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./test.html";
import { LoadingButtonComponent } from '../../loading-button-component/index';

interface ILoadingButtonState {
    buttonType: string;
    buttonClass: any;
    IsBusy: boolean;

}

class LoadingButtonExampleVueModel extends Vue implements ILoadingButtonState {
    buttonType: string;
    buttonClass: any;
    IsBusy: boolean;
}
@WithRender
    @Component(<Vue.ComponentOptions<LoadingButtonExampleVueModel>>{
    name: 'loading-button-example',
    components: LoadingButtonComponent,
    data: () => {
        return <ILoadingButtonState>{
            buttonClass: {
                'btn': true,
                'btn-primary': true
            },
            buttonType: 'button',
            IsBusy: false
        }
    }
})
export class LoadingButtonExample extends LoadingButtonExampleVueModel {
    buttonDanger: any = {
        'btn': true,
        'btn-danger': true
    };

    clickHandler() {
        this.IsBusy = true;
        setTimeout(() => {
            this.IsBusy = false;
        }, 8000);
        console.log('you clicked me');
    }
    mounted() {
        
    }
}
