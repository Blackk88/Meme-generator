import React, {useEffect, useState} from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState("")

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    

    function getNewImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMemeImage => {
            return {
                ...prevMemeImage,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />

                <button 
                    className="button"
                    onClick={getNewImage}
                >
                        Get a new meme image 🖼 
                </button> 
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme