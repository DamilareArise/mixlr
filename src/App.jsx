import React from 'react'
import'./App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>

    <div className="first">
        <h1>Get your audio to your audience</h1>
        <p>Professional tools for audio, made simple</p>
        <button type="text"><a href="">Start free trial</a></button>
    </div>

    <div className="container1">
        <div className="container1-box1">
            <h2>Our broadcast apps with your audio setup</h2>
            <p>Plug and play your audio into the mobile or desktop broadcast app. Keep it simple with one audio source for mobile. Or use the desktop app for a mix of audio input and a playlist of sounds. Your audio, done your way.</p>
        </div>
        <div className="container1-box2"> <img src="/images/list-feature-audio-setup-704-855fb91a3b4701596755c6a453313978c62ee035dc14f95d208ff8c876e138cb.png" alt=""/></div>
    </div>

    <div className="container2">
        <div className="container2-box1"><img src="/images/list-feature-audience-704-977d2558b4b3b0b26401899c15762c391ea36d97f49fcc25f5c6ebea54b61cae.png" alt=""/></div>
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
        <div className="container3-box2"> <img src="/images/list-feature-personalise-704-116bae5f5f4964a16d16d8800540c5583229eebdff83b2d14a9b459aace9841a.png" alt=""/></div>
    </div>

    <div className="container4">
        <div className="container4-box1"><img src="/images/list-feature-recordings-704-862b171b4c222768d374f1efed0d7c370ca17c3498ccca924651f6c047f9074a.png" alt=""/></div>
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
        <div className="container5-box2"> <img src="/images/list-feature-embeddable-704-d586f5641dec19be526577f1d799a05b77d23428f90489afc9a5a7b147861b28.png" alt=""/></div>
    </div> 

    <h2 className="alone">And there's more...</h2>

    <div className="below1">
        <div className="below1-box1">
            <img src="/images/feature-scheduling-ee07b25478bdeed93fd6c1f396073e0fc00a181bb33b4146a57822a09bb63f1d.svg" alt=""/>
            <h3>One link, two functions</h3>
            <p>Your scheduled event automatically turns into a live stream page with chat as soon as you go live. Use only one link to promote your event in advance and during your broadcast.</p>
        </div>

            <div className="below1-box2">
                <img src="/images/feature-stats-c6266785ea6387013492c0187b31f4ebf449ca103bec659eab584cb672c41851.svg" alt=""/>
                <h3>Top level listener stats</h3>
                <p>Keep informed on how well your broadcasts are performing with end-of-broadcast and weekly stats emails. Get numbers on your unique listeners, chat messages and hearts.</p>
            </div>
    </div>

    <div className="below2">
        <div className="below2-box1">
            <img src="/images/feature-privacy-6f19d6d6ebb0e5ea7cb043db5826b29e8796250b79e5f469863cb278b108947d.svg" alt=""/>
            <h3>Private access to your channel</h3>
            <p>Decide who can access your channel with access settings enabled. Remain private indefinitely or create one-off exclusive audio content for select listeners only.</p>
        </div>

        
            <div className="below2-box2">
                <img src="/images/feature-listener-metrics-70658753346ea21e8ae036f6a3ab4107b0644c9e15141eb086fe643eb7b3524c.svg" alt=""/>
                <h3>Detailed listener metrics</h3>
                <p>See how many unique listeners connected, how long for, and which countries or cities they tuned in from. View your listener stats over any selectable time period, and export the most relevant data as an easy to use spreadsheet file.</p>
            </div>
    </div>

    <div className="below3">
        <div className="below3-box1">
            <img src="/images/feature-quality-85af85e1ba9f188ac03d15285c25432a5faa0553e7a264edd0e6a6324ac19921.svg" alt=""/>
            <h3>Optimal audio quality</h3>
            <p>Control audio quality as needed to suit bandwidth restrictions or to match the quality required for your type of content. With the desktop app, you can switch between low, standard, and high quality audio even while broadcasting.</p>
        </div>

        
            <div className="below3-box2">
                <img src="/images/feature-livestream-3b54123b0f594ea39c91f1dc0225a57cfee55ced6d8130abd4f2822889be224e.svg" alt=""/>
                <h3>Go white label</h3>
                <p>With a unique livestream URL, you're free to build your own website, app or player around your live audio. We encode your livestream URL in mp3 format at a quality of 128kbps.</p>
            </div>
    </div>

    <h2 className="alone1">Become a Mixlr audio creator today</h2>

    <button type="text" className="below-button"><a href="">Start free trial</a></button>

    <Footer/>    
    
    </>
  )
}

export default App