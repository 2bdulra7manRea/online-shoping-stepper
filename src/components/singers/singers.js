import singersData from "../../network/dummyData";
import React, { memo } from "react";

const DynamicList=React.lazy(()=>import("./../dynamicList/dynamicList"))

function Singers() {

return(<>
<DynamicList type="singers" pageSize={10} list={singersData} ></DynamicList>
</>)
}

export default memo(Singers);