const Api_links = {
    default: "default.json",
    get_all_machines: "machines.json",
    get_machine: "machine.json",
};

function getApiLink(api) {
    if (Api_links[api] !== undefined) {
        return Api_links[api];
    }
    else {
        return Api_links.default;
    }
}

export { getApiLink };