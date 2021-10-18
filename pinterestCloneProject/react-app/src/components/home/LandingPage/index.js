import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
import { getAllPins } from '../../../store/pins';
import Card from '../../PictureCard';



function LandingPage() {

    const dispatch = useDispatch();
    const allPinsObj = useSelector(state => state?.pins)
    const allPinsArray = Object.values(allPinsObj)

    const allPinUrls = []
    for (let i = 0; i < allPinsArray?.length; i++) {
        let onePin = allPinsArray[i];
        let mediaUrl = onePin?.media_url;
        allPinUrls.push(mediaUrl)
    }



    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])

    // let randStart = Math.floor(Math.random() * allPinsArray?.length);

    const randomNumArr = []
    for (let i = 0; i < 30; i++) {
        let randomStartingIndex = Math.floor(Math.random() * allPinsArray?.length);
        randomNumArr.push(randomStartingIndex)
    }
    const randomUrls = []

    for (let i = 0; i < randomNumArr?.length; i++) {
        let num = randomNumArr[i];
        let randomPinObj = allPinsArray[num];
        randomUrls.push(randomPinObj?.media_url)
    }



    return (
        <>
        <div className="landing-page-container">
            <div className="slogan-container">
                <div className="slogan">Tired of risking your life for Ideas?</div>
                <div className="slogan">Get your next idea... Safely</div>
            </div>
            <div className="landing-card-container">
                <div className="card-column-1 move-up1">
                    <img className='landing-img-card' alt='' src={allPinUrls[0]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[1]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[19]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[3]}  />
                </div>
                <div className="card-column-1 move-up2">
                    <img className='landing-img-card' alt='' src={allPinUrls[4]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[5]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[24]}  />
                </div>
                <div className="card-column-1 move-up3">
                    <img className='landing-img-card' alt='' src={allPinUrls[6]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[8]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[26]}  />
                </div>
                <div className="card-column-1 move-up4">
                    <img className='landing-img-card' alt='' src={allPinUrls[9]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[10]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[27]}  />
                    {/* <img className='landing-img-card' alt='' src={allPinUrls[11]}  /> */}
                </div>
                <div className="card-column-1 move-up5">
                    <img className='landing-img-card' alt='' src={allPinUrls[12]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[13]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[14]}  />
                    {/* <img className='landing-img-card' alt='' src={allPinUrls[15]}  /> */}
                </div>
                <div className="card-column-1 move-up6">
                    <img className='landing-img-card' alt='' src={allPinUrls[16]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[17]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[18]}  />
                    <img className='landing-img-card' alt='' src={allPinUrls[23]}  />
                    {/* <img className='landing-img-card' alt='' src={allPinUrls[20]}  /> */}
                </div>
            </div>
        </div>











        {/* <div className="landing-page-container">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/83/28/4f/83284f0585ca0a90cdec557f5e8c87b6.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/f4/c5/1b/f4c51b677abda2469e64ddd3c3b445f1.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/ae/48/4b/ae484bb304737375dc9423a050fb8541.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}
        </>
    )
}

export default LandingPage;
