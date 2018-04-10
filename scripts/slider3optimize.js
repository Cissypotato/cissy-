

var t
var n
initialize()
setInterval(()=>{
    makePrevious(getImg(n))
        .one('transitionend',(e)=>{
           makeNext($(e.currentTarget))    
        })
    
    makeCurrent(getImg(n+1))
    n++   
},3000)





function initialize(){
    t=$('.images>img').length
    n=0
    $('.images>img').eq(0).addClass('current').siblings().addClass('next')
}

function x(n){  
     n=n%t
    return n
}

function getImg(n){
    return $('.images>img').eq(`${x(n)}`)
}
function makePrevious($node){
    return $node.removeClass('current next').addClass('previous')
}
function makeCurrent($node){
    return $node.removeClass('previous next').addClass('current')
}
function makeNext($node){
    return $node.removeClass('current previous').addClass('next')
}