import React, {useState , useEffect} from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {

    const {id} = useParams();
    console.log(id);

    const [movie , setMovie] = useState()

    useEffect(() => {

        db.collection('movies')
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setMovie(doc.data())
            }else{
                alert('gone')
            }
        })
    } , [])

    console.log(movie)

    return (
        <div className = 'detail'>
            {movie && (
                <>
                <div className = 'background'>
                <img src = {movie.backgroundImg}/>
            </div>
            <div className = 'image__title'>
                <img src = {movie.titleImg}/>
            </div>
            <div className = 'control'>
                <button className = 'playbutton'>
                    <img src = '/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </button>
                <button className = 'trailerbutton'>
                    <img src = '/images/play-icon-white.png'/>
                    <span>TRAILER</span>
                </button>
                <button className = 'addbutton'>
                    <span>+</span>
                </button>
                <button className = 'groupbutton'>
                    <img src = '/images/group-icon.png'/>
                </button>
            </div>
            <div className = 'info'>
                <span>{movie.subTitle}</span>
            </div>
            <div className = 'description'>
                <span>{movie.description}</span>
            </div>
            </>
            )
        }
            
        </div>
    )
}

export default Detail
