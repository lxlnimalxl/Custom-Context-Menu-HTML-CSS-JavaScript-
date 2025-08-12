let contextMenuElement = document.querySelector('.contextMenu')

document.body.addEventListener('contextmenu' , function contextMenuF(event){
    event.preventDefault()
    if(contextMenuElement.style.display === 'none'){
        contextMenuElement.style.left = event.pageX + 'px'
        contextMenuElement.style.top = event.pageY + 'px'
        contextMenuElement.style.display = 'block'
    }else{
        contextMenuElement.style.left = event.pageX + 'px'
        contextMenuElement.style.top = event.pageY + 'px'
    }
    console.log(event)
})


document.body.addEventListener('click' , function clickRemoveMenu(){
    contextMenuElement.style.display = 'none'
})


document.body.addEventListener('keydown' , function clickRemoveMenu(event){
    if(event.keyCode === 27){
        contextMenuElement.style.display = 'none'
    }
})