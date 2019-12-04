import {Provider} from "mobx-react"
import Store from "./src/stores/Store"
import * as React from "react";

export default ({element}) => (
    <Provider store={Store}>{element}</Provider>
)