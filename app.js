document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionRegistration');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const data = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            phonenumber: formData.get('phonenumber'),
            subscription: formData.get('subscription'),
            services: formData.getAll('services')
        };

        console.log('Form Data:', data);
    });
});
