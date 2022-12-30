module.exports = {
    dynamicTable: {
        url: "dynamictable",
        colorProperty: "background-color",
        cols: ["Name", "CPU", "Network", "Disk", "Memory"],
        rows: ["System", "Chrome", "Internet Explorer", "Firefox"],
        warningColor: "#ffc107",
        regExp_CPU: /\d%$/,
        regExp_Disk: /(\d\sMB\/s)$/,
        regExp_Network: /(\d\sMbps)$/,
        regExp_Memory: /(\d\sMB)$/
    }
}