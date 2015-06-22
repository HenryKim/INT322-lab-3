/*
INT222 B
HYUNGI KIM
025 741 125
FALL 2013
TO Prof. Tom Aratyn
*/
var LoggerLevels = {'DEBUG': 1, 'LOG': 2, 'ERROR' : 3, 'FATAL' : 4};
//STEP 1 creating an object called Logger Lvels and set 4 properties in obj
    Logger = Object.create(LoggerLevels);
//STEP 2 create new object which is proto type of LoggerLevels called Logger a
    Logger.setLogLevel = function (level){this.LogLevel=level;};
//STEP 3; set properties LogLevel as given user input (level)
    Logger.log = function (level, msg){
        if(level >= this.LogLevel) return console.log(msg);
        // if given value (level ) is higher than value already saved(logLevel)
        // than leaves message on log by given sting
        else if(level === null) return console.log(msg);};
        //yet if given value is empty than return given message
//STEP 4 using log() method.
     myLogger = Object.create(Logger);

    myLogger.setLogLevel(myLogger.LOG);    
        myLogger.log(myLogger.LOG, "hello world (log)");
        myLogger.log(myLogger.DEBUG, "hello world (debug)");
        myLogger.log(myLogger.ERROR, "hello world (error)");
//Step 5 creates new object called myLogger and run excute code.


/*Step 6 the reason of their is only 2 out put when their is 3 given excute code
becasue by myLogger.setLogLevel(myLogger.LOG) code the logLevel already
been set to LOG( 2). Yet, in the  execute code myLogger.log(myLogger.DEBUG, "hello world (debug)"
debug(1) is lower than log(2) their is no matched trigger in Logger.log() to gives output*/
