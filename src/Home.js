import { useLocation } from 'react-router-dom';
import Modal from './components/Modal';
import { useState } from 'react';
import allAudioClips from './Contants';

function Home(){

    const location = useLocation();

    const userName = location.state?.username || 'Camb AI User';// name of the current user (logged in user)
    const [clickedAudioIndex, setClickedAudioIndex] = useState(""); // index of audio that is currently being edited
    const [modalOpen, setModalOpen] = useState(false); // show if model is open or not
    const [modalName, setModalName] = useState("newAudio") // shows if the edit button or add new audio is pressed
    
    const [audioClips, setAudioClips] = useState(allAudioClips); // Audios
    
    // Triggered when user press play button
    const playAudio= (id)=> {
        let audio = new Audio(id)
       audio.play();
        
      }


    // Triggered when user press edit button
    const handleEdit= (index)=>{
            
        setModalName("editAudio")
        setClickedAudioIndex(index)
        setModalOpen(true)
    }

    // Save the new name of the audio that user edited 
    const handleSaveEdits = (audioName)=>{

        allAudioClips[clickedAudioIndex] =  {ownerName: audioName, clip:allAudioClips[clickedAudioIndex].clip}
        setModalOpen(false)
       
    }

    // Save new audio user added
    const handleSaveNew = ( audioName, audioUrl)=>{
        const newAudio = { ownerName: audioName, clip: audioUrl}
        setAudioClips([...audioClips, newAudio])
        setModalOpen(false);
    }
      
        
    return(
        <div className="flex flex-col items-center">

            {/** Header Starts Here */}
            <h1 className=" font-bold my-6">Welcom Back <span style={{color:'#ff99cc'}}>{userName}</span></h1>
            <div className="flex flex-row m-5">
                <h2 className="text-4xl font-bold mx-4">Audio Clips</h2>
                {<img src={require("./Assets/Images/music.png")} className='object-cover h-10 w-10'/>}
            </div>
            {/** Hearder Ends Here */}
            

            {/** START HERE: LOOP THROUGH THE AUDIOS */}
            {audioClips.map((audio, index) => (
                <div key={audio.clip} className="mb-2 flex flex-row justify-between items-center bg-gray-500 w-2/4 h-8 rounded px-2">
                   
                    <p>{audio.ownerName}</p>
                    <div className='flex flex-row justify-between items-center rounded'>
                        
                        {/** EDIT BUTTON */}
                        {userName === audio.ownerName && (

                            <button onClick={()=>handleEdit(index)} className="bg-green-500 text-white px-4 rounded-xl mx-3">
                                Edit
                            </button> 
                        )}


                        {/** PLAY BUTTON */}
                        <button className="bg-blue-600" onClick={()=>playAudio(audio.clip)} >
                            <img src={require("./Assets/Images/play-button.png")} className='object-cover h-5 w-7'/>
                            <audio src={audio.clip} id={audio.ownerName}></audio>
                        </button>
                    </div>
                    
                </div>
            ))}
            {/**END LOOP HERE  */}



            {/** ADD NEW AUDIO BUTTON */}
            <button
                onClick={()=>{
                    setModalName("newAudio")
                    setModalOpen(true)
                }}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                New Audio Clip
            </button>

                
                {/** MODAL Here */}
                { modalOpen ? 
                    <Modal
                        closeModal={()=>setModalOpen(false)}
                        modalName={modalName}
                        audioIndex={clickedAudioIndex}
                        audio={userName}
                        handleSaveEdits={handleSaveEdits} 
                        handleSaveNew={handleSaveNew}
                    /> 
                    :null
                }
       
    </div>
    );
}

export default Home;