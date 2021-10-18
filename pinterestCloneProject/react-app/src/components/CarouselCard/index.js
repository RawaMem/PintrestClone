import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllBoards, removeOnePinFromBoard } from '../../store/boards';
import { getAllPins } from '../../store/pins';


export const CarouselCard = () => {
    const dispatch = useDispatch();
    const allPinsObj = useSelector(state => state.pins)
    const allPinsArray = Object.values(allPinsObj)

    let randStart = Math.floor(Math.random() * allPinsArray?.length);

    const randomNumArr = []
    for (let i = 0; i < 10; i++) {
        let randomStartingIndex = Math.floor(Math.random() * allPinsArray?.length);
        randomNumArr.push(randomStartingIndex)
    }
    const randomUrls = []

    for (let i = 0; i < randomNumArr?.length; i++) {
        let num = randomNumArr[i];
        let randomPinObj = allPinsArray[num];
        randomUrls.push(randomPinObj?.media_url)
    }

    const startingPin = allPinsArray[randStart]
    const startingUrl = startingPin?.media_url

    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])


    return(
        <>
            <div className="carousel-card">
                <div className="carousel">
                    <div className="carousel__item carousel__item--visible">
                        <img src={startingUrl} alt="cards" />
                    </div>
                        {allPinsArray && randomUrls && randomUrls?.map(imgUrl => {
                            return (
                                <>
                                    <div className="carousel__item">
                                        <img src={imgUrl} alt="cards" />
                                    </div>
                                </>
                            )
                        })}

                    <script src='./script.js'></script>
                </div>
            </div>
        </>


    )
}
