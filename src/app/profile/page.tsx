"use client";
import { Edit, UserCircle as UserCircleIcon } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
    const [username, setUsername] = useState("doeMe69");
    const [gender, setGender] = useState("G lang");
    const [email, setEmail] = useState("doeme69@gmail.com");
    const [license, setLicense] = useState("6696969696");
    const [city, setCity] = useState("Yatyat");
    const [name, setName] = useState("John Doe");

    const [isEditing, setIsEditing] = useState(false);

    const handleImageClick = () => {
        const fileInput = document.getElementById('file-upload');
        if (fileInput) {
            fileInput.click();
        } else {
            console.error("File input element not found!");
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        console.log('Image selected successfully!');
        console.log('File Name:', file.name);
        console.log('File Size:', file.size, 'bytes');
        console.log('File Type:', file.type);
        } else {
            console.log('No file was selected.');
        }
    };
    
    const handleSave = () => {
        console.log("New username saved:", username);
        console.log("New gender saved:", gender);
        console.log("New email saved:", email);
        console.log("New license saved:", license);
        console.log("New city saved:", city);
        console.log("New name saved:", name);
    }

    return (
        <div className="flex flex-col items-center min-h-screen px-4 py-8 md:px-12 py-20">
            
            {/* Profile box */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4 md:gap-10 mt-10">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative group" onClick={handleImageClick}>
                        <UserCircleIcon className="h-24 w-24 md:h-40 md:w-40 text-gray-500 cursor-pointer group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="font-semibold text-xs md:text-base">Upload Picture</span>
                        </div>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden" 
                            accept=".png, .jpeg, .jpg"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="flex flex-col text-center md:text-left">
                        {isEditing ? (
                            <input 
                                type="text"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg text-2xl md:text-3xl"
                            />
                        ) : (
                            <p className="text-3xl md:text-4xl font-bold mb-1 cursor-not-allowed">{name}</p>
                        )}
                        
                        <p className="italic text-sm md:text-base text-gray-500">{email}</p>
                    </div>
                </div>
                <button 
                    onClick={() => {
                        setIsEditing(!isEditing);
                        if (isEditing) {
                        handleSave();
                        }}}
                    className="bg-[#004aad] hover:bg-[#00337a] text-white py-2 px-6 rounded-lg transition-colors duration-200"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>

            {/* Details box */}
            <div className="w-full max-w-4xl mt-10">
                {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Username Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Username</p>
                            <input 
                                type="text"
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg"
                            />
                        </div>

                        {/* Gender Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Gender</p>
                            <input 
                                type="text"
                                id="gender"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg"
                            />
                        </div>

                        {/* Email Address Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Email Address</p>
                            <input 
                                type="text"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg"
                            />
                        </div>

                        {/* License Number Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">License Number</p>
                            <input 
                                type="text"
                                id="license"
                                value={license}
                                onChange={e => setLicense(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg"
                            />
                        </div>

                        {/* City Hall Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">City Hall</p>
                            <input 
                                type="text"
                                id="city"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                className="rounded px-4 py-2 w-full text-black bg-white shadow-lg"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Username Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Username</p>
                            <p className="rounded px-4 py-2 w-full text-gray-500 bg-gray-300 cursor-not-allowed">{username}</p>
                        </div>

                        {/* Gender Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Gender</p>
                            <p className="rounded px-4 py-2 w-full text-gray-500 bg-gray-300 cursor-not-allowed">{gender}</p>
                        </div>

                        {/* Email Address Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">Email Address</p>
                            <p className="rounded px-4 py-2 w-full text-gray-500 bg-gray-300 cursor-not-allowed">{email}</p>
                        </div>

                        {/* License Number Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">License Number</p>
                            <p className="rounded px-4 py-2 w-full text-gray-500 bg-gray-300 cursor-not-allowed">{license}</p>
                        </div>

                        {/* City Hall Field */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold">City Hall</p>
                            <p className="rounded px-4 py-2 w-full text-gray-500 bg-gray-300 cursor-not-allowed">{city}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


