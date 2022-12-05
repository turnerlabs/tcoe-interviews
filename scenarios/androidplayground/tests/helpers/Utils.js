class Utils{
    
    getRandom(from,to){
        return  Math.floor(Math.random() * (to - from + 1)) + from;
    }
}
module.exports = new Utils();
