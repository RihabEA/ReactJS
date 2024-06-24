import React, {useState} from "react";

function TextBox({onInsert}) {
    const [value, setValue] = useState(0);
    const handleChange = (e) => setValue(+e.target.value);
    const handleInsert = () => {
        onInsert(value);
    };

    return (
        <div className="flex rounded-lg">
            <input onChange={handleChange} type="number" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on"
                   className="w-1/4 border-4 py-3 px-4 block w-full border-gray-200 rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
            <button type="button" onClick={handleInsert}
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Button
            </button>
        </div>
    );
}

export default TextBox;