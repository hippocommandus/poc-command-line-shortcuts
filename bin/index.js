#!/usr/bin/env node

/**
 * requirements
 */
const yargs = require("yargs");

/**
 * params
 */
const options = yargs
    .usage("Usage: -s <term>")
    .option("s", { alias: "search", describe: "Search by term", type: "string" })
    .option("t", { alias: "tag", describe: "Search by tag", type: "string" })
    .argv;

/**
 * handle search
 */

const commands = [
    { shortcut: "delete folder ubuntu", command: "sudo rm -rf storage", tag: ["ubuntu"] },
    { shortcut: "nvm exec", command: "nvm exec 14.18.1 npm --version", tag: ["node"] },
    { shortcut: "git pull rebase", command: "git pull --rebase origin master", tag: ["git"] },
    { shortcut: "", command: "git push origin feat/WR-1454-newsletter-page -f", tag: ["git"] },
    { shortcut: "", command: "git log --oneline", tag: ["git"] },
    { shortcut: "", command: "git rebase -i HEAD~25", tag: ["git"] },
    { shortcut: "", command: "nvm use 14.18.1", tag: ["node", "nvm"] },
];

if (options.search) {
    console.log(`You've searched by term for ${options.search}`)
    console.log('Search by term is not implemented yet')
} else if (options.tag) {
    console.log(`You've searched by tag for ${options.tag}`)
    console.log(`Here are the results:`)
    commands.forEach(element => {
        if(element.tag.includes(options.tag)) {
            console.log(element.command)
        }
    });
} else {
    console.log('You can either search by term or tag');
}