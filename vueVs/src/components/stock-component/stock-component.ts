/// <reference path="../loading-message-component/loading-message-component.ts" />
import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./stock-view.html";
import { Model, Prop, Watch } from 'vue-property-decorator'
import { IStock } from '../../models/stock/stock';
import { HttpResponseTypes, IHttpResponseItem, GetStockPrice } from '../../apis/stock-api';
import { Helpers } from '../../helpers/mergeobject';
import { LoadingMessageComponent } from '../loading-message-component/loading-message-component';

interface IStockState {
    IsBusy: boolean;
    stock: IStock;
    Error: any;

    containerClasses: any;
    iconClasses: any;
    statusClass: any;
}
class StockComponentVueModel extends Vue implements IStockState {
    ticket: string;

    Error: any;
    IsBusy: boolean;
    stock: IStock;

    containerClasses: any;
    iconClasses: any;
    statusClass: any;
}
@WithRender
@Component(<Vue.ComponentOptions<StockComponentVueModel>>{
        name: 'stock-component',
        components: {
            LoadingMessageComponent
        },
        data: () => {
        return <IStockState>{
            IsBusy: true, stock: <IStock>{}, Error: null,

        }
    }

})
export class StockComponent extends StockComponentVueModel {
    @Prop
    ticket: string;
    @Prop
    delay: number;


    mounted() {
    }
    beforeMount() {
        this.setStock();
    }
    setStock() {
        let that = this;
        GetStockPrice(this.ticket).then((r) => {
            if (r.type == HttpResponseTypes.Error) {
                that.Error = r.Error;
                that.IsBusy = false;
            } else {
                that.stock = (r.payload[0] as IStock);
                console.log(that.stock);
                that.setClasses(that.stock);
                setTimeout(() => {
                    that.IsBusy = false;
                }, !!this.delay ? this.delay : 0);
            }

        });
    }
    setClasses(stock: IStock) {
        let IsUp = (stock.c.charAt(0) == '+');
        let colorStatus = {
            'text-success': IsUp,
            'text-danger': !IsUp
        }

        this.containerClasses = {
            'bs-callout': true,
            'bs-callout-success': IsUp,
            'bs-callout-danger': !IsUp
        }

        this.iconClasses = 
            Helpers.MergeObject(
                {
                    'fa': true,
                    'fa-arrow-up': IsUp,
                    'fa-arrow-down': !IsUp
                }, colorStatus)
        

        this.statusClass = colorStatus;

    }
}