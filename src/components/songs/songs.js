

import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectAlbums } from "../../stores/selectors/albums.selectors";

const DynamicList=React.lazy(()=>import("./../dynamicList/dynamicList"))

function Songs() {

    const songsList = useSelector(selectAlbums);

return(<>
<DynamicList type="songs" pageSize={10} list={songsList} ></DynamicList>
</>)
}

export default memo(Songs);