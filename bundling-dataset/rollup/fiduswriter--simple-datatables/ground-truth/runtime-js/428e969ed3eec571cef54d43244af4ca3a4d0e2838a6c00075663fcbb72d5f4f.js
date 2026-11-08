
            import {DataTable} from "../dist/module.js"
            window.dt = new DataTable("#demo-table", {
                perPageSelect: [5, 10, 15, ["All", -1]],
                columns: [
                    {
                        select: 2,
                        sortSequence: ["desc", "asc"]
                    },
                    {
                        select: 3,
                        sortSequence: ["desc"]
                    },
                    {
                        select: 4,
                        cellClass: "green",
                        headerClass: "red"
                    }
                ]
            })
        