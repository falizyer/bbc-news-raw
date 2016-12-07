import {clone, isEqual} from "lodash";
import {ReduceStore} from "flux/utils";
import {PageConstant} from "../constant/page.constant";
import { receiveNewsAction } from "../action/page.action";

export class PageStore extends ReduceStore {

    constructor(dispatcher) {
        super(dispatcher);
    }

    getInitialState() {
        return {
            articles: []
        };
    }

    areEqual(state1, state2) {
        console.log(state1, state2)
        return isEqual(state1, state2);
    }

    reduce(_state, action) {
        let state = clone(_state);
        switch (action.type) {
            case PageConstant.RECEIVE_NEWS_ACTION:
                return receiveNewsAction(state, action);
            default:
                throw new Error("unknown action");
        }
    }
}
