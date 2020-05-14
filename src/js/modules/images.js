
const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImage.style.maxHeight = '80%';
    bigImage.style.maxWidth = '80%';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = event.target;

        if(target && target.classList.contains('preview')) {
            
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);

            document.body.style.overflow ='hidden';

        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow ='';
        }

    });
          
};
export default images;