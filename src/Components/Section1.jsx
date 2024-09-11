import React from 'react'
import Landing from '../pages/Landing'

const Section1 = () => {
    let mystyle = {
        border:'1px solid red', 
        backgroundColor: 'whitesmoke'
    }
    // spread ...
    return (
        <>
            <div className="container1">
                <div className="container1-box1">
                    <h2>Our broadcast apps with your audio setup</h2>
                    <p>Plug and play your audio into the mobile or desktop broadcast app. Keep it simple with one audio source for mobile. Or use the desktop app for a mix of audio input and a playlist of sounds. Your audio, done your way.</p>
                </div>
                <div className="container1-box2"> <img src="/images/list-feature-audio-setup-704-855fb91a3b4701596755c6a453313978c62ee035dc14f95d208ff8c876e138cb.png" alt="" /></div>
            </div>

            <div className="container2">
                <div className="container2-box1"><img src="/images/list-feature-audience-704-977d2558b4b3b0b26401899c15762c391ea36d97f49fcc25f5c6ebea54b61cae.png" alt="" /></div>
                <div className="container2-box2">
                    <h2>No limits to audience size</h2>
                    <p>Reach an audience as big as you need. Connect, chat and engage with listeners all over the world with the confidence that everyone will be able to connect to your live stream. Mixlr has dedicated servers set aside, allowing you to scale your broadcasts as big as you need without extra costs.</p>
                </div>
            </div>

            <div className="container3">
                <div className="container3-box1">
                    <h2>Your own channel, a custom website for audio</h2>
                    <p>This is where all your audio is hosted. People can listen live while chatting or play back recordings. The custom players are ad-free, feature audio visuals and an immersive full-screen experience. Brand your channel with a logo, custom background and personalized URL. It's your site for your audio.</p>
                </div>
                <div className="container3-box2"> <img src="/images/list-feature-personalise-704-116bae5f5f4964a16d16d8800540c5583229eebdff83b2d14a9b459aace9841a.png" alt="" /></div>
            </div>

            <div className="container4">
                <div className="container4-box1"><img src="/images/list-feature-recordings-704-862b171b4c222768d374f1efed0d7c370ca17c3498ccca924651f6c047f9074a.png" alt="" /></div>
                <div className="container4-box2">
                    <h2>Showcase your recordings collection</h2>
                    <p>Record your broadcasts and publish them to your channel when you're ready. Listeners can visit your entire archive of past broadcasts and share direct links to their favorites.</p>
                </div>
            </div>

            <div className="container5">
                <div className="container5-box1">
                    <h2>Custom embeddable player</h2>
                    <p>Make it easier for people to come across your audio. Embed an ad-free player to your other existing sites to promote your audio content. It's as simple as copying and pasting an HTML widget code.</p>
                </div>
                <div className="container5-box2"> <img src="/images/list-feature-embeddable-704-d586f5641dec19be526577f1d799a05b77d23428f90489afc9a5a7b147861b28.png" alt="" /></div>
            </div>
        </>
    )
}

export default Section1