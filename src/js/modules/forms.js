import checkNumInputs from './checkNumInputs';
import clearState from './clearState';
import clearInputs from './clearInputs';

const forms = (state) => {
    const form =document.querySelectorAll('form'),
          windows =document.querySelectorAll('[data-modal]'),
          inputs = document.querySelectorAll('input'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    
    checkNumInputs('input[name = "user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: "Что-то пошло не так..."
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const closeModal = () => {

        windows.forEach(item => {
            item.style.display = 'none';
        });

        document.body.style.overflow = '';
        document.body.style.marginRight =`0px`;

    };


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {

                    setTimeout(() => {
                        statusMessage.remove();
                        closeModal();

                    }, 3000);
                    clearState(state);
                    clearInputs(inputs, windowType, windowProfile);
                });
        });
    });
};

export default forms;