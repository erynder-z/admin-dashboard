const tabswitch = document.getElementById('tabswitch')
const project = document.getElementById('project')
const announcement = document.getElementById('announce')

tabswitch.addEventListener('click', () => {
    if (
        project.style.display === 'none' &&
        announcement.style.display === 'block'
    ) {
        project.style.display = 'block'
        announcement.style.display = 'none'
    } else {
        project.style.display = 'none'
        announcement.style.display = 'block'
    }
})
