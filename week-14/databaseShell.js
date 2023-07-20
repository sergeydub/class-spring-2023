var db = {};

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

function getCmd(script) {
    let cmd = script.substring(0, 3);
    return cmd === "GET" || cmd === "SET" ? cmd : undefined;
}

function getKeyStart() {
    return 4;
}

function getKeyEnd(script) {
    return script.indexOf(" ", getKeyStart());
}

function getKey(script) {
    let keyEnd = getKeyEnd(script);
    let key = script.substring(getKeyStart(), keyEnd != -1 ? keyEnd : script.length);
    return isAlphanumeric(key) ? key : undefined;
}

function getValue(script) {
    let result = "";
    let keyEnd = getKeyEnd(script);
    if (keyEnd != -1) {
        result = script.substring(keyEnd + 1, script.length);
    }
    return result;
}

function runcmd(script) {
    let result = "ERROR";
    
    let cmd = getCmd(script);
    if (cmd === undefined) {
        return result;
    }
    
    let key = getKey(script);
    if (key === undefined) {
        return result;
    }
    
    let value = getValue(script);
    switch (cmd) {
        case "SET":
            if (db[key] === undefined) {
                result = "CREATED";
            } else if (db[key] === value) {
                result = "UNCHANGED";
            } else {
                result = "UPDATED";
            }
            db[key] = value;
            break;

        case "GET":
            if (value === "") {
                if (db[key] === undefined) {
                    result = "NOT FOUND";
                } else {
                    result = "VALUE=" + db[key];
                }
            }
            break;

        default:
            break;
    }

    return result;
}

/**
 * Implement the solution in this function
 *
 * @param {string[]} script The list of commands.
 * @returns {string[]} The list of string outputs per command.
 */
function run (script) {
    let result = [];
    for (let i = 0; i < script.length; i++) {
        result.push(runcmd(script[i]));
    }
    return result;
}

