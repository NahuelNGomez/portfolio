import Link from "next/link";

export default function TableResume() {
    return (
        <div className="relative overflow-x-auto p-4 m-4 ">
          <table className="w-full text-sm text-left text-gray-800 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Resume
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Link href="/CV - NahuelGomez.pdf">
                <div className='flex items-center'><svg className="h-8 w-8 text-black  p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />  <polyline points="13 2 13 9 20 9" /></svg><p className="text-green-800">Español</p></div></Link>
                </th>
              </tr>
            </tbody>
          </table>
       </div>

    )

}