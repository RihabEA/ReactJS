import * as React from "react";

export const EditCell = ({row, table}) => {
    const meta = table.options.meta;
    const setEditedRows = (e) => {
        meta?.setEditedRows((old) => ({
            ...old,
            [row.id]: !old[row.id],
        }));
    };

    const removeRow = () => {
        meta?.removeRow(row.index);
    };
    return (
        <div className="edit-cell-container">
            <div className="edit-cell-action">
                <button onClick={setEditedRows} name="edit">
                    ✐
                </button>
                <button onClick={removeRow} name="remove">
                    X
                </button>
            </div>
        </div>
    );
};