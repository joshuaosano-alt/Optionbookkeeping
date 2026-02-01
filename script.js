document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const status = document.getElementById('status');
    status.style.marginTop = "15px";
    status.style.color = "green";
    status.innerHTML = "Sending message to Option Bookkeeping...";

    // This simulates a successful send
    setTimeout(() => {
        status.innerHTML = "Thank you! We will contact you shortly regarding your request.";
        this.reset();
    }, 2000);
});