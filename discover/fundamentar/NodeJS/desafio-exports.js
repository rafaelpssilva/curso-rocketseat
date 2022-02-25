module.exports = function getFlag(flag1, flag2) {
    const argv = process.argv
    let flags = []
    for (let i in argv) {
        if (argv[i].includes(flag1)) {
            flags.push(argv[++i])
        }
        if (argv[i].includes(flag2)) {
            flags.push(argv[++i])
        }
    }
    console.log(flags[0], flags[1])
}


