

import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectAlbums } from "../../stores/selectors/albums.selectors";
const DynamicList = React.lazy(()=>import("./../dynamicList/dynamicList"))


function Albums() {

const albumsList = useSelector(selectAlbums);

return(<>
<DynamicList type="albums" pageSize={10} list={albumsList} ></DynamicList>
</>)
}

export default memo(Albums);