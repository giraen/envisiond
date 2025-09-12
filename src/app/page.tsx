import { UserPen as UserPenIcon } from 'lucide-react';
import { NotepadText as NotepadIcon } from 'lucide-react';
import { SquareUser as SquareUserIcon } from 'lucide-react';
import { CloudUpload as CloudUploadIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold text-center">Quick Access and Core Features</h1>

      {/* Quick Access Box */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-4xl px-4">
        
        {/* First Column */}
        <div className="flex flex-col items-center justify-center gap-5">

          {/* Profile Settings */}
          <div className="flex items-center justify-center"> 
            <UserPenIcon color="white" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-center text-lg font-bold mb-1">Profile Settings</p>
              <p className="text-gray-300 text-center italic mb-6 text-sm">Manage your account details, preferences, and security settings.</p>
            </div>
          </div>

          {/* Fee History */}
          <div className="flex items-center justify-center"> 
            <NotepadIcon color="white" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-center text-lg font-bold mb-1">Fee History</p>
              <p className="text-gray-300 text-center italic mb-6 text-sm">View and download records of your previous billing reports.</p>
            </div>
          </div>

        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center justify-center gap-5">

          {/* IECEP PECE Roster */}
          <div className="flex items-center justify-center"> 
            <SquareUserIcon color="white" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-center text-lg font-bold mb-1">IECEP PECE Roster</p>
              <p className="text-gray-300 text-center italic mb-6 text-sm">Official registry of licensed Professional Electronics Engineers (PECE)</p>
            </div>
          </div>

          {/* New Report */}
          <div className="flex items-center justify-center"> 
            <CloudUploadIcon color="white" size={100} className="mb-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-center text-lg font-bold mb-1">New Report</p>
              <p className="text-gray-300 text-center italic mb-6 text-sm">Upload or scan an electronics plan to generate an automated billing summary.</p>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}
