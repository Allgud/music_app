import React from "react";
import { useSelector } from "react-redux";
import PlayList from "../../components/playlist-components/Playlist";
import PlayListTitle from '../../components/playlist-components/PlayListTitle'
import PageTitle from "../../components/center-block-components/PageTitle";

const CollectionPlaylist = () => {
    const { currentCollection } = useSelector(state => state.collections)

    return (
        <>
            <PageTitle title={currentCollection}/>
            <PlayListTitle />
            <PlayList />
        </>
    )
}

export default CollectionPlaylist