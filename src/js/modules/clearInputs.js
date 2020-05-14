
const clearInputs = (inputSelect, optionSelect, checkBoxSelect) => {
    inputSelect.forEach(item => {
        item.value = '';
    });
    
    optionSelect.forEach((option) =>{
        option.value = 'default';
    });
    
    checkBoxSelect.forEach((box) => {
        box.checked = false;
    });        
};
export default clearInputs;