import {Provider} from "mobx-react"
import * as React from "react";
import {Store} from "./src/stores/Store";

export default ({element}) => (
    <Provider store={Store}>{element}</Provider>
)