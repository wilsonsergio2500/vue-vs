import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./loading-button.html";
import { ILoadingButtonProps } from './models/iloadingbuttonprops';
import { Model, Prop, Watch } from 'vue-property-decorator';
import { Helpers } from '../../helpers/reflectionmethods'

import { BtnMessage } from './message-btn/message-component';
import { BtnLoadingMessage } from './loading-message-btn/loading-message'

class LoadingButtonModel extends Vue implements ILoadingButtonProps {
    IsWorking: boolean

    btnType: string;
    btnClass: any;
    btnClickHandler: Function;
}
@WithRender
@Component(<Vue.ComponentOptions<LoadingButtonModel>>{
    name: 'loading-button',
    components: {
        BtnMessage,
        BtnLoadingMessage
    }

})
export class LoadingButton extends LoadingButtonModel {
    @Prop
    IsWorking: boolean;

    @Prop
    btnType: string;
    @Prop
    btnClass: any;
    @Prop
    btnClickHandler: Function;

    beforeMount() {
        console.log(this.$children[0]);
    }
    mounted() {
        this.setChildrendProperty(this.IsWorking);
    }
    // so that the order would not matter
    setChildrendProperty(workingStatus: boolean) {
        let that = this;
        this.$children.forEach((vueNode: Vue, index: number) => {
            if (vueNode instanceof BtnMessage) {
                
                (vueNode as BtnMessage).IsWorking = workingStatus;
            } else if (vueNode instanceof BtnLoadingMessage) {
                (vueNode as BtnLoadingMessage).IsWorking = workingStatus;
            }
        })
    }
    @Watch(Helpers.ReflectionMethods.NameOF<LoadingButtonModel>(s => s.IsWorking))
    onIsWorkingChanged(workingStatus: boolean) {
        this.setChildrendProperty(workingStatus);
    }
}