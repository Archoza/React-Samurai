import React, {Suspense} from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const lazyLoading = (Component) => (props) =>
    <Suspense fallback={<Preloader/>}>
        <Component {...props}/>
    </Suspense>


