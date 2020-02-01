const MachinesTypes = [
    "Without_type",
    "Milling",
    "Lathe"
];

function getMachineType(type) {
    if (MachinesTypes[type] !== undefined) {
        return MachinesTypes[type];
    }
    else {
        return "Unknow_type";
    }
}

export { getMachineType };
