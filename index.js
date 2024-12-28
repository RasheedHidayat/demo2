document.addEventListener('DOMContentLoaded', function() {
    const updateBtn = document.getElementById('updateBtn');
    const message = document.getElementById('message');
    const pendingTasks = document.getElementById('pendingTasks');

    message.textContent=localStorage.getItem("msg")||"";
    updateBtn.addEventListener('click', function() {
        localStorage.setItem("msg","Update started. We will inform you once it is completed.")
        message.textContent = 'Update started. We will inform you once it is completed.';
        
    });
});
