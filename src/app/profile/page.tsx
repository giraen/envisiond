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
        <div className="flex flex-col items-center min-h-screen gap-8">
            {/* Profile box */}
            <div className="flex items-center justify-center gap-5 mt-10">
                <div className="relative group" onClick={handleImageClick}>
                  <UserCircleIcon className="h-40 w-40 text-gray-400 cursor-pointer group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-semibold">Upload Picture</span>
                  </div>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden" 
                    accept=".png, .jpeg, .jpg"
                    onChange={handleImageChange}
                    />
                </div>
                <div className="flex flex-col">
                    {isEditing ? (
                        <input 
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    ) : (
                        <p className="text-3xl font-bold mb-1 cursor-not-allowed">{name}</p>
                    )}
                    
                    <p className="italic mb-6 text-m">johndoe@gmail.com</p>
                </div>
                <button 
                    onClick={() => {
                        setIsEditing(!isEditing);
                        if (isEditing) {
                        handleSave();
                        }}}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-150 cursor-pointer"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>

            {/* Details box */}

            {isEditing ? (
                <div className="grid grid-cols-2 gap-8 gap-x-50">

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Username</p>
                        <input 
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Gender</p>
                        <input 
                            type="text"
                            id="gender"
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Email Address</p>
                        <input 
                            type="text"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">License Number</p>
                        <input 
                            type="text"
                            id="license"
                            value={license}
                            onChange={e => setLicense(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">City Hall</p>
                        <input 
                            type="text"
                            id="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            className="rounded px-4 py-2 w-64 text-black bg-white"
                        />
                    </div>

                </div>
            ) : (
                <div className="grid grid-cols-2 gap-8 gap-x-50">

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Username</p>
                        <p className="rounded px-4 py-2 w-64 text-gray-600 bg-gray-400 cursor-not-allowed">{username}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Gender</p>
                        <p className="rounded px-4 py-2 w-64 text-gray-600 bg-gray-400 cursor-not-allowed">{gender}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">Email Address</p>
                        <p className="rounded px-4 py-2 w-64 text-gray-600 bg-gray-400 cursor-not-allowed">{email}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">License Number</p>
                        <p className="rounded px-4 py-2 w-64 text-gray-600 bg-gray-400 cursor-not-allowed">{license}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold mb-1">City Hall</p>
                        <p className="rounded px-4 py-2 w-64 text-gray-600 bg-gray-400 cursor-not-allowed">{city}</p>
                    </div>

                </div>
            )}

        </div>
    );
}
