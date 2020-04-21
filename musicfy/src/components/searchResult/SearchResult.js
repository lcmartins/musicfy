import React from 'react';
import { connect } from 'react-redux';
import './SearchResult.scss'
import { chooseArtist } from "../../actions/artistAction";
import history from '../../history';

function SearchResult(props) {
    const { searchHistory, chooseArtist } = props;
    const pickArtist = (artist) => {
        chooseArtist(artist)
        history.push('/')
    }
    return (
        <div className="container-search-result">
            <h1>Recent Searchs</h1>
            {searchHistory ?
                <ul className="searchResult">
                    {searchHistory.map(artist => {
                        const backGroundImage = {
                            backgroundImage: `url(${artist.tinyImage})`,
                            backgroundSize: '60px 60px',
                            backgroundRepeat: 'no-repeat',
                            height: '40px',
                            width: '40px',
                            borderRadius: '20px'
                        };
                        return <li onClick={() => pickArtist(artist)}><div style={backGroundImage}></div><article><span>{artist.name}</span><span>{artist.type}</span></article></li>
                    })}
                </ul> : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { searchHistory: state.artists.searchHistory };
}

export default connect(mapStateToProps, { chooseArtist })(SearchResult);