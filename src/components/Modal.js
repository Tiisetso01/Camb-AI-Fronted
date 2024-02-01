const { useState, useEffect } = require("react")

function Modal({closeModal, modalName, ownerName, handleSaveEdits, handleSaveNew}){

    useEffect(()=>{
        setAudioName(ownerName)
    },[])

    const [audioName, setAudioName] = useState(""); // save the name of the audio
    const [audioUrl, setAudioUrl] = useState(""); // save the URL of the audio


    return(
        <div
            className="fixed flex justify-center flex-col items-center inset-0 bg-black bg-opacity-25">
            
            <div className="bg-white px-2 pb-5 rounded w-3/5">
               
               {/** Close modal button */}
                <button
                    className="bg-transparent float-right"
                    onClick={() =>closeModal()}
                  >
                    <span className="text-2xl flex justify-center items-center h-6 w-6 bg-red-500 rounded-full">
                      x
                    </span>
                </button>
              
                {/** Start Header */}
                <h3 className="text-1xl flex justify-center font-bold mb-2 mt-8 self-auto">
                    {audioName == "editAudio" ? "Edit Audio Name" : "New Audio Name"}
                </h3>

                <hr className="bg-gray-500 h-0.5 mb-5"/>
                {/** End Header */}
                

                {/** Input field for Name of the Audio */}
                <div className="mb-4">
                    <label htmlFor="audio-name" className="block text-sm font-medium">
                        Audio Name
                    </label>
                    <input
                        required
                        type="text"
                        id="audio-name"
                        value={audioName}
                        onChange={(e) => setAudioName(e.target.value)}
                        className="w-full p-2 rounded border"
                    />
                </div>
                
            {/** Input field for Url of the Audio */}
            {
                modalName == "newAudio"
                    ? <div className="mb-4">
                        <label htmlFor="audio-url" className="block text-sm font-medium">
                            Audio Url
                        </label>
                        <input
                             required
                            type="text"
                            id="audio-url"
                            className="w-full mt-1 p-2  border rounded-md mb-4"
                            value={audioUrl}
                            onChange={(e) => setAudioUrl(e.target.value)}
                        />
                      </div>
                    : null
            }

        {/** if The modal if for editing editing fundion is called else save new audio function is invoked  */}
         <button
            type="button"
            className="w-full bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600"
            onClick={()=> modalName == "editAudio"? handleSaveEdits( audioName): handleSaveNew( audioName, audioUrl)}
          >
            Save
          </button>

            </div>
        </div>
    )
}

export default Modal