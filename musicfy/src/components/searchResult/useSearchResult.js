import { useEffect } from "react";
import httpClient from '../../http/httpClient';

function useSearchResult(props) {
    const { saveRelated, saveFoundOnSearch, saveMusicsOnSearch, searchText } = props;

    async function search(text) {
        const { data } = await httpClient.get('/artists');
        const found = data.filter(artist => artist.name.includes(text)).shift();
        if (found) {
            saveFoundOnSearch(found);
            const result = await httpClient.get('/albums');
            const albums = result.data.filter(a => a.artist === found.id);
            const musics = albums.reduce((a, b) => a.concat({ music: b.musicas[0], cover: b.cover, artist: found.name }), []);
            saveMusicsOnSearch(musics);
            saveRelated(data.filter(artist => artist.id !== found.id));
        }
    }

    useEffect(() => {
        if (searchText) {
            search(searchText);
        }
    }, [searchText]);

}
export { useSearchResult }