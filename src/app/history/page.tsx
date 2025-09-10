import { ScrollText } from 'lucide-react';
import { columns, EceLayouts } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<EceLayouts[]> {
  // Fetch data from your API here.
  return [
    {
      bill_id: "ECE12345",
      title: "CCTV Layout Plan",
      date: "25-Aug-2025",
      status: "pending",
    },
    {
      bill_id: "ECE67890",
      title: "FDAS Layout Plan",
      date: "25-Aug-2025",
      status: "done",
    },
    {
      bill_id: "ECE73293",
      title: "DAS Layout Plan",
      date: "15-Aug-2025",
      status: "done",
    },
    // ...
  ]
}

export default async function HistoryPage() {
  const data = await getData();

  return (
    <div className='px-6 py-2 space-y-4 md:px-12 mt-8'>
      <div className='flex flex-col items-center'>
        <ScrollText size={128} strokeWidth={0.5} />
        <p className='text-justify text-sm md:text-base'>
          View and track all previously generated Electronics Bill reports including dates, plan details and computed fees for easy reference and record keeping
        </p>
      </div>
      
      <div>
        <DataTable<EceLayouts, unknown> columns={columns} data={data} />
      </div>
    </div>
  );
}
