import { useState, useEffect } from "react";
import httpClient from '../../http/httpClient';

function useMainPlayer(props) {
    const { artist } = props;
    const [musics, setMusics] = useState([]);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getMusics() {
        const { data } = await httpClient.get('/albums');
        const musics = data
                        .filter(album => album.artist === artist.id)
                        .reduce((arr, a) => [...arr,  a.musicas.reduce((arr, m) => arr.concat({cover: a.cover, name: m.name, duration: m.duration}), [])], [])
                        .reduce((a,b) => a.concat(b), [])
        setMusics(musics);
        const dataArtists = await (await httpClient.get('/artists')).data
        setRelated(dataArtists.filter(dataArtist => dataArtist.id !== artist.id));
    }

    useEffect(()=> {
        getMusics();
    }, [artist, loading])

    return {
        musics,
        related,
        setLoading
    };
}

export { useMainPlayer }
