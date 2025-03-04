import racket from "../assets/racket.png"

const data = [
    { column1: 'Row 1, Column 1', column2: 'Row 1, Column 2' },
    { column1: 'Row 2, Column 1', column2: 'Row 2, Column 2' },
    { column1: 'Row 3, Column 1', column2: 'Row 3, Column 2' },
    // Add more rows as needed
  ];
  

function RecommendationComponent() {
    return(
        <div className="mx-10">
            <img className="size-24" src={racket} alt="racket png"/>
            <div className="overflow-x-auto w-72">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Column 1
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Column 2
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {/* Generate dynamic rows here */}
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{row.column1}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{row.column2}</div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default RecommendationComponent;