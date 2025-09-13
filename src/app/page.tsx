import { UserPen as UserPenIcon } from 'lucide-react';
import { NotepadText as NotepadIcon } from 'lucide-react';
import { SquareUser as SquareUserIcon } from 'lucide-react';
import { CloudUpload as CloudUploadIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      
      {/* Top Section */}
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Streamline your Electronics Bill Plan with EnvisionD
        </h1>
        <p className="text-sm text-black font-light">
          EnVisionD simplifies the processing of electronics plans by allowing you to upload or scan your documents, 
          automatically detect symbols, and instantly generate accurate billing reports — all in compliance with 
          national building and electronics code standards.
        </p>
      </div>

      {/* Features Heading */}
      <h2 className="text-2xl font-bold text-black text-center">
        Quick Access and Core Features
      </h2>

      {/* Quick Access Box */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-4xl">
        
        {/* First Column */}
        <div className="flex flex-col items-center justify-center gap-5">

          {/* Profile Settings */}
          <div className="flex items-center justify-center"> 
            <UserPenIcon color="#004aad" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-black text-center text-lg font-bold mb-1">Profile Settings</p>
              <p className="text-black text-center italic mb-6 text-sm font-light">Manage your account details, preferences, and security settings.</p>
            </div>
          </div>

          {/* Fee History */}
          <div className="flex items-center justify-center"> 
            <NotepadIcon color="#004aad" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-black text-center text-lg font-bold mb-1">Fee History</p>
              <p className="text-black text-center italic mb-6 text-sm font-light">View and download records of your previous billing reports.</p>
            </div>
          </div>

        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center justify-center gap-5">

          {/* IECEP PECE Roster */}
          <div className="flex items-center justify-center"> 
            <SquareUserIcon color="#004aad" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-black text-center text-lg font-bold mb-1">IECEP PECE Roster</p>
              <p className="text-black text-center italic mb-6 text-sm font-light">Official registry of licensed Professional Electronics Engineers (PECE)</p>
            </div>
          </div>

          {/* New Report */}
          <div className="flex items-center justify-center"> 
            <CloudUploadIcon color="#004aad" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-black text-center text-lg font-bold mb-1">New Report</p>
              <p className="text-black text-center italic mb-6 text-sm font-light">Upload or scan an electronics plan to generate an automated billing summary.</p>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}
