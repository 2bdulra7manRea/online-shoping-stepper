import ViewCard from "../card/viewCard";
import Pagination from '@mui/material/Pagination';
import { memo, useCallback, useEffect, useState } from "react";
import CardSong from "../card-song/cardSong";

function DynamicList({pageSize ,list , type}) {
const [currentPage,setCurrentPage]=useState(0);
const [PageCount,setPageCount]=useState(10);

useEffect(()=>{
setPageCount(Math.round( list.length/pageSize)) 
},[])



function paginationOnChange(ev,currentPageValue){
        setCurrentPage(currentPageValue-1)
}

function displayItems(){
let start=currentPage*pageSize;
let end =pageSize+(pageSize*currentPage);
    return displayItemsFactory(start,end,type)
}    

function displayItemsFactory(start,end,type){
    switch (type) {
        case "songs":
        return displayItemsSongs(start,end)
        default:
        return displayItemsGeneral(start,end)
    }
}

function displayItemsSongs(start,end){
       return list.slice(start,end).map((album,index)=>{
            return (<>
                <div className="album-songs" key={album.id}>
                <p>{album.name}</p>
                <div className="row">
                    <div className="col-12">
                    {album.songs.map((song)=>{
                    return ( <CardSong  type={type} item={song} key={song.id}></CardSong>)
                    })}
                    </div>
                </div>
                </div>
            </>)
        })
}    

function displayItemsGeneral(start,end){

    return list.slice(start,end).map((item,index)=>{
        return ( <ViewCard type={type} item={item} key={item.id}></ViewCard>)
    })

}

const displayItemsCallback = useCallback(displayItems,[currentPage])


return (<div style={{height:"100%"}}> 
    <div className="row mt-5 mb-2">
        <div className="col-12 d-flex flex-wrap">
        {displayItemsCallback()}
        </div>
    </div>
    <div className="row">
        <div className="col-12">
        <Pagination variant="outlined" color="primary"  onChange={paginationOnChange} count={PageCount} />
        </div>
    </div>
    </div>  );
}

export default memo(DynamicList);