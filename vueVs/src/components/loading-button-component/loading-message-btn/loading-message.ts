import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./loading-message-view.html";
import { Model, Prop, Watch } from 'vue-property-decorator'
import { Helpers } from '../../../helpers/reflectionmethods';
import { ILoadingButtonProps } from '../models/iloadingbuttonprops';

class LoadingButtonLoadingModel extends Vue implements ILoadingButtonProps {
    IsWorking: boolean;
}
@WithRender
@Component(<Vue.ComponentOptions<LoadingButtonLoadingModel>>{
    name: 'btn-loading-message',
    data: () => {
        return <ILoadingButtonProps>{ IsWorking: false}
    }

})
export class BtnLoadingMessage extends LoadingButtonLoadingModel{

    IsWorking: boolean;
}