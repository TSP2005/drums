var n=document.querySelectorAll(".dru").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".dru")[i].addEventListener('click',hell);
function hell(){
    var s=this.innerHTML;
    switch (s){
        case 'W':
        var aud=new Audio("crash.mp3")
        aud.play()
        addAn(s.toLowerCase())

        break;
        case 'A':
        var aud=new Audio("kick-bass.mp3")
        aud.play()
        addAn(s.toLowerCase())

            break;
        case 'S':
            var aud=new Audio("snare.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'D':
        var aud=new Audio("tom-1.mp3")
        aud.play()
        addAn(s.toLowerCase())

            break;
        case 'J':
            var aud=new Audio("tom-2.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'K':
            var aud= new Audio("tom-3.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'L':
            var aud= new Audio("tom-4.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        default : console.log(s)

    }
}
}
document.addEventListener('keypress',function(event){
    var s=event.key
    s=s.toUpperCase()
    switch (s){
        case 'W':
        var aud=new Audio("crash.mp3")
        aud.play()
        addAn(s.toLowerCase())

        break;
        case 'A':
        var aud=new Audio("kick-bass.mp3")
        aud.play()
        addAn(s.toLowerCase())

            break;
        case 'S':
            var aud=new Audio("snare.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'D':
        var aud=new Audio("tom-1.mp3")
        aud.play()
        addAn(s.toLowerCase())

            break;
        case 'J':
            var aud=new Audio("tom-2.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'K':
            var aud= new Audio("tom-3.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        case 'L':
            var aud= new Audio("tom-4.mp3")
            aud.play()
            addAn(s.toLowerCase())

            break;
        default: console.log(s)
    }
    
})

function addAn(s){
var a=document.querySelector('.'+s)
a.classList.add('pressed')
setTimeout(function(){
    a.classList.remove('pressed')
},300)
}
