document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionRegistration');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        const fields = ['firstname', 'lastname', 'email'];
        fields.forEach(field => {
            const input = document.getElementById(field);
            const validationMessage = document.getElementById(`${field}-validation`);
            if (!input.value.trim()) {
                validationMessage.style.display = 'block';
                isValid = false;
            } else {
                validationMessage.style.display = 'none';
            }
        });

        if (isValid) {
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
        } else {
            console.log('Form is not valid');
        }
    });
});
