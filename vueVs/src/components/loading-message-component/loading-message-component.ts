import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./loadgin-message-component-view.html";
import {  Model, Prop, Watch } from 'vue-property-decorator'

class CILoadingMessageComponent extends Vue {
    IsWorking: boolean | any;
}

    
@WithRender
    @Component(<Vue.ComponentOptions<CILoadingMessageComponent>>{
        name: 'LoadingMessageComponent',
       
           
})
export class LoadingMessageComponent extends CILoadingMessageComponent {
    @Prop
    IsWorking: boolean;
    //in order not initialize variables used before mount;
    
    beforeMount() {
        //this.IsWorking = true;
        console.log(this.IsWorking);
        
    }
    // ok mounted does not change the state
    mounted() {
       
        //this.IsWorking = true;
        
        console.log('Loading message mounted');
    }

    @Watch('IsWorking')
    onIsWorkingChange(val: boolean) {
        console.log('is working changed');
    }
}