import { useState, useEffect } from "react";
import httpClient from '../../http/httpClient';

function useArtistPlayingGranHeader(props) {
    const { saveSearchHistory, searchText } = props;
    const [searchTerm, setSearchTerm] = useState(undefined);

    async function search(text) {
        const { data } = await httpClient.get('/artists');
        const filtered = data.filter(artist => artist.name.includes(text)).shift();
        if (filtered) {
            saveSearchHistory(filtered);
        }
    }

    useEffect(() => {
        if (searchText) {
            search(searchText);
        }
    }, [searchText]);

    return {
        searchTerm,
        setSearchTerm
    };
}

export { useArtistPlayingGranHeader }