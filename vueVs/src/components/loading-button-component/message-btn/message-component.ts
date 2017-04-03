/// <reference path="../models/iloadingbuttonprops.ts" />
import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./message-component.html";
import { Model, Prop, Watch } from 'vue-property-decorator'
import { Helpers } from '../../../helpers/reflectionmethods';
import { ILoadingButtonProps } from '../models/iloadingbuttonprops'



class LoadingButtonMessageModel extends Vue implements  ILoadingButtonProps {
    IsWorking: boolean;
  
}

@WithRender
@Component(<Vue.ComponentOptions<LoadingButtonMessageModel>>{
    name: 'btn-message',
    data: () => {
        return <ILoadingButtonProps>{ IsWorking: false };
    }

})
export class BtnMessage extends LoadingButtonMessageModel {

    
    
    mounted() {

    }

   
    get workingStatus(){
        return !this.IsWorking;
    }
}