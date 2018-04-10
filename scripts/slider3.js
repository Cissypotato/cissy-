// $('.images>img').eq(0).addClass('current')
// $('.images>img').eq(0).siblings().addClass('next')

// var t=$('.images>img').length
// var n=1

// setInterval(()=>{
//     $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('previous')
//         .one('transitionend',(e)=>{
//             $(e.currentTarget).removeClass('previous').addClass('next')
            
//         })
    
//     $(`.images > img:nth-child(${x(n+1)})`).removeClass('next').addClass('current')
    
//     n++
    
// },3000)


// function x(n){
//     if(n>t){
//         n=n%t
//         if(n===0){
//             n=t
//         }
//     }
//     return n
// }






$('.images>img').eq(0).addClass('current')
$('.images>img').eq(0).siblings().addClass('next')

var t=$('.images>img').length
var n=0

setInterval(()=>{
    $('.images>img').eq(`${x(n)}`).removeClass('current').addClass('previous')
        .one('transitionend',(e)=>{
            $(e.currentTarget).removeClass('previous').addClass('next')
            
        })
    
        $('.images>img').eq(`${x(n+1)}`).removeClass('next').addClass('current')
    
    n++
    
},3000)


function x(n){  
     n=n%t
    return n
}