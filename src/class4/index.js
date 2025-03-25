document.addEventListener('DOMContentLoaded', () => {
  
   const tasks = document.querySelectorAll('.draggable')
   const dropZone = document.querySelector('.dropZone')

   tasks.forEach((task) => {
    task.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
    })
   });

   dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
   });

   dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('text/plain');
    const taskElement = document.getElementById(taskId)
    dropZone.appendChild(taskElement)
   })



});
