$(document).ready(function() {
    $('#reservation-form').submit(function(e) {
        e.preventDefault();
        
        const fullName = $('#full-name').val();
        const email = $('#email').val();
        const date = $('#date').val();
        const preference = $('input[name="preference"]:checked').val();
        const people = $('#people').val();
        const newsletter = $('#newsletter').is(':checked') ? 'Yes' : 'No';
        
        if (!fullName || !email || !date || !people) {
            alert('Please fill in all required fields marked with *');
            return;
        }
        
        const formattedDate = new Date(date).toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const detailsHTML = `
            <div class="detail-item">
                <div class="detail-label">Full Name</div>
                <div class="detail-value">${fullName}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Email</div>
                <div class="detail-value">${email}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Visit Date</div>
                <div class="detail-value">${formattedDate}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Seating Preference</div>
                <div class="detail-value">${preference}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Number of People</div>
                <div class="detail-value">${people}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Newsletter Subscription</div>
                <div class="detail-value">${newsletter}</div>
            </div>
        `;
        
        // Populate details container
        $('#details-container').html(detailsHTML);
        
        // Show the booking details section with animation
        $('#booking-details').slideDown(800);
        
        // Scroll to the booking details
        $('html, body').animate({
            scrollTop: $('#booking-details').offset().top - 100
        }, 1000);
        
        // Show success message
        alert('Reservation submitted successfully! Check your details below.');
        
        // Optional: Reset form (uncomment if you want to reset after submission)
        // $('#reservation-form')[0].reset();
    });
    
    // Set minimum date to today for the date picker
    const today = new Date().toISOString().split('T')[0];
    $('#date').attr('min', today);
    
    // Set a default date (today + 1 day)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    $('#date').val(tomorrowFormatted);
    
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    // Add animation to service cards on hover
    $('.service-card').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    
    // Add click effect to reservation button
    $('.btn').click(function() {
        $(this).css('transform', 'scale(0.98)');
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 200);
    });
});