/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('function.CPUmonitor');
 * mod.thing == 'a thing'; // true
 */


//logger.log("message");
//logger.error("message");
module.exports = {
    log: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log(message);
    },
    error: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"red\">"+message+"</font>");
    },
    important: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"red\">"+message+"</font>");
    },
    blue: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"aqua\">"+message+"</font>");
    },
    green: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"lime\">"+message+"</font>");
    },
    purple: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"fuchsia\">"+message+"</font>");
    },
    yellow: function(message)
    {
        if(Memory.log == undefined){
            Memory.log=true;
        }
        if(Memory.log==true)
            console.log("<b><font color=\"yellow\">"+message+"</font>");
    }
};