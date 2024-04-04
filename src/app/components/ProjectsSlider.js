'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./slider-styles.css"
import {useState} from "react";
import Image from 'next/image';
import lawnmowerPic from '/public/lawnmower.JPG'
import messageRequestPic from '/public/messaging-request.PNG'


export default function ProjectsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="flex justify-center flex-col ml-auto mr-auto pt-5 w-1/2 mobile:w-4/5">
            <div ref={sliderRef} className="keen-slider border-4 border-white bg-theme-navy">
                <div className="keen-slider__slide flex flex-col justify-left font-15px h-550px pt-3 pb-3">
                    <Image
                        src={lawnmowerPic}
                        alt="Solar powered lawnmower"
                        className="border-4 border-white w-1/2 aspect-auto ml-auto mr-auto"
                    />
                    <h1 className="ml-auto mr-auto text-xl">Solar Powered Lawn Mower</h1>
                    <p className="pl-4 pr-4">In my Spring 2022 semester at NWACC, I collaborated with a team of 3 fellow
                        students to design and build a solar powered lawnmower. Our aim was to build a sustainable
                        lawnmower that is emission-free and charges using a free and renewable energy source. We
                        utilized our knowledge of Autodesk Inventor, electronic design, soldering, hand and power tools,
                        and design to complete this project. In order to complete the project on time, our group met
                        frequently and maintained a rigorous timeline. The mower was designed with consideration for
                        the standards given by the US Consumer Product Safety Commission, and meets all requirements.
                        It features a dual solar panel design which charges a 24V DC battery system. This allows the
                        mower to be run even when it is cloudy.
                    </p>
                </div>
                <div className="keen-slider__slide flex flex-col justify-left font-15px h-550px pt-3 pb-3">
                    <Image
                        src={messageRequestPic}
                        alt="payload example"
                        className="border-4 border-white w-1/2 aspect-auto ml-auto mr-auto"
                    />
                    <h1 className="ml-auto mr-auto text-center text-xl">Email Messaging Service API Endpoint</h1>
                    <p className="pl-4 pr-4"> This backend messaging service was designed using REST standards,
                        and was implemented using Spring Boot, Java 17, Lombok, and Maven. The service takes a request
                        body over the endpoint <code>/v1/message</code>. It can then take data from the request body
                        to send a message over SMTP to the specified email inbox. This service is mostly pre-configured
                        to work with Gmail.
                        <br/><br/>
                        This project is a work in progress. Future scope of this service includes request validation
                        and adding another field for phone number.
                    </p>
                    <p className="m-auto">
                    <a href="https://github.com/taylorhoyt/messaging-service"
                       target="_blank"
                       className="text-white bg-black hover:bg-gray focus:ring-4 focus:ring-gray font-medium
                         rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-2 border-white">
                        Github
                    </a>
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
            {loaded && instanceRef.current && (
                <div className="flex pt-2 justify-center">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
            </div>
        </div>
    )
}